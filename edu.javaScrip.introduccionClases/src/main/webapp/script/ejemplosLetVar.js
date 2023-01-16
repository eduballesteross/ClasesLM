
 /*Ejemplo 1*/
function Ejemplo1(){
	var a = 5;
	var b = 10;
	
	if (a === 5) {
	  let a = 4;
	  var b = 1;
	
	  document.write("let a en if: " + a); 
	  document.write(" || var b en if: " + b); 
	}
	
	document.write(" || var a fuera if: " + a);
	document.write(" || var b fuera if: " + b);
}
/*Ejemplo 2*/
function Ejemplo2(){
	if (x) {
	  let foo;
	 // let foo;
	}
}
/*Ejemplo 3*/

function varTest() {
	  var x = 31;
	  if (true){ 
	    var x = 71;   
	    document.write("x como var dentro de if " + x);}
	  
	document.write(" || x como var fuera del if" + x);
	}

function letTest() {
	  let x = 31;
	  if (true) {
	    let x = 71;
	    document.write("x como let dentro de if " + x); 
	  }
	document.write(" || x como let fuera del if" + x); 
	}


/*Ejemplo 4*/
function Ejemplo4(){
	var x = 'global';
	let y = 'global';
	document.write(this.x);
	document.write(this.y);
}	 
 