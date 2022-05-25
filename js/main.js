function validate() {
  if (document.myForm.Name.value == "") {
    alert("Please provide your name!");
    document.myForm.Name.focus();
    return false;
  } else {
    var name = document.getElementById("name").value;
  }

  if (document.myForm.EMail.value == "") {
    alert("Please provide your Email!");
    document.myForm.EMail.focus();
    return false;
  } else if (document.getElementById("email").value.lastIndexOf(".") == -1) {
    alert("Please provide a valid Email!");
    document.myForm.EMail.focus();
    return false;
  } else {
    var email = document.getElementById("email").value;
  }
  alert("Validation successful!\nName: " + name + ", Email: " + email);
  return true;
}
