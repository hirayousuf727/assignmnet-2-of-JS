
let secret = 7;
let user = +prompt("Enter a Guess Number from 1 to 10")
if (user == secret)
    {document.write("Congratulations You guess correct number")}
else if (++user == secret)
    {document.write("You are very close to correct number")}
else{document.write("Oops! Your answer is wrong")}
