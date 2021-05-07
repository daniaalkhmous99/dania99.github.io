function validateForm() {	
  var x1 = document.getElementById("fname");
  if (!x1.checkValidity()) { 
   alert("First Name must be filled out");
	   document.getElementById("fname").style.borderColor = "red";
   }
   
  else {
    document.getElementById("fname").style.borderColor = "black";
    } 	
    var x2=document.getElementById("lname").value.length != 0;
	
	if (x2 == null || x2 == "") {
      alert("Last Name must be filled out");
       document.getElementById("lname").style.borderColor = "red";
   }
  else {
    document.getElementById("lname").style.borderColor = "black";
  }	
    var x3=document.getElementById("url").value.length != 0;
    var x4=document.getElementById("phone").value.length != 0;
	var x5=document.getElementById("email").value.length != 0;
	if (x5 == null || x5 == "") {
      alert("Your email must be filled out");
      	document.getElementById("email").style.borderColor = "red";
   }
  else {
    document.getElementById("email").style.borderColor = "black";
  }
    var x6=document.getElementById("uname").value.length != 0;
	if (x6 == null || x6 == "") {
      alert("Username must be filled out");
	    document.getElementById("uname").style.borderColor = "red";
   }
  else {
        document.getElementById("uname").style.borderColor = "black";
  }
    var x7=document.getElementById("pwd").value.length != 0;
	if (x7 == null || x7 == "") {
      alert("Password must be filled out");
      	document.getElementById("pwd").style.borderColor = "red";
   }
  else {
    document.getElementById("pwd").style.borderColor = "black";
  }
	var x8=document.getElementById("degree").value.length != 0;
	var x9=document.getElementById("graduate").value.length != 0;
	var x10=document.getElementById("myfile").value.length != 0;
}
/*
let input = document.querySelector(".fname");
let input = document.querySelector(".lname");
let button = document.querySelector(".url");
let button = document.querySelector(".phone");
let button = document.querySelector(".email");
let button = document.querySelector(".uname");\
let button = document.querySelector(".pwd");

lname.disabled = true; //setting button state to disabled
url.disabled = true; 
phone.disabled = true; 
email.disabled = true; 
uname.disabled = true; 
pwd.disabled = true; 

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".fname").value === "") {
    lname.disabled = true; 
    url.disabled = true; 
    phone.disabled = true; 
    email.disabled = true; 
    uname.disabled = true; 
    pwd.disabled = true;
  } else {
    lname.disabled = false; 
  }

  if (document.querySelector(".fname").value === ""&&document.querySelector(".lname").value === "") {
    
    url.disabled = true; 
    phone.disabled = true; 
    email.disabled = true; 
    uname.disabled = true; 
    pwd.disabled = true;
  } else {
    url.disabled = false;
  }

  if (document.querySelector(".fname").value === ""&&document.querySelector(".lname").value === ""&& document.querySelector(".url").value === "") {
    
    phone.disabled = true; 
    email.disabled = true; 
    uname.disabled = true; 
    pwd.disabled = true;
  } else {
   phone.disabled = false; 
  }
if (document.querySelector(".fname").value === ""&&document.querySelector(".lname").value === ""&&document.querySelector(".url").value === ""&&document.querySelector(".phone").value === "") {
  
    email.disabled = true; 
    uname.disabled = true; 
    pwd.disabled = true;
  } else {
   email.disabled = false; 

  }

if (document.querySelector(".fname").value === ""&&document.querySelector(".lname").value === ""&&document.querySelector(".url").value === ""&&document.querySelector(".phone").value === ""&&document.querySelector(".email").value === "") {
  
    uname.disabled = true; 
    pwd.disabled = true;
  } else {
   uname.disabled = false; 

  }
if (document.querySelector(".fname").value === ""&&document.querySelector(".lname").value === ""&&document.querySelector(".url").value === ""&&document.querySelector(".email").value === ""&&document.querySelector(".uname").value === "") {
  
  
    pwd.disabled = true;
  } else {
   pwd.disabled = false; 
  }

}//fun 
*/
/*
	var input = document.getElementById("email");
    let res =input.split('@')[0]
console.log(res)

  
  return valid;
  
 // var str="someone@example.com";
 var x5=  document.getElementById("email");
var nameMatch = x5.match(/^([^@]*)@/);
var x5 = nameMatch ? nameMatch[1] : null;
written as one line


*/
	
  
   



    
  