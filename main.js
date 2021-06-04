// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>
// </head>
// <body>
//
//     <h2> here i am learnhow to create an  signup page</h2>
//
//
//     <script>
          var fullName = "Chirag Kumar";
          const userId = "1234jhkuy";
          var firstName  = "Chirag ";
          var lastName = "Kumar";
          var email = "chirag2020@dev.com";
          var password = "14651$%#*&fe";
          var confirmPassword = "14651$%#*&fe";
          var courseCount = 0;
          var isLoggedInFromGoogle = false;



          var fullName = "Chirag Kumar"

          var isLoggedIn = true;
          var loggedCount = 34;
          var paymentMode;

          paymentMode = "credit Card"


        console.log("\n \n \n ---------------------Basic  in javascript--------------------------------")


        console.log(fullName)

        console.log("\n user first name is : ", firstName,
        "\n last name is : ", lastName,
        "\n email id is :", email,
        "\n your password is :", password,
        "\n course you are enrolled in :", courseCount,
        "\n logged from google is :",  isLoggedInFromGoogle);



        console.log("\n \n \n ---------------------operator in java script--------------------------------")
        console.log("  \n  \n Q. calculate disscount from orignal price to lower price ")

        console.log("\n given , ")
        console.log("\n selling price is ", 199,
        "\n list Price is ", 799,
        "\n then Calculate What is disscount in percent  __________ .");

        console.log("\n \n \n Solution is ....")
        console.log("|-----------------------------------------------------------------|")
        var sellingPrice = 199;
        var listPrice = 799;
        var disscountPrice = ((listPrice - sellingPrice)/listPrice)*100;

        console.log("|      Disscount is ", disscountPrice   ,             "                           |")

        console.log("|      This number is very big therefor i have to small it        |" );

        var displayDisscountPercent = Math.round(disscountPrice);

        console.log("|      Disscount is ", displayDisscountPercent, "%off" , "                                     |");
        console.log("|-----------------------------------------------------------------|")


        console.log("\n \n \n ")













        console.log("---------------------Bollean operator in javascript--------------------------------")
        var result = listPrice > sellingPrice;
        console.log("\n list Price is Greator than Selling price : ", result);
        console.log("\n Type of Result is : ", typeof result);

        var result = sellingPrice > listPrice;
        console.log("\n Selling  Price is Greator than List price : ", result);

          console.log("\n \n  \n \n \n ---------------------Conditional Operator in javascript--------------------------------")
          var temperature;
          // get data by api using
          temperature = 15;
          if (temperature < 20){
            console.log("| ___________________________________________________________________|");
            console.log("| \n \n|temperature is below 20 Degree c"                            ,"                           |");
            console.log("| \n \n| It's to cold outside ");
          if  (temperature > 20 & temperature <30) {

            console.log("yes it is  ")

          }





            console.log("| ___________________________________________________________________|");

          }



var first_name = "Sammy";
if ( first_name == "Johnny" ) {
console.log("First Name is " + first_name); }
else {
console.log("First Name is " + first_name); }
console.log("|__________________________________________________________________________________________|");
// allow users to access course if he is:
          // logged in from google
          // logged in from facebook
          // logged in from email

var email = true;
var google = false;
var facebook = false;

console.log("|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|");


console.log("|                                                             |");
console.log("|                                                             |");
console.log("|                                                             |");
console.log("|                                                             |");

console.log("|------------------------->>       logic operators here  <<------------------|");



console.log("|                                                             |");
console.log("|                                                             |");
console.log("|                                                             |");
console.log("|                                                             |");
// first method to use
if (email) {
  console.log("you are logged succesfull    ----- method 1");
}
if (google){
  console.log("loggin in succesfull ---- method 1");

}
if (facebook){
  console.log("logged in facebook ----- method 1");
}

console.log("|------------------------------------------------------------|");
// pro method is use  like this

if (email || google || facebook){
  console.log("login succesfully  ----- method 2");
}
console.log("|_____________________________________________________________|");

//     </script>
//
//
// </body>
// </html>
