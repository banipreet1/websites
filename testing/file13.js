function genderm(){
     gender = document.getElementById("male").value;
}
function genderf(){
     gender = document.getElementById("female").value;
}

function apply(){
    let name = document.getElementById("name").value;
    if ( gender == "female") {
        var mr = "MRS.";
    }
    else{
        var mr = "MR.";
    }
    alert ( mr + name+" your form is applied" );
    document.getElementById("leave").innerHTML = "You can leave now";
}