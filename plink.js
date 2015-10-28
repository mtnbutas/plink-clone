//audio stuff
var audioContext = new AudioContext();


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

//canvas stuff
var canvas = document.querySelector('canvas');
var canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var square = {
	x: window.innerWidth/2 - 12,
	y: window.innerHeight/2 - 12,
	width: 24,
	height: 24
}

//canvasContext.fillStyle = 'red';

var mousedown = false;

setInterval(function(){
	canvasContext.clearRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'blue';
	canvasContext.strokeStyle = 'green';

	if(mousedown){
		canvasContext.fillRect(square.x, square.y, square.width, square.height);
	}
	else
		canvasContext.strokeRect(square.x, square.y, square.width, square.height);

}, 1000/60);

document.addEventListener('mousemove', function(e){
	square.y = e.pageY - 12;

});

document.addEventListener('mousedown', function(e){
	mousedown = true;

});

document.addEventListener('mouseup', function(e){
	mousedown = false;

});



