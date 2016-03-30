
function processForm() {
    var firstName = document.myForm.firstname.value;
    var lastName = document.myForm.lastname.value;
    var gender = document.myForm.gender.value;
    var memberInfo = '<div>First Name: ' + firstName + '</div>';


    document.getElementById("memberInfo").innerHTML += memberInfo;


}


