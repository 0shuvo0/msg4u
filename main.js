var objects = [
	{
		points: dick,
		text: "Fuck You"
	},
	{
		points: heart,
		text: "I Love You"
	},
	{
		points: nsym,
		text: "Send Nudes"
	},
	{
		points: glass,
		text: "You Are Cool"
	}
]

function rand(min, max){
	return Math.round((Math.random() * (max - min)) + min);
}

var msgEl = document.querySelector('.msg');

var canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 500;
var c = canvas.getContext("2d");

var ox = canvas.offsetTop;
var oy = canvas.offsetLeft;

var px = undefined;
var py = undefined;

var dbkey = "some_stupid_shit";
//localStorage.removeItem(dbkey);
var oi = localStorage.getItem(dbkey);
if(!oi){
	oi = rand(0, objects.length - 1);
	localStorage.setItem(dbkey, oi);
}
oi = parseInt(oi);
var i = 0;

var fig = objects[oi].points;

c.strokeStyle = "rgb(" + rand(100, 255) + "," + rand(100, 255) + "," + rand(100, 255) + ")";
c.lineWidth = "3";

function render(){
	var x = fig[i].x;
	var y = fig[i].y;
	
	if(!px || !py){
		px = x;
		py = y;
	}
	
	c.beginPath();
	c.moveTo(px, py);
	c.lineTo(x, y);
	c.stroke();
	c.closePath();
	
	px = x;
	py = y;
	
	i++;
	if(i >= fig.length){
		msgEl.innerText = objects[oi].text;
		msgEl.style.display = "block";
		return;
	}
	requestAnimationFrame(render);
}
render();