//Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIkqoeImNZjQYXjEzH9-jAqVh3EvUFrK8",
    authDomain: "timesheet-851e3.firebaseapp.com",
    databaseURL: "https://timesheet-851e3.firebaseio.com",
    projectId: "timesheet-851e3",
    storageBucket: "timesheet-851e3.appspot.com",
    messagingSenderId: "988140441751"
  };


  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Variables
  var name = "";
  var role = "";
  var start_date = "";
  var monthly_rate = "";
  console.log(name);



$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#employeeName").val().trim();
  role = $("#employeeRole").val().trim();
  start_date = $("#startDate").val().trim();
  monthly_rate = $("#monthlyRate").val().trim();


  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    start_date: start_date,
    monthly_rate: monthly_rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});



});
