const url = document.querySelector('.video-url');
const views = document.querySelector('.how-much-views');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  for (let i = 0; i < views.value; i++) {
    window.open(url.value);
  }
});
