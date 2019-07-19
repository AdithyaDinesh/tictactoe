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
function combo(arr){
if(flag=='0'&&document.getElementById(arr[0]).value!==' ' && (document.getElementById(arr[0]).value===document.getElementById(arr[1]).value)&&(document.getElementById(arr[1]).value===document.getElementById(arr[2]).value))
	 {
	 	document.getElementsByClassName("cross"+arr[0]+"-"+arr[2])[0].style.display="block";
	 	flag='1';
	 	blockall();
            setTimeout(function(){ alert("Congrats Player "+win); }, 100);
		}
	
}
function check1(){

	if(Number(i)+Number(j)=='9'&&flag=='0'){
            setTimeout(function(){ alert("Ohhh! Its a Tie!\nTry Again"); clr(); }, 100);
	}
	else{
		var index='0';
		while(flag==='0'){
		combo(a[index]);	
		index++;
		}
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
					if(i>='3')
	  				check1();
	  				break;
	  case '2' :	document.getElementById(id).value="O";
	  			    document.getElementById(id).disabled = true;
	  			    j++;
	  				player='1';
	  				change();
						win='2';
	  				if(j>='3')
						check1();
	  				break;
	 }
}