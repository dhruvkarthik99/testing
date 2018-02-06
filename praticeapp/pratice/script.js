var app=angular.module('single-page-app',[]);
app.controller("cfgController", function($scope,$http) {
	
	$scope.praticenice = function(){
	console.log("vastundi");
		var data={"first":$scope.first,"second":$scope.second}
      var req = {
          method: 'GET',
          url: '/praticedo',
          headers: {
              'Content-Type': 'text/plain'
          },
		  params: data
      }
      var res = $http(req);
      res.success(function(data, status, headers, config) {
		console.log(data);
        $scope.result=data;
      });
      res.error(function(data, status, headers, config) {
          alert("failure message: " + JSON.stringify({
              data: data
          }));
      });
    }
	
});