     const container = document.querySelector('.container');

	if (container) {
	  const backCirclesDiv = document.createElement('div');
  	backCirclesDiv.className = 'backcircles';

 	 const ul = document.createElement('ul');
	  for (let i = 0; i < 10; i++) {
 	   const li = document.createElement('li');
 	   ul.appendChild(li);
 	 }

 	 backCirclesDiv.appendChild(ul);
 	 container.appendChild(backCirclesDiv);
	}
window.addEventListener('click', () => {
    const audio = document.getElementById('bgm');
    audio.play();
  }, { once: true });
