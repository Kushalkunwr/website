/*Javascripts(JS)*/

/* JS for getting time and updating it every second */
function thisDate(){
     document.getElementById("time").innerHTML = Date();
     setTimeout(thisDate)
  }
 thisDate()	

/* JS for changeing into dark mode*/
function myFunction() {
  document.body.style.backgroundColor = "#666666";
  document.body.style.color = "#a6a6a6"
}

/* JS for changing into white mode(normal mode)*/
function myFunction1() {
  document.body.style.backgroundColor = "#d9d9d9";
  document.body.style.color = "black"
}