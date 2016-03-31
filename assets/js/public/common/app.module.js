angular.module('AppModule', ['ngRoute'], AppModule);

AppModule.$inject =['$routeProvider', '$locationProvider'];

function AppModule($routeProvider, $locationProvider) {
    $routeProvider
        .when('/employee/new', {
            templateUrl: '../js/public/employee/views/new.html'
        })
        .when('/employee/show/:id', {
            templateUrl: '../js/public/team/views/show.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}
