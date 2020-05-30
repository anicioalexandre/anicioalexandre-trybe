const asides = document.querySelector('.asides');

asides.addEventListener('click', function (e) {
  if (e.target && e.target.nodeName == 'H2') {
    if (e.target.nextElementSibling.style.display == 'flex') {
      e.target.nextElementSibling.style.display = 'none';
    }
    else {
      e.target.nextElementSibling.style.display = 'flex';
    }
  }

})