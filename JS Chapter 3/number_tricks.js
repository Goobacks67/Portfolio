/*Austin Tomlinson 2/11/2021*/
/*
use var entry to set the entry variable.
use var total to set the total variable.
use entry=prompt to display enter a whole number.
use entry=parseInt to set the entry variable.
use the variables set at the beginning to code the number trick math.
use document.write to display text on the web page describing the number trick and math in it.
use some html in the document.write statements to format the text such as line breaks and bolding.
use html to code a link to play again in line 38.
*/
var entry;
var total;

do
{
    entry = prompt("Enter a whole number");
    entry = parseInt (entry);
    if(isNaN(entry))
    {
        alert("Input is not a number!")
    } else 
    {
        break;
    }
} while(true)
total = entry + 9;
document.write("I added 9 to " + entry + ". The new number is " + total + ".<br>");

document.write("I multplied " + total + " by 2. ");
total = total * 2;
document.write("The new number is " + total + ".<br>");

document.write("I subtracted 4 from " + total + ". " );
total = total - 4;
document.write("The new number is " + total + ".<br>");

document.write("I divided " + total + " by 2. ");
total = total / 2;
document.write("The new number is " + total + ".<br>");

document.write("I subtracted your original number of " + entry + " from " + total + ".<br><br>");
total = total - entry;
document.write("<b>Your final number is " + total + "!</b><br><br>");

alert(total);

document.write("<h1>Thanks for playing. <a href='index.html'>Play again?</a></h1>");