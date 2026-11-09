(function () {
  'use strict';

  var mv = document.getElementById('mv');
  var cargando = document.getElementById('cargando');
  var fallo = document.getElementById('fallo');
  var barra = document.getElementById('barra');
  var pct = document.getElementById('pct');
  var btn3d = document.getElementById('btn3d');
  var btnAR = document.getElementById('btnAR');
  var aviso = document.getElementById('aviso');
  var reintentar = document.getElementById('reintentar');

  mv.addEventListener('progress', function (e) {
    var p = Math.round(e.detail.totalProgress * 100);
    barra.style.width = p + '%';
    pct.textContent = p + '%';
  });

  mv.addEventListener('load', function () {
    cargando.classList.add('oculto');
    fallo.classList.add('oculto');
  });

  mv.addEventListener('error', function () {
    cargando.classList.add('oculto');
    fallo.classList.remove('oculto');
  });

  reintentar.addEventListener('click', function () {
    location.reload();
  });

  btn3d.addEventListener('click', function () {
    btn3d.classList.add('activo');
    btnAR.classList.remove('activo');
    btn3d.setAttribute('aria-pressed', 'true');
    btnAR.setAttribute('aria-pressed', 'false');
    aviso.classList.add('oculto');
    mv.autoRotate = true;
  });

  btnAR.addEventListener('click', function () {
    btnAR.classList.add('activo');
    btn3d.classList.remove('activo');
    btnAR.setAttribute('aria-pressed', 'true');
    btn3d.setAttribute('aria-pressed', 'false');

    if (mv.canActivateAR) {
      aviso.classList.add('oculto');
      mv.activateAR();
    } else {
      aviso.textContent = 'Este dispositivo o navegador no soporta realidad aumentada. Probá desde un celular con Chrome en Android o Safari en iPhone.';
      aviso.classList.remove('oculto');
    }
  });

  mv.addEventListener('ar-status', function (e) {
    if (e.detail.status === 'not-presenting' || e.detail.status === 'failed') {
      btn3d.classList.add('activo');
      btnAR.classList.remove('activo');
      mv.autoRotate = true;
    }
  });
})();