var audioContext = new AudioContext();
var canvas = document.querySelector('canvas');
var canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var minFrequency = 50;
var maxFrequency = 2000;

var oscillator = audioContext.createOscillator();
var gain = audioContext.createGain();

oscillator.connect(gain);
gain.connect(audioContext.destination);

oscillator.frequency.value = 1000;
oscillator.start(audioContext.currentTime);

gain.gain.value = 0;

document.addEventListener('mousemove', function(e) {
	var percentage = 1 - e.pageY/window.innerHeight;
	var frequency = minFrequency + (maxFrequency - minFrequency) * percentage;
	console.log(frequency);

	oscillator.frequency.linearRampToValueAtTime(frequency, audioContext.currentTime);

});

document.addEventListener('mousedown', function(e){
	//console.log('MOUSE DOWN!');

	gain.gain.linearRampToValueAtTime(1, audioContext.currentTime);

});

document.addEventListener('mouseup', function(e) {
	gain.gain.linearRampToValueAtTime(0, audioContext.currentTime);
});