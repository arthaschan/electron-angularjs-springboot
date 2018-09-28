index.controller('mainController', ['$scope', '$http', '$state', function ($scope, $http, $state) {

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

        $http({
            method: 'post',
            url: 'http://localhost:9527/choose',
            dataType: 'jsonp',
            withCredentials: true,
            params: {
                deviceId: id
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(function (response) {
            alert(response.data.state);
            $state.go("intercept");
        }, function errorCallback(response) {
            console.log('失败');
        });

    }

}]);