// Modo claro u oscuro de Fabre, puesto en <html data-tema> antes de pintar: así la página no parpadea.
// Manda lo que eligió la persona con el botón; si nunca eligió, claro (aunque el sistema esté en
// oscuro). Desde acá sigue src/lib/tema.js (el botón y el color de la barra del navegador).
(function () {
  var tema = null;
  try {
    tema = localStorage.getItem('fabre-tema');
  } catch (e) {}
  if (tema !== 'oscuro' && tema !== 'claro') tema = 'claro';
  document.documentElement.setAttribute('data-tema', tema);
  // Si se entra directo a Cervus, el fondo es negro desde el primer cuadro (base.css), no el de Fabre.
  if (/\/cervus(\/|$)/.test(location.pathname)) document.documentElement.setAttribute('data-entrada', 'cervus');
})();
