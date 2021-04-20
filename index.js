function subbtn() {


    var user = document.getElementById('email');
    var pass = document.getElementById('password');
    if (user.value == "" || pass.value == "") {
        alert("Please enter the username or password.");
        return false;

    } else {
        true;
    };
}






function drop() {
    var select = document.getElementById("dropdown")
    alert(select.options[select.selectedIndex].value)

}

function cancel() {
    alert("You clicked the cancel button");
}