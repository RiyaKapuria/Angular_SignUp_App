app.controller("controllerLogin", function($scope, $timeout, $interval, $location, date_time_service, $localStorage) {

  //For Date
  $scope.showDate = date_time_service.getDate();

  //For Time
  $scope.appTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.appTime = new Date().toLocaleTimeString();
  }, 1000);


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
      $scope.myHeader = "Welcome to the Login page !";
      $timeout(greetChange,3000);
    }
    else{
      $scope.myHeader = $scope.greet;
      $timeout(greetChange,3000);
    }
  }
  $timeout(greetChange,3000);


  //Login Button
  $scope.login = function(user){
  	if(!$scope.user.uname || !$scope.user.password){		
      if(!$scope.user.uname){
       $scope.error_uemply = true;
     }
     if(!$scope.user.password){
       $scope.error_pemply = true;
     }
    }
    else{
      alert(" Successfully LogIn");
      if($scope.user.uname == "admin" && $scope.user.password == "admin123"){
        $scope.user.usertype = "admin";
        $location.path("/user_details");
      }
      else{
        $scope.user.usertype = "user";
        $location.path("/galary");
      }
      $localStorage.user = user;
      $scope.user = {};
    }
  };


  //Cancel Button
  $scope.cancel = function(){
  	alert("Cancel");
    $scope.user = {};
  };

});

