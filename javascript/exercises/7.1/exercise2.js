const asides = document.querySelector('.asides');

asides.addEventListener('click', function(e) {
  if (e.target.nextElementSibling.style.display == 'flex') {
    e.target.nextElementSibling.style.display = 'none';
  }
  else {
    e.target.nextElementSibling.style.display = 'flex';    
  }
})