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
        
        .when('/project/:PROJECT-UUID/:TAB', {
            controller: 'ProjectCtrl',
            templateUrl: 'views/project.html'
        })
        .when('/projects', {
            controller: angular.noop(),
            templateUrl: 'views/projects.html'
        })

        .when('/deploy/', {
            controller: angular.noop(),
            templateUrl: 'views/deploy.html'
        })
        .when('/', {
            controller: angular.noop(),
            templateUrl: 'views/index.html'
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