var khaoPioApp = angular.module("khaoPioApp", ["ngRoute"]);
khaoPioApp.config(function($routeProvider) {
	$routeProvider
    .when("/", {
        templateUrl : "Login/login.html"
    }).when("/register", {
        templateUrl : "Register/register.html"
    }).when("/forgotPassword", {
        templateUrl : "ForgotPassword/forgotPassword.html"
    }).when("/otp", {
        templateUrl : "otp/otp.html"
    }).when("/dashboard", {
        templateUrl : "dashboard/dashboard.html"
    }).otherwise({
        templateUrl : "Login/login.html"
    });
});