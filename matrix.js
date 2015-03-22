var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//Malayalam characters - taken from the unicode charset
//var malayalam = "കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഷറഅആഇഈഉഊഋഎഏഒ";
var malayalam = "OPI{POIPOPIOPUIGPOIKropdigks'peoritoID{(**(^(*&^TPUSER{HJSD:LKJ<NM><<BVMNVCXBHGS!@#$%^&*(O)P_:DFCGHJ LKML?ZTRETYG:FHGKJFKJKHF:KJYDO*(FYVOCY"
//he string into an array of single characters
malayalam = malayalam.split("");

var font_size = 20;
var font = "Meera";
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1;

//drawing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = (Math.floor((Math.random()*1000)%50))?"#0F0":"#FFF"; //green text
	ctx.font = font_size + "px " + font;
	//looping over drops
	for(var i = 0; i < drops.length; i++) {
		//a random Malayalam character to print
		var text = malayalam[Math.floor(Math.random()*malayalam.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975){
			drops[i] = 0;
		}
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);
