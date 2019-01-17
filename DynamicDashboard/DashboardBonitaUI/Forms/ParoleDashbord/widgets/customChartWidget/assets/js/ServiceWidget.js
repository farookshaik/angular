 (function () {
        try {
            return angular.module('bonitasoft.ui.widgets');
        } catch (e) {
            return angular.module('bonitasoft.ui.widgets', []);
        }
    })().controller('ServiceWidget',function($scope,$http,$rootScope,$controller){
        $controller('BaseWidget',{$scope:$scope,$rootScope:$rootScope});
        $scope.Refresh=function(){
            if(!$scope.IsMute){
                if($scope.showPlsWait){
                        $scope.showPlsWait();
                    }
                $http({
                    method: 'POST',
                    url: $scope.ServiceUrl,
                    data :$scope.ServiceInData
                }).then(function successCallback(response) {
                    if($scope.hidePlsWait){
                        $scope.hidePlsWait();
                    }
                        
                    $scope.SetData(response);
                }, function errorCallback(errorResponse) {
                    if($scope.hidePlsWait){
                        $scope.hidePlsWait();
                    }
                     
                    console.log(errorResponse);
                });
            }
        }
    })