# Diagnóstico: claragromaches.com — fallo en HTTPS y www

**Fecha:** 2026-06-22
**Dominio:** `claragromaches.com`
**Hosting:** GitHub Pages (repo `cgromaches.github.io`)

## Resumen

El sitio está alojado en GitHub Pages. El DNS está correctamente configurado y
HTTP funciona, pero **GitHub no ha emitido el certificado TLS** para el dominio
personalizado. Eso es lo que rompe HTTPS, y también hace que el redirect de
`www` baje a HTTP en vez de HTTPS.

## Comprobaciones realizadas

### Lo que funciona ✅

| Comprobación | Resultado |
|---|---|
| DNS apex (A) | `185.199.108-111.153` (IPs correctas de GitHub Pages) |
| DNS IPv6 (AAAA) | `2606:50c0:800x::153` (correctas) |
| DNS www (CNAME) | → `cgromaches.github.io` (correcto) |
| `http://claragromaches.com` | `200 OK` |
| `http://www.claragromaches.com` | `301` → redirige al apex |
| Registros CAA | Ninguno bloqueando a Let's Encrypt |

### Lo que falla ❌

**1. HTTPS sirve el certificado equivocado**

Al pedir `https://claragromaches.com`, GitHub devuelve su certificado comodín de
reserva:

```
subject = CN = *.github.io
SAN: *.github.com, *.github.io, *.githubusercontent.com, github.com, ...
```

Ese certificado **no incluye `claragromaches.com` ni `www.claragromaches.com`**,
de ahí el error:

```
SSL: no alternative certificate subject name matches target host name
```

Es la señal inequívoca de que GitHub aún **no ha aprovisionado el certificado
Let's Encrypt** para el dominio personalizado.

**2. El redirect de www baja a HTTP, no a HTTPS**

```
http://www.claragromaches.com → 301 → Location: http://claragromaches.com/
```

Redirige a `http://` (sin S), lo que confirma que **"Enforce HTTPS" está
desactivado** en la configuración de Pages.

## Causa

GitHub solo emite el certificado del dominio personalizado cuando el dominio
está guardado en *Settings → Pages* y la verificación DNS se ha completado. Si
sirve el cert `*.github.io`, normalmente es porque:

- El dominio personalizado se configuró hace poco y el certificado aún se está
  emitiendo (puede tardar hasta ~24 h), **o**
- El aprovisionamiento se quedó "atascado" (típico tras cambiar IPs/dominio) y
  hay que forzarlo.

> El contenido del sitio se actualizó el 21-06-2026 (`Last-Modified`), lo que
> encaja con un dominio recién (re)configurado cuyo certificado todavía no
> terminó de provisionarse.

## Cómo arreglarlo

En el repositorio `cgromaches.github.io` → **Settings → Pages**:

1. En **Custom domain**, **borra** `claragromaches.com` y pulsa *Save*.
2. Vuelve a **escribirlo** y *Save* otra vez → re-dispara el aprovisionamiento
   del certificado.
3. Espera al check verde *"DNS check successful"* y a que se emita el
   certificado (de minutos a 24 h).
4. Cuando esté disponible, **marca la casilla "Enforce HTTPS"**.

Esto resuelve las tres cosas a la vez: emite el certificado válido para apex y
www, hace que `https://` funcione, y convierte el redirect de www en `https://`.

## Verificación posterior

Para comprobar cuándo GitHub ha emitido el certificado correcto:

```bash
echo | openssl s_client -connect claragromaches.com:443 \
  -servername claragromaches.com 2>/dev/null \
  | openssl x509 -noout -subject

# Correcto cuando el subject muestre claragromaches.com (no *.github.io)
```
