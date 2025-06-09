setInterval(function() {
console.clear();
}, 1000);
  window.addEventListener('click', () => {
    const audio = document.getElementById('bgm');
    audio.play();
  }, { once: true });
