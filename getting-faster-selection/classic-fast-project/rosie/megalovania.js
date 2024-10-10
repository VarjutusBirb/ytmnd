var sansArr = ["Give up?!? Give up?!?","The day may come when we'll give up on fruitless searches after a mere eleven minutes, but that day is not today!","The day may come when our favorite reptile may be lost from our memories and his enduring love of mushrooms forgotten, but that day is not today!","Today we search!","We will search for him in the streets,","we will search for him in the trenches,","we will search for him in the alleys and the mini-malls and the cul-de-sacs of this fair land.","We'll search for him in the multilevel car parks and municipal recreational facilities.","And we few. We happy few.","We small band of brothers — and girl from across the street.","We shall not cease 'til he is found!",""]
var sans = new Howl({
	src: ["audio/megalovania.ogg"],
	loop: true,
});
var update_time = new Date();
var percent_time = 0.57686;
var rate = 1;
var rate_timer = percent_time;
var currIndex = -1;
var rateUntilActivation = 15;
var rateIncreaseBeforeNextLineOfDialogue = 5;
function update() {
	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;
	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());
	rate_timer -= rate * delta / 1000;
	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if(rate > rateUntilActivation){
	  currIndex = Math.floor((rate-rateUntilActivation)/rateIncreaseBeforeNextLineOfDialogue)
	  if(currIndex != -1 && currIndex < sansArr.length){
	      document.title = sansArr[currIndex];
	  }
	}
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	requestAnimationFrame(update);
}
function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
