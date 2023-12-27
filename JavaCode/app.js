
var arr=[
     
     
  {
    Name :"Rajesh",
    Review: "GGgggggggggggğgggggg",
 },
 {
  Name :"Mohan",
  Review: "Teach DSA"
},
{
  Name :"Sonal",
  Review: " Teach DSA"
},
{
  Name :"Aman",
  Review: "Teach DSA"
},
{
  Name :"God",
  Review: "Good Teach DSA"
},
]

var global_index=0;

var len= arr.length;

function previous(){

     var name = document.getElementById("name");
     var para= document.getElementById("para");

     name.innerText= arr[(global_index-1+len)%len].Name;

     para.innerText= arr[(global_index-1+len)%len].Review;

     global_index--;


}
function next(){

  var name = document.getElementById("name");
  var para= document.getElementById("para");

  name.innerText= arr[(global_index+1)%len].Name;

  para.innerText= arr[(global_index+1)%len].Review;

  global_index++;


}
