const changeButton = document.querySelectorAll('.changeButton');
const tanyaContent = document.querySelector('.tanyaContent');
const photoTanya = document.querySelector('.photoTanya');
const johnContent = document.querySelector('.johnContent');
const photoJohn = document.querySelector('.photoJohn');

changeButton[1].addEventListener('click', shift);
changeButton[0].addEventListener('click', shift);

function shift() {
  if (
    window.getComputedStyle(photoJohn).visibility === 'hidden' &&
    window.getComputedStyle(johnContent).visibility === 'hidden'
  ) {
    photoJohn.style.visibility = 'visible';
    johnContent.style.visibility = 'visible';
    photoTanya.style.visibility = 'hidden';
    tanyaContent.style.visibility = 'hidden';
  } else {
    photoJohn.style.visibility = 'hidden';
    johnContent.style.visibility = 'hidden';
    photoTanya.style.visibility = 'visible';
    tanyaContent.style.visibility = 'visible';
  }
}
