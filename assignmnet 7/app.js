
var user = prompt("Enter a number which you want to check an 'even' or 'odd'")
if(user % 2 === 0)
    {document.write("Your number is " +user + " an even number")}
else if (user % 2 !== 0) {document.write("Your number " + user+ " is an odd number")}
else{document.write("Please enter only a number")}
