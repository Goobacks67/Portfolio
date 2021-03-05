var submit = function Submit() 
{
    var pluralNoun = document.getElementById("pluralNoun").value;
    var noun1 = document.getElementById("noun1").value;
    var noun2 = document.getElementById("noun2").value;
    var song = document.getElementById("song").value;
    var verb = document.getElementById("verb").value;
    var madLib = pluralNoun + " are man's best freind.  They are " + noun1 + ", " + noun2 + ", and very " + song + ".  Who cares if they are " + verb + " as well?";
    document.getElementById("madLibOutput").innerHTML = madLib;
    document.getElementById("goAgain").style.display = "block";
}

function myFunction()
{
    document.getElementById("pluralNoun").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("noun2").value = "";
    document.getElementById("song").value = "";
    document.getElementById("verb").value = "";
    document.getElementById("madLibOutput").innerHTML = "";
    document.getElementById("goAgain").style.display = "none";
}

function Caps(input) {
   input.value = input.value.toUpperCase(); 
}
window.onload = function () {
    document.getElementById("submit").onclick = submit;
}