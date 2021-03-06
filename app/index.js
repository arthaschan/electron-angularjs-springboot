var index = angular.module('index', ['ui.router']);

/**
 * @description $urlRouterProvider.otherwise('userinfo');
 * 设置默认路由，即首页
 */
index.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('index');
    $stateProvider.state('index', {
        url: '/index',
        controller: 'mainController',
        templateUrl: 'html/devices/devices.html'
    }).state('intercept', {
        url: '/intercept',
        controller: 'interceptController',
        templateUrl: 'html/intercept/intercept.html'
    });

}]);