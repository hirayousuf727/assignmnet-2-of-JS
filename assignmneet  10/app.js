var userName = prompt("Enter Your Name") 
var math = +prompt("Enter Your Obtained Marks In English");
var english = +prompt("Enter Your Obtained Marks In Urdu");
var sindhi = +prompt("Enter Your Obtained Marks In Math");
var pst = +prompt("Enter Your Obtained Marks In S.ST");
var biology = +prompt("Enter Your Obtained Marks In Computer");
var chemistry = +prompt("Enter Your Obtained Marks In Scinece");
var physics = +prompt("Enter Your Obtained Marks In Nazra");
var totalMarks = 700
var marksObtained = math + english + sindhi + pst + biology + chemistry + physics;
var percentage = marksObtained/7
var grade = "";
var remarks = "";
if(percentage >= 80)
    {grade = "A-One";
    remarks = "Excellent";
    }
else if (percentage >= 70)
    {grade = "A ";
    remarks = "Good";
    }
else if (percentage >= 60)
    {grade = "B ";
    remarks = "You need to improve"
    }
else if (percentage < 60)
    {grade = "Fail";
    remarks = "Sorry"
    }
else{grade = ""}
document.write( "Name : " + userName);
document.write( "<br>Total Marks : " + totalMarks);
document.write( "<br> Marks Obtained : " + marksObtained);
document.write( "<br> Percentage : " + percentage + " %");
document.write( "<br> Grade : " + grade);
document.write( "<br> Remarks : " + remarks);