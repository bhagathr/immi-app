'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {

	$scope.user = {
		workex:[
			{name:'',startDate:'',endDate:''}
		],
		education:[
			{name:'',degree:'',stream:'',startDate:'',endDate:''}	
		]	
	};

	$scope.addCompany = function(){
		$scope.user.workex.push({name:'',startDate:'',endDate:''});
	};

	$scope.removeCompany = function(index){
		$scope.user.workex.splice(index, 1);	
	};

	$scope.addUniversity = function(){
		$scope.user.education.push({name:'',startDate:'',endDate:''});
	};

	$scope.removeUniversity = function(index){
		$scope.user.education.splice(index, 1);	
	};

});