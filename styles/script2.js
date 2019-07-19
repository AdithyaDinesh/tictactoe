var player='1';
var win='1';
var i='0';
var j='0';
var flag='0';
var a=[
		[1,2,3],
		[1,4,7],
		[1,5,9],
		[4,5,6],
		[7,8,9],
		[3,5,7],
		[2,5,8],
		[3,6,9]];
function change() {

	 document.getElementById("demo").value="Player "+ player+"'s chance!";
	// body...
}
function clr(){
	 document.location.reload(true);
			}
function blockall(){
	  			    document.getElementById('1').disabled = true;
	  			    document.getElementById('2').disabled = true;
	  			    document.getElementById('3').disabled = true;
	  			    document.getElementById('4').disabled = true;
	  			    document.getElementById('5').disabled = true;
	  			    document.getElementById('6').disabled = true;
	  			    document.getElementById('7').disabled = true;
	  			    document.getElementById('8').disabled = true;
	  			    document.getElementById('9').disabled = true;

}
function combo(a,b,c){
if(flag=='0'&&document.getElementById(a).value!==' ' && (document.getElementById(a).value===document.getElementById(b).value)&&(document.getElementById(b).value===document.getElementById(c).value))
	 {
	 	document.getElementsByClassName("cross"+a+"-"+c)[0].style.display="block";
	 	flag='1';
	 	blockall();
            setTimeout(function(){ alert("Congrats Player "+win); }, 100);
		}
	
}
function sw(id){
	switch (id){
				case '1' : combo(1,2,3);
						   combo(1,5,9);
						   combo(1,4,7);
							break;
				case '2' : 
						   combo(2,5,8);
						   combo(1,2,3);
							break;
				case '3' : 
						   combo(1,2,3);
						   combo(3,6,9);
							break;
				case '4' : 
						   combo(4,5,6);
						   combo(1,4,7);
							break;
				case '5' : 
						   combo(2,5,8);
						   combo(4,5,6);
						   combo(1,5,9);
						   combo(3,5,7);
							break;
				case '6' : 
						   combo(3,6,9);
						   combo(4,5,6);
							break;
				case '7' : 
						   combo(1,4,7);
						   combo(7,8,9);
						   combo(3,5,7);
							break;
				case '8' : 
						   combo(2,5,8);
						   combo(7,8,9);
							break;
				case '9' : 
						   combo(7,8,9);
						   combo(3,6,9);
						   combo(1,5,9);
							break;
						}
}
function check1(id){

	if(Number(i)+Number(j)=='9'){
			sw(id);
			if(flag==='0')
            setTimeout(function(){ alert("Ohhh! Its a Tie!\nTry Again"); clr(); }, 100);
	}
	else{
		sw(id);

		}
	}

function clicked(button){
	var id=button.id;
	 switch (player){
	  case '1' :	document.getElementById(id).value="X";
	  			    document.getElementById(id).disabled = true;
	  			    i++;
	  				player='2';
	  				change();
						win='1';
	  				check1(id);
	  				break;
	  case '2' :	document.getElementById(id).value="O";
	  			    document.getElementById(id).disabled = true;
	  			    j++;
	  				player='1';
	  				change();
						win='2';
						check1(id);
	  				break;
	 }
}