/* =====================================================================
   Karlo Al Hindy | Resume and portfolio
   js/main.js: portfolio lightbox only.

   How it works
   - Every portfolio thumbnail is a normal link to the full-size image,
     marked with the data-lightbox attribute, so it still works if
     JavaScript is switched off.
   - This script stops that link from navigating away and instead shows the
     image inside the Bootstrap modal with id="lightbox".
   ===================================================================== */
(function () {
  'use strict';

  var modalEl = document.getElementById('lightbox');
  if (!modalEl) { return; } // only the portfolio page has the modal

  var modal = new bootstrap.Modal(modalEl);
  var imgEl = document.getElementById('lightbox-img');
  var titleEl = document.getElementById('lightbox-title');

  document.querySelectorAll('a[data-lightbox]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();                       // stay on the page
      var thumb = link.querySelector('img');
      imgEl.src = link.getAttribute('href');        // full-size image
      imgEl.alt = thumb ? thumb.alt : '';           // reuse the thumbnail description
      titleEl.textContent = link.dataset.title;     // project name as the heading
      modal.show();
    });
  });
})();
