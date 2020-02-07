beforeEach(function() {
	browser.url("https://www.w3schools.com/html/html5_video.asp");
})

//Injects a snippet of JavaScript into the page for execution in the context of the currently selected frame.
browser.addCommand('isVideoPaused', function(){
	const isPaused = browser.execute(function () {
		console.log('Outputted inside the console window');
		const video = document.querySelector('#video1');
		return video.paused;
	});
	return isPaused.value;
});

browser.addCommand('playVideo', function(){
	browser.execute(function () {
		console.log('Outputted inside the console window');
		const video = document.querySelector('#video1');
		console.log(`Playing video ${video}`);
		video.play();
	});
});

describe('Video test', function() {
	it('Validate that the video is paused when accessing the page', function(done) {
		this.timeout(20000);
		const isPaused = browser.isVideoPaused();
		expect(isPaused).to.be.true;
		browser.pause(8000);
	});

	it('Alter the width of the video', function(done) {
		const videoWidth = browser.execute(function() {
			const video = document.querySelector('#video1');
			return video.style.width = "300px";
		});
		browser.pause(3000);
	});

	it.only('Play the video', function(done) {
		this.timeout(20000);
		browser.pause(8000);
		browser.playVideo();
		browser.pause(8000);
	});
});
