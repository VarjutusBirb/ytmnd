var flowey = new Howl({
	src: ["audio/nobody.ogg", "audio/nobody.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;
var floweys = ["Carla Lazzari really likes you!", "Please be my sweetheart!", "Bonjour! Je m'appelle Carla.", "Et ça fait bim, bam, boum!", "bimbamtoi", "The best Junior Eurovision participant ever!", "19/08/2005", "Decue!", "J'invente, je chante, je m'evade", "CARLA WINS!", "Lazzari Carla", "Vote for France!", "Concours Eurovision de la Chanson Junior Nice 2023", "L'autre moi", "Alors chut", "Voulez-vous jouer avec Carla Lazzari?", "J'EXPLOSE!", "Carla est la meilleure chanteuse de tous les temps!", "Bye Bye!"]

function update() {

	var divwidth = document.getElementById('flowey_shaking').offsetWidth;
	var divheight = document.getElementById('flowey_shaking').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		flowey.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if (rate <= 10) {
		document.getElementById("flowey").style.display = "none";
		document.getElementById("flowey").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("flowey").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		requestAnimationFrame(update);
	} else { 
		document.getElementById("flowey").style.display = "block";
		document.title = randomChoice(floweys);
		document.getElementById("flowey").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("flowey").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		requestAnimationFrame(update);
	}
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function run() {
	flowey.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
