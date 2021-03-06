app.controller("controllerGalary", function($scope, $timeout, $interval, $location, date_time_service, $localStorage){

  //Inputs values form Login page
  oninit();
  function oninit(){
    $scope.user  = $localStorage.user;
  }

  //For Date
  $scope.showDate = date_time_service.getDate();

  //For Time
  $scope.appTime = new Date().toLocaleTimeString();
  $interval(function () {
    $scope.appTime = new Date().toLocaleTimeString();
  }, 1000);


  //image object
  $scope.images = [
  '../img1.jpg',
  '../img2.jpg',
  '../img3.jpg',
  '../img4.jpg'
  ];
  

  //For Greeting Msg
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
      $scope.myHeader = "Welcome to the Galary !";
      $timeout(greetChange,3000);
    }
    else{
      $scope.myHeader = $scope.greet;
      $timeout(greetChange,3000);
    }
  }
  $timeout(greetChange,3000);


  //LogOut Button
  $scope.logout = function(){
    $location.path("/login");
  };


})

