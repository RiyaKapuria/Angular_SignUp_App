app.controller("myCtrl", function($scope, $timeout, $interval, date_time_service) {

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
      $scope.myHeader = "Welcome to the Home page !";
      $timeout(greetChange,3000);
    }
    else{
      $scope.myHeader = $scope.greet;
      $timeout(greetChange,3000);
    }
  }
  $timeout(greetChange,3000);
  
});

