'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'app/partials/partial2.html',
			controller: 'MyCtrl2'
		});
        $routeProvider.when('/view3', {
            templateUrl: 'app/partials/partial3.html',
            controller: 'MyCtrl3'
        });
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);

});
