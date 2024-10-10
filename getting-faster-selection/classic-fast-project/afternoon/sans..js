var sans = new Howl({
	src: ["audio/sans..ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

bottomcount = 0
sansrot = 0
sansmod = Math.round(Math.random() * 4)

var rate = 1;
var rate_timer = percent_time;
function update() {

	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * 25 / (delta / (rate * 5));

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate -= (0.0001 * rate);
		if (rate <= 0.0001) {
			rate = 0.0001
		}		
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(2) + "%";
	}
	//transform:rotate(25deg)
	document.getElementById("sans").style.transform = "rotate("+sansrot+"deg)";
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	sansrot = sansrot + ((Math.round(Math.random()) * 4 - sansmod) * rate)
	if (rate <= 0.9 && rate > 0.85) {
		document.title = "Agent... what are you looking for?"
	}
	if (rate <= 0.85 && rate > 0.8) {
		document.title = "Are you acting... a little lazy?"
	}
	if (rate <= 0.8 && rate > 0.75) {
		document.title = "Come on Agent, wake up!"
	}
	if (rate <= 0.75 && rate > 0.7) {
		document.title = "Look for something new!"
	}
	if (rate <= 0.7 && rate > 0.65) {
		document.title = "If you continue to act lazy one more time, I'm calling Violet Nightshade!"
	}
	if (rate <= 0.65 && rate > 0.6) {
		document.title = "..."
	}
	if (rate <= 0.6 && rate > 0.55) {
		document.title = "Uhhh... Agent?"
	}
	if (rate <= 0.55 && rate > 0.5) {
		document.title = "You don't look very well... I guess."
	}
	if (rate <= 0.50) {
		document.title = "I'll try to find more evidence by myself."
	}
	if (rate == 0.10) {
		document.title = 'New Message Received!'
		bottomcount++
		if (bottomcount => 100) {
			window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
		}	
	}
	requestAnimationFrame(update);
	
}

function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
