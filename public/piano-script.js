const keyMap = {
	KeyA: {
		label: 'C',
		note: 60,
	},
	KeyW: {
		label: 'C#',
		note: 61,
	},
	KeyS: {
		label: 'D',
		note: 62,
	},
	KeyE: {
		label: 'D#',
		note: 63,
	},
	KeyD: {
		label: 'E',
		note: 64,
	},
	KeyF: {
		label: 'F',
		note: 65,
	},
	KeyT: {
		label: 'F#',
		note: 66,
	},
	KeyG: {
		label: 'G',
		note: 67,
	},
	KeyY: {
		label: 'G#',
		note: 68,
	},
	KeyH: {
		label: 'A',
		note: 69,
	},
	KeyU: {
		label: 'A#',
		note: 70,
	},
	KeyJ: {
		label: 'B',
		note: 71,
	},
};

const context = new AudioContext();

function loadSample(url) {
	return fetch(url)
		.then((response) => response.arrayBuffer())
		.then((buffer) => context.decodeAudioData(buffer));
}

function playSample(sample, note) {
	const source = context.createBufferSource();
	source.buffer = sample;
	source.playbackRate.value = 2 ** ((note - 60) / 12);
	source.connect(context.destination);
	source.start(0);
}

function getOcatave() {
	return (keyMap['KeyA'].note - 60) / 12;
}

function updateCounter() {
	let octaveEle = [...document.getElementsByClassName('octave-count')][0];
	octaveEle.innerHTML = getOcatave();
}

window.onload = () => {
	updateCounter();
};

function moveOctave(direction) {
	Object.keys(keyMap).forEach((key) => {
		direction === 'up'
			? (keyMap[key].note += 12)
			: (keyMap[key].note -= 12);
	});
	updateCounter();
}

function resetOcatave() {
	let initialNote = 60;
	Object.keys(keyMap).forEach((key, idx) => {
		keyMap[key].note = initialNote + idx;
	});
	updateCounter();
}

loadSample('./C4v80.wav').then((sample) => {
	document.addEventListener('keydown', (event) => {
		console.log(`event.code`, event.code);
		let note = keyMap?.[event.code];

		if (event.code === 'NumpadAdd') {
			moveOctave('up');
		} else if (event.code === 'NumpadSubtract') {
			moveOctave('down');
		} else if (event.code === 'NumpadMultiply') {
			resetOcatave();
		}
		if (note) {
			playSample(sample, note.note);
			let key = [...document.getElementsByClassName(note.label)];
			key[0].classList.add('active-key');
		}
	});

	document.addEventListener('keyup', (event) => {
		let note = keyMap?.[event.code];
		if (note) {
			let key = [...document.getElementsByClassName(note.label)];
			key[0].classList.remove('active-key');
		}
	});
});
