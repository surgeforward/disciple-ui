angular.module('disciple-ui', ['ngRoute', 'ngAnimate'])

.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
        .when('/analyze/graphs/', {
            controller: angular.noop(),
            templateUrl: 'views/analyze/graphs.html'
        })
        .when('/analyze/', {
            controller: angular.noop(),
            templateUrl: 'views/analyze/index.html'
        })
        .when('/analyze/tasks/', {
            controller: angular.noop(),
            templateUrl: 'views/analyze/tasks.html'
        })
        .when('/data/', {
            controller: angular.noop(),
            templateUrl: 'views/data.html'
        })
        .when('/dataset/', {
            controller: angular.noop(),
            templateUrl: 'views/dataset.html'
        })
        .when('/deploy/', {
            controller: angular.noop(),
            templateUrl: 'views/deploy.html'
        })
        .when('/', {
            controller: angular.noop(),
            templateUrl: 'views/index.html'
        })
        .when('/model/', {
            controller: angular.noop(),
            templateUrl: 'views/model.html'
        })
        .when('/models/', {
            controller: angular.noop(),
            templateUrl: 'views/models.html'
        })
        .when('/tasks/', {
            controller: angular.noop(),
            templateUrl: 'views/tasks.html'
        }).otherwise({
            redirectTo: '/'
        });
})

.run(function ($rootScope, debug) {
    $rootScope.greeting = 'Hello world!';

    if (debug) {
        // browserSync
        var script = document.createElement('script');
        script.src = '//HOST:3000/browser-sync-client.js'.replace(/HOST/g, location.hostname);
        document.body.insertBefore(script, null);
    }
});