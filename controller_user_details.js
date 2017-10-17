app.controller("controllerUserDetails", function($scope, $timeout, $interval, $location, date_time_service) {

  //For Date
  $scope.showDate = date_time_service.getDate();

  //For Time
  $scope.appTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.appTime = new Date().toLocaleTimeString();
  }, 1000);

  //Sorting 
  $scope.show_EmpId = false;
  $scope.show_name = false;
  $scope.show_LodinTime = false;

  //For Greeting msg
  $scope.greet;
  if($scope.appTime < "12:00:00"){
    $scope.greet = "Good Morning !";
  }
  else if ($scope.appTime >= "12:00:00" && $scope.appTime <= "17:00:00"){
    $scope.greet = "Good Afternoon !";
  }
  else if ($scope.appTime >= "17:00:01" && $scope.appTime <= "24:00:00"){
    $scope.greet = "Good Evening !";
  }
  else {
    $scope.greet = "I'm not sure what time it is !";
  }

  $scope.myHeader = $scope.greet;
  var greetChange = function(){
    if($scope.myHeader == $scope.greet){
      $scope.myHeader = "Welcome to the User Details page !";
      $timeout(greetChange,3000);
    }
    else{
      $scope.myHeader = $scope.greet;
      $timeout(greetChange,3000);
    }
  }
  $timeout(greetChange,3000);


  //After login
  $scope.data = [
  {"EmpID":"RF01","Name":"Riya","LodinTime":"09.20"},
  {"EmpID":"RF03","Name":"Ankar","LodinTime":"09.22"},
  {"EmpID":"RF02","Name":"Piya","LodinTime":"09.37"},
  {"EmpID":"RF05","Name":"Ram","LodinTime":"09.54"},
  {"EmpID":"RF04","Name":"Navin","LodinTime":"09.55"},
  {"EmpID":"RF06","Name":"Akash","LodinTime":"09.59"},
  {"EmpID":"RF07","Name":"Pavan","LodinTime":"10.02"},
  {"EmpID":"RF08","Name":"Lopa","LodinTime":"10.10"},
  {"EmpID":"RF09","Name":"Trishita","LodinTime":"10.11"},
  {"EmpID":"RF10","Name":"Robin","LodinTime":"10.23"},
  {"EmpID":"RF19","Name":"Amit","LodinTime":"10.28"},
  {"EmpID":"RF14","Name":"Sonia","LodinTime":"10.37"},
  {"EmpID":"RF17","Name":"Kamal","LodinTime":"10.40"},
  {"EmpID":"RF20","Name":"Navami","LodinTime":"10.40"},
  {"EmpID":"RF23","Name":"Dipanjan","LodinTime":"10.44"},
  {"EmpID":"RF16","Name":"Anuran","LodinTime":"10.46"},
  {"EmpID":"RF13","Name":"Pamopa","LodinTime":"10.53"},
  {"EmpID":"RF22","Name":"Rajiv","LodinTime":"10.59"},
  {"EmpID":"RF21","Name":"Ranbir","LodinTime":"11.00"},
  {"EmpID":"RF24","Name":"Boddu","LodinTime":"11.12"},
  {"EmpID":"RF12","Name":"Susmita","LodinTime":"11.19"},
  {"EmpID":"RF15","Name":"Palak","LodinTime":"11.30"},
  {"EmpID":"RF18","Name":"Mira","LodinTime":"11.36"},
  {"EmpID":"RF11","Name":"Madhu","LodinTime":"11.42"},
  {"EmpID":"RF25","Name":"Rohan","LodinTime":"11.55"},
  ];


  //Sorted List
  $scope.orderByMe = function(item_name) {
    $scope.itemname = item_name;
    scope.reverse = !$scope.reverse;
    if($scope.itemname == "EmpID") {
      $scope.show_EmpId = true;
      $scope.show_name = false;
      $scope.show_LodinTime = false;
    }
    else if($scope.itemname == "Name") {
      $scope.show_EmpId = false;
      $scope.show_name = true;
      $scope.show_LodinTime = false;
    }
    else if($scope.itemname == "LodinTime") {
      $scope.show_EmpId = false;
      $scope.show_name = false;
      $scope.show_LodinTime = true;
    }
  }


  //LogOut Button
  $scope.logout = function(){
    $location.path("/login");
  };

});

