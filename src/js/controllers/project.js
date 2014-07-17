angular.module('disciple-ui')

.controller('ProjectCtrl', function ($scope, $routeParams) {

	$scope.init = function () {
		$scope.tabs = [
			'features',
			'training',
			'validation',
			'import',
			'models'
		];

		$scope.activeTab = $routeParams.TAB;
	}

	$scope.isActive = function (tab) {
		return (tab==$scope.activeTab) ? true : false ;
	}

});