var app = angular.module("myApp", ["ngRoute", "ngAnimate", "ui.carousel","ngStorage"]);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "home.html"
  })
  .when("/register", {
    templateUrl : "register.html"
  })
  .when("/login", {
    templateUrl : "login.html"
  })
  .when("/user_details", {
    templateUrl : "user_details.html"
  })
  .when("/galary", {
    templateUrl : "galary.html"
  })
  .when("/profile", {
    templateUrl : "profile.html"
  });
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});


app.service('date_time_service', function($filter) {
  this.getDate = function() {
    var _date = new Date();
    var appDate = $filter('date')(_date);
    return appDate;
  }
});


