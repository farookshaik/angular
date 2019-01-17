 (function () {
        try {
            return angular.module('bonitasoft.ui.widgets');
        } catch (e) {
            return angular.module('bonitasoft.ui.widgets', []);
        }
    })().controller('BaseWidget',function($scope,$rootScope){
        
        $scope.Filter={"key":[]};
        var status="Init";
        $scope.broadcast=function(event,data){
            $rootScope.$broadcast('filterChanged',{event:event,data:data});
            if(window.parent && window.parent.parent && window.parent.parent.FilterChanged){
                window.parent.parent.FilterChanged(event,data);
            }
        }
       
    })