  
var validform=false;
try{
	var click_submit = document.getElementById("submit");
	click_submit.addEventListener("click", formValidation);
	function formValidation()
	{	
		var name = document.getElementById("stdname").value;
		var add = document.getElementById("address").value;
		var eid = document.getElementById("emailid").value;
		var dob = new Date(document.getElementById("dob").value);
		var branch = document.getElementsByClassName("radio");
		var i;
		var radio_checked=false;
		for (i=0; i<branch.length; i++){
			if(branch[i].checked){
				radio_checked=true;
				break;
			}
		}
		var checkbox_checked=false;
		var hobby = document.getElementsByClassName("checkbox");
		var j;
                var hobby_array = new Array();
		for (j=0; j<hobby.length; j++){
			if(hobby[j].checked){
				checkbox_checked=true;
				hobby_array.push(hobby[j].value);
			}
		}

		if((name.length != 0 && add.length != 0 && eid.length != 0) && !(isNaN(dob)) && checkbox_checked && radio_checked ){
				if(validName(name)){
					if(validEmail(eid))
					{    
						if(validDob(dob))
						{	
							validform=true;			
						}
						else{
							alert("age must be above 22 years       LINE 50");
						}	
					}
					else{
						alert("You have entered an invalid email address!         LINE 55");
					} 
				}
				else{
					alert("You have entered an invalid Name      LINE 60");
				}
		}
		else{
			alert("Please fill all the values ") ;
		}
		if(validform){
			var name = document.getElementById("stdname").value;
			alert("Welcome "+name);
			var line1 = "Name :" + name + "<br>"; 
			var line2 = "Address : " + add + "<br>";
			var line3 = "DOB :" + dob.getFullYear() + "-" + dob.getMonth() + "-" + dob.getDate() + "<br>";
			var line4 = "Email :" + eid + "<br>";
			var line5 = "Branch :" + branch[i].value + "<br>";
                        var hobbies = "";
                        hobby_array.foreach(function(val){hobbies = hobbies + ", " + val;});
			var line6 =  "Hobby :" + hobbies + "<br>";
 			document.getElementById("output").innerHTML = line1 + line2 + line3 + line4 + line5 + line6;
 			document.write(document.getElementById("output").innerHTML);
		}
	}

		function validName(name){
		      var letters = /^[A-Za-z ]+$/;
		      if((name.match(letters).length > 0 )|| !(name.match(letters)==null))
		      {
		      	return true;
		      }
		      else
		      {
		      	return false;
		      }
		      
		}

		function validEmail(eid)
		{
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(mailformat.test(eid))
			{
				return true;
			}
			else
			{	
				return false;
			}
		}
		function validDob(dob){
			var present_date = new Date();
			if ((present_date.getFullYear() - dob.getFullYear()) >= 22 ){
				return true;
			}
		}
}
catch(err){
	console.log(err.message);
}