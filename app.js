/* ==========================================================
   Auto F1 — app.js
   Modos 3D / AR · Progreso · Error
   Sin console.log · Sin dependencias externas
   ========================================================== */

(function () {
  'use strict';

  /* --- Referencias DOM ------------------------------------- */
  const mv = document.getElementById('mv');
  const btn3d = document.getElementById('btn-3d');
  const btnAr = document.getElementById('btn-ar');
  const loader = document.getElementById('loader');
  const errorMsg = document.getElementById('error-msg');
  const arNotice = document.getElementById('ar-notice');
  const progressWrap = document.getElementById('progress-wrap');
  const progressBar = document.getElementById('progress-bar');
  const btnRetry = document.getElementById('btn-retry');

  /* =========================================================
     CARGA DEL MODELO
     ========================================================= */

  /* Barra de progreso alimentada por el evento 'progress' */
  mv.addEventListener('progress', function (e) {
    var pct = (e.detail.totalProgress * 100).toFixed(1);
    progressBar.style.width = pct + '%';
  });

  /* Modelo cargado correctamente: ocultar loader y barra */
  mv.addEventListener('load', function () {
    progressBar.style.width = '100%';
    setTimeout(function () {
      loader.hidden = true;
      progressWrap.hidden = true;
      errorMsg.hidden = true;
    }, 300);
  });

  /* Error real del model-viewer: ocultar loader, mostrar panel */
  mv.addEventListener('error', function () {
    loader.hidden = true;
    progressWrap.hidden = true;
    errorMsg.hidden = false;
  });

  /* Reintentar: recarga la página completa */
  btnRetry.addEventListener('click', function () {
    location.reload();
  });

  /* =========================================================
     MODOS DE VISUALIZACIÓN
     ========================================================= */

  /* --- Modo 3D -------------------------------------------- */
  btn3d.addEventListener('click', function () {
    setMode('3d');
  });

  /* --- Modo AR -------------------------------------------- */
  btnAr.addEventListener('click', function () {
    if (mv.canActivateAR) {
      setMode('ar');
      mv.activateAR();
    } else {
      arNotice.hidden = false;
      arNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  /* Gestión de estado de los botones y atributos ARIA */
  function setMode(mode) {
    var is3d = (mode === '3d');

    btn3d.classList.toggle('btn--active', is3d);
    btn3d.setAttribute('aria-pressed', String(is3d));

    btnAr.classList.toggle('btn--active', !is3d);
    btnAr.setAttribute('aria-pressed', String(!is3d));

    if (is3d) {
      arNotice.hidden = true;
      mv.autoRotate = true;
    } else {
      mv.autoRotate = false;
    }
  }

  /* Detectar cierre de sesión AR para volver al modo 3D */
  mv.addEventListener('ar-status', function (e) {
    var status = e.detail.status;
    if (status === 'not-presenting') {
      setMode('3d');
    }
    if (status === 'failed') {
      arNotice.hidden = false;
      setMode('3d');
    }
  });

})();
