console.log('Loading controllers.js');

var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('bodyCtrl', function ($scope, $http,$localStorage) {
    $http.get('/data/resume.json').success(function(data) {
        $scope.resume = data;
    });

    $scope.current_date = Date.now();
    $scope.$storage = $localStorage.$default({
    	like: 0 ,
    	unlike: 0 
      });
});

resumeControllers.controller('headerCtrl', function ($scope, $http) {
    $http.get('/data/resume.json').success(function (data) {
        $scope.name = data.personal.name;
       
    });
   
});