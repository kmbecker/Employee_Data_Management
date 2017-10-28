

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKmuauSsQ9b88hNG_LEqdHEf9SYDPD1dg",
    authDomain: "team-playas.firebaseapp.com",
    databaseURL: "https://team-playas.firebaseio.com",
    projectId: "team-playas",
    storageBucket: "",
    messagingSenderId: "233694189257"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var name;
  var role;
  var date;
  var totalMonth;
  var rate;
  var totalBilled;

  $("#submit").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Input Variables

  name = $("#employee-name").val();

}
