//Initialize Firebase
  var config = {
    //apiKey left blank so users can input their own via the .env_example file.
    apiKey: "AIzaSyDIkqoeImNZjQYXjEzH9-jAqVh3EvUFrK8",
    authDomain: "timesheet-851e3.firebaseapp.com",
    databaseURL: "https://timesheet-851e3.firebaseio.com",
    projectId: "timesheet-851e3",
    storageBucket: "timesheet-851e3.appspot.com",
    messagingSenderId: "988140441751"
  };

  //Initialize Firebase
  firebase.initializeApp(config);

  //Create a variable to reference the database.
  var database = firebase.database();

  //Initial Variables
  var name = "";
  var role = "";
  var start_date = "";
  var monthly_rate = "";


//OnClick function to submit data to Firebase.
$("#submit").on("click", function(event) {
  event.preventDefault();


  //Grabbed values from text boxes.
  name = $("#employeeName").val().trim();
  role = $("#employeeRole").val().trim();
  start_date = $("#startDate").val().trim();
  monthly_rate = $("#monthlyRate").val().trim();


  //Code for handling the push of data.
  database.ref().push({
    name: name,
    role: role,
    start_date: start_date,
    monthly_rate: monthly_rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});


  database.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    //console.log(snapshot.val());
    //console.log(snapshot.val().name);
    //console.log(snapshot.val().role);
    //console.log(snapshot.val().start_date);
    //console.log(snapshot.val().monthly_rate);

    /* Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#age-display").text(snapshot.val().age);
    $("#comment-display").text(snapshot.val().comment);*/

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


});
