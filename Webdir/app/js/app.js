console.log('Loading app.js');

var resumeApp = angular.module('resumeApp', [
    'ngRoute',
    'resumeControllers',
    'resumeDirectives',
    'resumeFactories',
]);

resumeApp.run(['$rootScope', function($rootScope) {
                      $rootScope.facebookAppId = '1556599584589460';
                  }
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
