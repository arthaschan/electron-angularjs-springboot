index.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $http({
        method: 'post',
        url: 'http://localhost:9527/start',
        dataType: 'jsonp',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }).then(function (response) {
        $scope.devices = response.data
    }, function errorCallback(response) {
        console.log('失败');
    });

    $scope.btclick = function (id) {
        alert(id);
    }

}]);