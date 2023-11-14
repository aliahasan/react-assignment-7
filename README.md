# Added 3 feature

Here I am explaining some of awesome feature of this project :
There is a button each of the card , when a user would click the 'select' button there will execute 3 function,

1. this card title (which is belong the course title) will be show on the other side belongs course information.

2.Also the User Will get some specific credit hour .when the button will click credit hour will be subtracted following default credit hour.

3.And also It will show how many credit hour can consume a user in total . when the credit hour limit will over a toast warning will be displayed is the website. and a user can't select a course multiple times. when the button will click multiple time it will show an toast warn.

## Discussed How i managed the state In my assignment project

first of all i import useState from React.
secondly declare multiple state variable and a function setFunction to update it. useState takes an initial value (in this cases, 0 and []).
thirdly i use those variable to display the current functional activities in the JSX.
finally i added an event handler function that updates the function state when the button is clicked.
