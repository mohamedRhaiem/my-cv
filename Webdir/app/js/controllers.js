console.log('Loading controllers.js');

var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('bodyCtrl', function ($scope, $http,$localStorage,$document) {
    $http.get('/data/resume.json').then(function(data) {
        $scope.resume = data.data;
    });
/*   $http.get('https://drive.google.com/file/d/0BwGBt-SB7XTycjAzUFNPMHJDZTg/view').then(function(data) {
        $scope.resume = data.data;
    });*/
   
});



resumeControllers.controller('headerCtrl', function ($scope, $http) {
    $http.get('/data/resume.json').then(function (data) {
        $scope.name = data.data.personal.name;
       
    });
    $scope.myModel = {
            Name: "Mohamed Ben Rhaiem Resume",
            ImageUrl: 'http://glass-setting-831.appspot.com/images/my-pic.jpg',
            FbLikeUrl: 'http://glass-setting-831.appspot.com'
        };
});