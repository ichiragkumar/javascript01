// allow users to access course if he is:
          // logged in from google
          // logged in from facebook
          // logged in from email

var email = true;
var google = false;
var facebook = false;

console.log("|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|");

// first method to use
if (email) {
  console.log("you are logged succesfull");
}
if (google){
  console.log("loggin in succesfull");

}
if (facebook){
  console.log("logged in facebook");
}

console.log("|------------------------------------------------------------|");
// pro method is use  like this

if (email || google || facebook){
  console.log("login succesfully");
}





console.log(" // create application with following cases ");
console.log("// admin - gets full access");
console.log("// subadmin - get acces to delete and create course ");
console.log("// testprep- get access to delete and create tests");
console.log("// users - consume contents  \n \n \n ");


console.log("here i am going to use switch cases of javascripts \n \n \n ");
var user = "admin";
switch (user){
  case "subadmin":
  console.log("hey you are sub + admin you get acces to delete  and create courses ");
  break

  case "admin":
  console.log("hey you are a admin + You get full aacees to this course");
  break

  case "testprep":
  console.log("hey! you are from test preperation departtment welcome  welcome to my company");
  break

  case "users":
  console.log("hey welcome ! you are t he most wecome \n visit my courses and consume it");

  default:
  console.log("welcom are you are a roboat");
}


// productive keboard shortcut
console.log("|------------------------------------------------------------|");
console.log("|                                                            |");
console.log("|                                                            |");
console.log("|                                                            |");
console.log("|------------------------------------------------------------|");
console.log("|  productive keboard shortcut                               |");
console.log("|------------------------------------------------------------|");
console.log("|  productive keboard shortcut   number 1                    |");
console.log("|  productive keboard shortcut                               |");
console.log("|  copy clipboard shortcut                                   |");
console.log("|  whatever you have copied                                  |");
console.log("|  typw window + v                                           |");
console.log("|------------------------------------------------------------|");
console.log("|                                                            |");
console.log("|------------------------------------------------------------|");
console.log("|  -------------    productive keboard shortcut  number 2       --------------     ");
console.log("|  set window at left or right (side by side )                                    |");
console.log("|  its open last window which ever you have opened yet                             ");
console.log("|  typw window +  right arrow                                                      ");
console.log("|------------------------------------------------------------|");
console.log("|                                                            |");
console.log("|------------------------------------------------------------|");
console.log("|  -------------    productive keboard shortcut  number 3       --------------");
console.log("|  minimise  all window                                                           |");
console.log("|  its minimise  all window at a time                                             |");
console.log("|  typw window + D                                                                |");
console.log("|------------------------------------------------------------                     |");
console.log("|                                                                                 |");
console.log("|------------------------------------------------------------                     |");
console.log("|  -------------    productive keboard shortcut  number 3       --------------    ");
console.log("|  its show all window                                                            |");
console.log("|  its open all window and show you                                               |");
console.log("|  typw window + TAB                                                              |");
console.log("|------------------------------------------------------------                     |");
