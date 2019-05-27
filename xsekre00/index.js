function validateForm() {
	var name = document.getElementById("customer_form").value;
	var feedback = document.getElementById("feedback_form").value;
	document.getElementById("customer").innerHTML = name;
    document.getElementById("feedback").innerHTML = feedback;
}

function showForm() {
	document.getElementById("form_row").style.display = "block";
    document.getElementById("fill_form_btn").style.display = "none";
}

function sendMail() {
    var name = document.getElementById("myName").value;
    var email = document.getElementById("myEmail").value;
    var subject = document.getElementById("mySubject").value;
    var body = document.getElementById("myMessage").value;
    var uri = "mailto:oppoa123@gmail.com?subject=";
    uri += encodeURIComponent(subject);
    uri += "&body=";
    uri += "Email sent by:";
    uri += "%0D%0A";
    uri += encodeURI(name);
    uri += "%0D%0A";
    uri += "%0D%0A";
    uri += "From:";
    uri += "%0D%0A";
    uri += encodeURI(email);
    uri += "%0D%0A";
    uri += "%0D%0A";
    uri += "Message: ";
    uri += "%0D%0A";
    uri += encodeURIComponent(body);
    window.open(uri);
    
    
}