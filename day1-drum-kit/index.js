(function () {
	function playSound (e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

		if(!audio) return; //stop function
		audio.currentTime = 0; //restart to the start the sound
		audio.play();
		key.classList.add('playing');
	}

	function removeTransition(e) {
		if(e.propertyName !== 'transform') return; //skip when it is not a transform (scale)
		this.classList.remove('playing');
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));

	window.addEventListener('keydown', playSound);

}());