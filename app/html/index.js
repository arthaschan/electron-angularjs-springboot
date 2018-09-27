var app = angular.module('index', []);

app.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $http({
        method: 'post',
        url: 'http://localhost:9527/start',
        dataType: 'jsonp',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }).then(function (response) {
        var str = "";
        angular.forEach(response.data.state, function (i) {
            if (str !== "") {
                $scope.text = str + "\n" + i;
                str = $scope.text;
            } else {
                $scope.text = i;
                str = $scope.text;
            }
        });
    }, function errorCallback(response) {
        console.log('失败');
    });

}]);