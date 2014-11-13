'use strict';

require.config({
    deps: ['jquery'],
	paths: {
        jquery: '../bower_components/jquery/dist/jquery',
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		text: '../bower_components/requirejs-text/text',
        // datatables registers itself as an AMD module no need to shim
        'datatables': '../bower_components/datatables/media/js/jquery.dataTables',
            'angular-datatables': '../bower_components/angular-datatables/dist/angular-datatables'
	},
	shim: {
		'angular' : {
            'exports' : 'angular',
            deps: ['jquery']
        },
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
        'angular-datatables': {
            deps: ['angular', 'datatables'],
            exports: 'angular'
        }
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
