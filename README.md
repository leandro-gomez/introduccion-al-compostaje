# introduccion-al-compostaje

Introducción al compostaje mediante el juego

## Inicializaión

```bash
npm install
```

### Git hooks

In order to enable `pre-push` hooks only, run:

`ln -s $PWD/githooks/pre-push/run_hooks.sh .git/hooks/pre-push`

### Desarrollo

```bash
# Servir los archivos compilados y recargar si hay cambios
npm run serve

# Verificar estilos
npm run lint
```

## Compilar y minificar para producción

```bash
npm run build
```
