function isFormCorrect(){
	var firstName = document.forms["myForm"]["firstName"].value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	
	var y = document.getElementById("yes").checked;
	var n = document.getElementById("no").checked;
	
	if (firstName == null || firstName == ""){
		alert("First name cannot be blank" + firstName);
		return false;
	}
	else if (lastName == null || lastName == ""){
		alert("Last name cannot be blank");
		return false;
	}
	else if (email == null || email == ""){
		alert("Email name cannot be blank");
		return false;
	}
	// this checks if email is in the format something@something.something
	else if (/\S+@\S+\.\S+/.test(email) == false){
		alert("Please enter a valid email");
		return false;
	}
	else if (y == false && n == false){
		alert('Please answer whether you are applying for a job');
		return false;
	}
}