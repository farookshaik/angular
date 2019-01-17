 (function () {
        try {
            return angular.module('bonitasoft.ui.widgets');
        } catch (e) {
            return angular.module('bonitasoft.ui.widgets', []);
        }
    })().controller('ServiceWidget',function($scope,$http,$rootScope,$controller){
        $controller('BaseWidget', { $scope: $scope, $rootScope: $rootScope });

        function checkNetworkStatus() {
            if (!window.navigator.onLine) {
                $scope.failureResponse = "Network related error occured. Please contact your Administrator.";
                return false;
            }
            return true;
        }


        $scope.Refresh = function () {
        	//$scope.LoadSelectFilter();
        	//$scope.LoadPinFilter();
            if (!checkNetworkStatus()) return;
            var type = "POST";

            if ($scope.properties.serviceMethod == "Get") {
                type = "GET";
            }


            if (!$scope.IsMute) {
                if ($scope.showPlsWait) {
                    $scope.showPlsWait();
                }
                var ServiceinputData = {
                    //'selectFilterData': (sessionStorage.getItem('selectFilter') != null) ? sessionStorage.getItem('selectFilter') : [],
                	'pinFilterData':  {},
                    'reportData': (sessionStorage.getItem('reportData') != null) ? sessionStorage.getItem('reportData') : null,
                    'QUERY': {
                    	"ID_ROW":"",
                    	"ID_COLUMN":""
                    }
                }
                
                ServiceinputData.QUERY.ID_ROW =(sessionStorage.getItem('QUERY') != null) ? sessionStorage.getItem('QUERY') : "" 
                ServiceinputData.QUERY.ID_COLUMN = (sessionStorage.getItem('COLUMN') != null) ? sessionStorage.getItem('COLUMN') : ""
                	
                
                if(ServiceinputData.reportData != null){
                	var reportData=angular.fromJson(ServiceinputData.reportData);
                	if(reportData!=null && reportData.ID_ROW_KEY){
                		if(ServiceinputData.QUERY.ID_ROW.length>0){                			
                			ServiceinputData.QUERY.ID_ROW = ServiceinputData.QUERY.ID_ROW.slice(0,ServiceinputData.QUERY.ID_ROW.length-1)+",*"+reportData.ID_ROW_KEY+")";
                			if(reportData.ID_COLUMN ==""){
                				ServiceinputData.QUERY.ID_COLUMN=ServiceinputData.QUERY.ID_COLUMN + ",NULL";	
                			}             			                			
                			else{
                				ServiceinputData.QUERY.ID_COLUMN=ServiceinputData.QUERY.ID_COLUMN + "," +reportData.ID_COLUMN;	
                			}
                			
                			
                		}
                		else{
                			ServiceinputData.QUERY.ID_ROW = "("+reportData.ID_ROW_KEY+")";
                			if(reportData.ID_COLUMN ==""){
                				ServiceinputData.QUERY.ID_COLUMN="NULL";
                			}
                			else{
                				ServiceinputData.QUERY.ID_COLUMN=reportData.ID_COLUMN;
                			}
                		}
                	}
                	
                }
                                
                ServiceinputData = $.extend(ServiceinputData, $scope.ServiceInData);
                	
                var serviceUrl=$scope.ServiceUrl;//commonService.getServiceInfo($scope.ServiceUrl)
                console.log("serviceUrl");
                console.log(serviceUrl);
                
                $http({
                    method: type,
                    url: serviceUrl,
                    data: angular.toJson(ServiceinputData) //$scope.ServiceInData
                }).then(function successCallback(response) {
                    if ($scope.hidePlsWait) {
                        $scope.hidePlsWait();
                    }

                    $scope.failureResponse = "";
                    $scope.SuccessCallback(response.data);
                  
                }, function errorCallback(errorResponse) {
                    if ($scope.hidePlsWait) {
                        $scope.hidePlsWait();
                    }                    
                    $scope.failureResponse = errorResponse.statusText;

                });
            }
        }
    })