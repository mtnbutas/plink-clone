var audioContext = new AudioContext();

var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.frequency.value = 1000;
oscillator.start(audioContext.currentTime);

