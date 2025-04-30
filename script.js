/* script.js */
function showAlert() {
  alert("Mothman was reportedly sighted just before major disasters. Coincidence?");
}


function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}