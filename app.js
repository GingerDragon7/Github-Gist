 var gists = angular.module('gist', []);
 gists.controller('gistCtrl', function($scope, $http) {
     $http.get('https://api.github.com/gists/public?page=1&per_page=30').success(function(data) {
         $scope.list = data;
     });
 });
