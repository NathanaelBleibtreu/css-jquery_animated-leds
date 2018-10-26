$("document").ready(function() {




var dots = (window.innerWidth / 60)*(window.innerHeight / 60);

for (i=0; i<dots; i++){
//	$(".container").append("<div class=\"pointBox\"><div class=\"point\"></div></div>");
$(".container").append("<div class=\"pointBox\"><div class=\"point\"></div></div>");

}

hoverFunction();

function hoverFunction() {
	$(".pointBox").hover(function(){
  var elementHovered = $(this).children().first();
 	$(this).children().first().addClass("animated")
  window.setTimeout(function(){
  	$(elementHovered).removeClass("animated");
  }, 2000);
	})
} 

var interval = window.setInterval(changeShape, 500);

function changeShape(){
var x = getRandomInt(50);
var y = getRandomInt(3);
var z = "";
if(y==1){ z = "forme1"; } else if (y==2) { z = "forme2"; }
	$(".container").find('div:nth-child(2n)').children().removeClass("forme1 forme2");
	$(".container").find('div:nth-child(2n)').children().addClass(z);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
       





})
