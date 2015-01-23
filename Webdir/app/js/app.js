console.log('Loading app.js');

var resumeApp = angular.module('resumeApp', [
    'ngRoute',
    'ngStorage',
    'resumeControllers'
]);

resumeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/default', {
                templateUrl: 'partials/default.html',
                controller: 'bodyCtrl'
            })
            .otherwise({
                redirectTo: '/default'
            });

    }
]);
