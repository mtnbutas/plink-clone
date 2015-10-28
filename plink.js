var audioContext = new AudioContext();

var minFrequency = 50;
var maxFrequency = 2000;

var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.frequency.value = 5000;
oscillator.start(audioContext.currentTime);

document.addEventListener('mousemove', function(e) {
	var percentage = 1 - e.pageY/window.innerHeight;
	var frequency = minFrequency + (maxFrequency - minFrequency) * percentage;
	console.log(frequency);

	oscillator.frequency.linearRampToValueAtTime(frequency, audioContext.currentTime);

});
