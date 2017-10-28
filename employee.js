

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
        role = $("#employee-role").val();
        date = $("#employee-date").val();
        // totalMonth = $("#employee-totalMonth").val();
        rate = $("#employee-rate").val();
        // totalBilled = $("#employee-rate").val();

        database.ref().set({
          employeeName: name,
          employeeRole: role,
          employeeDate: date,
          // employeeMonth: totalMonth,
          employeeRate: rate,
          // employeeBillable: totalBilled,
        });
      console.log(database.employeeName);
      console.log(database.employeeRole);
      console.log(database.employeeDate);
      // console.log(employeeMonth);
      console.log(database.employeeRate);
      // console.log(employeeBillable);

    });
