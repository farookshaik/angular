 (function () {
        try {
            return angular.module('bonitasoft.ui.widgets');
        } catch (e) {
            return angular.module('bonitasoft.ui.widgets', []);
        }
})().controller('BaseWidget',function($scope,$rootScope){
      var status = "Init";
        $scope.Filter = {
            "key": []
        };

        $scope.SetNavigationInfo=function(title){
        	var navData = sessionStorage.getItem("navigateInformation");
            var navDataArray = null;
            if (navData && navData.length > 0) {
                navDataArray = JSON.parse(navData);
            }
            else {
                navDataArray = [];
            }
            var tabInfo= sessionStorage.getItem("tabInfo");
            if(tabInfo){
            	tabInfo=angular.fromJson(tabInfo)
            }
            navDataArray.push({
                name: title,
                url: window.top.location.href,
                tabInfo:tabInfo
            });
            sessionStorage.setItem("navigateInformation", JSON.stringify(navDataArray));
            sessionStorage.setItem("tabInfo",null);                
        }
        $scope.ShowReport = function (data) {
            if ($scope.properties.reportUrl && $scope.properties.reportUrl !== '') {           	
                
            	$scope.SetNavigationInfo(data.HEADER);
                sessionStorage.setItem("reportData", JSON.stringify(data));                
                window.top.location.href = $scope.properties.reportUrl;               
            }
        }
        
        $scope.SetTabInfo=function(id,index){
        	sessionStorage.setItem("tabInfo", JSON.stringify({id:id,index:index}));
        }
        
        $scope.GetPrevScreenInfo=function(){
        	var prevScreenInfo=sessionStorage.getItem('prevTabInfo');
        	if(prevScreenInfo){        		
        		return angular.fromJson(prevScreenInfo);
        	}
        	return null;
        }
        

        function showHidePinFilter() {
        	//var pinJson = sessionStorage.getItem('pinFilterData');
        	var pinJson = sessionStorage.getItem('QUERY');    	        	
        	
        	//if (pinJson != null && pinJson.length > 0 && angular.fromJson(pinJson).QUERY.length>0 ) {
        	if(pinJson != null && pinJson.length > 0){
                $scope.showPanel = true;
            }
            else {
                $scope.showPanel = false;
            }        	
            if ($scope.navigationalPanel) {
                setTimeout($scope.navigationalPanel.AdjustWidth, 1000);
            }
            if ($scope.Setbodypadding) {
                $scope.Setbodypadding();
            }

        }
        
        
        /************* Select Filter **************/

        $scope.AddSelectFilter = function (selectFilterData) {
            
            $scope.LoadSelectFilter();
            var selectFilter = $scope.Filter["selectFilter"];
            

            if (selectFilter == null) {
                //selectFilter = {};
                $scope.Filter["selectFilter"] = [];
            }
            if($scope.Filter["selectFilter"].length == 0 ){
                $scope.Filter["selectFilter"].push(selectFilterData);
            }
            else{
                if(!isFilterSelected(selectFilterData.WidgetName,selectFilterData)){
                    $scope.Filter["selectFilter"].push(selectFilterData);    
                }
            }
            $scope.SetSelectFilter();
        }
        
        function isFilterSelected(WidgetName,selectFilterData){
             var selectFilter = $scope.Filter["selectFilter"];

             for(var i=0,length=selectFilter.length;i<length;i++){
                    if(selectFilter[i]["WidgetName"] === WidgetName){
                       $scope.Filter["selectFilter"][i] = selectFilterData;
                       return true;
                    } 
             }    
             return false
        }
        
        $scope.DeleteSelectFilter = function(Widgetname){
            //delete $scope.Filter["selectFilter"][Widgetname];
            debugger;
            $scope.LoadSelectFilter();
            var selectFilter = $scope.Filter["selectFilter"];
            for(var i=0,length=selectFilter.length;i<length;i++){
                if(selectFilter[i]["WidgetName"] === Widgetname){
                   $scope.Filter["selectFilter"].splice(i,1);
                   $scope.SetSelectFilter();
                   return false;
                } 
            }    
             $scope.SetSelectFilter();
        }
        
        $scope.ClearSelectFilter = function(){
            $scope.Filter["selectFilter"]=[];
            $scope.SetSelectFilter();
        }
        
        $scope.SetSelectFilter = function () {
	                    
            sessionStorage.setItem('selectFilter', JSON.stringify($scope.Filter["selectFilter"]));
            $scope.GetQuery();
            showHidePinFilter();
        }
        
        $scope.LoadSelectFilter = function () {
            var selectFilter = sessionStorage.getItem('selectFilter');            
            if (selectFilter && selectFilter.length > 0) {
                $scope.Filter["selectFilter"] = angular.fromJson(selectFilter);
            }
            else {
                $scope.Filter["selectFilter"] = [];

            }
            showHidePinFilter();
        }
        
        $scope.getSelectFilter = function(WidgetName){
            var selectFilter = angular.fromJson(sessionStorage.getItem('selectFilter'));
            if(selectFilter){
                for(var i=0,length=selectFilter.length;i<length;i++){
                    if(selectFilter[i]["WidgetName"] === WidgetName){
                       return selectFilter[i];
                    } 
                }    
                return null;
            }
            else{
                 return null;
            }
        }
        
        /************* Select Filter **************/
        
        /************* Pin Filter **************/

        $scope.AddPinFilter = function (pinData) {
            debugger;
            addPinItem(pinData);
            $scope.setPinFilter();
            showHidePinFilter();
        }
        $scope.DeletePinFilter = function (pinData) {
            removePinItem(pinData);
            $scope.setPinFilter();
            showHidePinFilter();
        }

        $scope.ClearPinFilter = function () {
        	
            //sessionStorage.setItem('pinFilterData', angular.toJson(defaultPinFilterData()))
            $scope.Filter["pinFilterData"] = defaultPinFilterData();
            $scope.setPinFilter();
        }

        $scope.setPinFilter = function () {
            debugger;
            sessionStorage.setItem('pinFilterData', angular.toJson($scope.Filter["pinFilterData"]));//JSON.stringify($scope.Filter["pinFilterData"]));  //angular.toJson($scope.Filter["PinnedItems"]));   
            $scope.GetQuery();           
        }
        
         $scope.LoadPinFilter = function () {
            var pinJson = sessionStorage.getItem('pinFilterData');

            if (pinJson != null && pinJson.length > 0) {
                $scope.Filter["pinFilterData"] = angular.fromJson(pinJson);//JSON.parse(pinJson);////();
            }
            else {
                $scope.Filter["pinFilterData"] = defaultPinFilterData();

            }
            showHidePinFilter();
        }
        
        $scope.IsPinned = function (idRowKey) {
        	$scope.LoadPinFilter();
            if (Object.keys($scope.Filter["pinFilterData"].PIN).length > 0) {
                var isPinned = {
                    status: false
                }
                parseGroup($scope.Filter["pinFilterData"].PIN.values, isPinned);
                return isPinned.status;

                function parseGroup(groupData, isPinned) {
                    //angular.forEach(groupData, function (item, index) {

                    //var isPinAvailable = false;

                    $.each(groupData, function (index, item) {
                        
                        if (item.type == "Group") {
                            parseGroup(item.values, isPinned);
                            if (isPinned.status) return false;
                        }
                        else if (item.type == "Operand") {
                            if (item.value.ID_ROW_KEY == idRowKey) {
                                isPinned.status = true;
                                return false;
                            }
                        }
                    });
                    return false;
                }
            }
            return false;
        }
        
        $scope.GetPinnedData = function () {
        	$scope.LoadPinFilter();
        	var filter = "";    
            if (Object.keys($scope.Filter["pinFilterData"].PIN).length > 0) {
                          
                filter = parseGroup($scope.Filter["pinFilterData"].PIN.values);
                return filter;
            }
            return filter;
            function parseGroup(groupData, filter) {
                    var filter="";
                    $.each(groupData, function (index, item) {
                        if (item.type == "Group") {
                           filter += parseGroup(item.values);
                        }
                        else if (item.type == "Operand") {
                            filter += item.value.DESC;
                        }
                        else if (item.type == "Operator") {
                            filter += item.value;
                        }
                    });
                    return filter;
                }
        }
         
        function defaultPinFilterData() {
            return { "ADV": {}, "PIN": {}, "QUERY": "", "COLUMN": "" };
        }

        function addPinItem(pinData) {
        	$scope.LoadPinFilter();
            if (Object.keys($scope.Filter["pinFilterData"].PIN).length === 0) {
                $scope.Filter["pinFilterData"].PIN = {
                    "type": "Group",
                    "values": [getOperandData(pinData)]
                };
            }
            else {
                if ($scope.Filter["pinFilterData"].PIN.values.length > 0) {
                    $scope.Filter["pinFilterData"].PIN.values.push(getOperatorData());
                }
                $scope.Filter["pinFilterData"].PIN.values.push(getOperandData(pinData))
            }
        }

        function getOperatorData() {
            return { "type": "Operator", "value": "AND" };
        }

        function getOperandData(pinData) {
            var operandData = {
                "type": "Operand",
                "value": {
                    "HeaderName": pinData["ID_ROW_KEY"],
                    //"ID_ROW_DATA": pinData["ID_ROW_KEY"],
                    //"ID_COLUMN_DATA": "NULL",
                    "ID_ROW_DATA": (pinData['ID_ROW_DATA']) ? pinData['ID_ROW_DATA'] : pinData["ID_ROW_KEY"],
                    "ID_COLUMN_DATA": (pinData['ID_COLUMN_DATA']) ? pinData['ID_COLUMN_DATA'] : "NULL",
                    "IS_PINNED": true,
                    "Operand": pinData["ID_ROW_KEY"],
                    "DESC": pinData["Header"],
                    "PinType": "Widget",
                    "ID_ROW_KEY": pinData["ID_ROW_KEY"],
                    "ID_NODE": "",
                    "ID_AGE": "",
                    "IS_FAV": false
                }
            }

            return operandData;
        }

        function removePinItem(idRowKey) {
        	$scope.LoadPinFilter();
            if (Object.keys($scope.Filter["pinFilterData"].PIN).length > 0) {

                parseGroup($scope.Filter["pinFilterData"].PIN.values, null, null);

                function parseGroup(groupData, parentGroupData, parentIndex) {
                    //angular.forEach(groupData, function (item, index) {

                    var isRowkeyAvailable = false;
                    $.each(groupData, function (index, item) {
                        
                        if (item.type == "Group") {
                            var getRowkeyAvailable = parseGroup(item.values, groupData, index);
                            if (groupData != null) {
                                if (item.values.length == 0) {
                                    groupData.splice(index, 1);
                                }

                                if (item.values.length == 1) {
                                    groupData[index] = item.values[0];
                                }
                            }
                            if (getRowkeyAvailable) return false;
                        }
                        else if (item.type == "Operand") {
                            if (item.value.ID_ROW_KEY == idRowKey) {
                                
                                if (index == 0) {
                                    if (groupData.length == 1) {
                                        groupData.splice(index, 1);
                                    }
                                    else {
                                        groupData.splice(index, 2);
                                    }
                                }
                                else {
                                    groupData.splice(index - 1, 2);
                                }

                                isRowkeyAvailable = true;
                                return false;
                            }
                        }
                    });
                    return isRowkeyAvailable;
                }
            }
        }

        /************* Pin Filter **************/
        $scope.LoadPinFilter();
        $scope.LoadSelectFilter();
       
        $scope.broadcastFacadeChanged = function (sender, data) {
            if ($scope.properties.mute == 'Outgoing' || $scope.properties.mute == 'Both') {
                return;
            }
            $rootScope.$broadcast('facadeChanged', data);
            if (window.parent && window.parent.parent && window.parent.parent.FacadeChanged) {
                window.parent.parent.FacadeChanged(sender, data);
            }
        }

        $scope.broadcastFilterChanged = function (sender, data) {
            if ($scope.properties.mute == 'Outgoing' || $scope.properties.mute == 'Both') {
                return;
            }
            $rootScope.$broadcast('filterChanged', data);
            if (window.parent && window.parent.parent && window.parent.parent.FilterChanged) {
                window.parent.parent.FilterChanged(sender, data);
            }
        }

        $scope.GetQuery = function () {
           
            var filterQuery = "";
            var filerColumn = "";
            
            
            var selectFilter = angular.fromJson(sessionStorage.getItem('selectFilter'));
            var pinFilterData = angular.fromJson(sessionStorage.getItem('pinFilterData'));
            
            if(selectFilter){
                angular.forEach(selectFilter,function(value,index){
                    if(index != 0){
                        filterQuery += ",*";
                        filerColumn += ",";
                    }
                    filterQuery += value["ID_ROW_KEY"];
                    filerColumn += "NULL";
                });
            }
            if(pinFilterData){
                if (pinFilterData.PIN.values) {
                
                    var groupValues = pinFilterData.PIN.values;
                  
                    if (groupValues.length > 0) {
                        if(filterQuery != ""){
                            filterQuery += ",*";
                        }
                        filterQuery += getVisualQuery(groupValues, "",true);
                    }                    
                  
                    if (groupValues.length > 0) {
                        if(filerColumn != ""){
                            filerColumn += ",";
                        }
                    	filerColumn += getPinnedColumns(groupValues, "");
                    }                    
                   
                }
            }
            
            if(filterQuery != ""){
                filterQuery ="("+filterQuery +")";
            }
            
            sessionStorage.setItem("QUERY", filterQuery);
            sessionStorage.setItem("COLUMN", filerColumn);
            
        };

        function getPinnedColumns(items, tabSpace) {
            
            var query = tabSpace;
            for (var i = 0, length = items.length; i < length; i++) {
                var item = items[i];
                switch (item.type) {
                    case "Group":
                        query += getPinnedColumns(item.values, tabSpace + "");
                        break;
                    case "Operand":
                        query += "" + tabSpace + item.value.ID_COLUMN_DATA;
                        break;
                    case "Operator":
                        query += "" + tabSpace + ",";
                        break;
                }
            }
            query += tabSpace;
            return query;
        }

        function getVisualQuery(items, tabSpace,root) {
            var query = "";
             
            if(root){
              query = tabSpace + "";
            }
            else{
                 query = tabSpace + "(";
            }
            
            for (var i = 0, length = items.length; i < length; i++) {
                var item = items[i];
                switch (item.type) {
                    case "Group":
                        query += getVisualQuery(item.values, tabSpace + "",false);
                        break;
                    case "Operand":
                        query += "" + tabSpace + (item.value.ID_ROW_DATA) ? item.value.ID_ROW_DATA : item.value.ID_ROW_KEY;
                        break;
                    case "Operator":
                        var expression = "";
                        switch (item.value) {
                            case "AND":
                                expression = ",*"
                                break;
                            case "OR":
                                expression = ",^"
                                break;
                            case "NOT":
                                expression = ",!"
                                break;
                        }
                        query += "" + tabSpace + expression;
                        break;
                }
            }
            
            if(root){
              query += tabSpace + "";
            }
            else{
                 query += tabSpace + ")";
            }
            return query;
        }
        
        $scope.getActiveFilterData = function(){
            var obj = {
                "SelectFilter":"",
                "AppliedFilter":""
            };
            var selectFilter = angular.fromJson(sessionStorage.getItem('selectFilter'));
            var reportData = angular.fromJson(sessionStorage.getItem('reportData'));
            var selectFilterArray = [];              
            if(selectFilter){
                angular.forEach(selectFilter,function(value,index){
                     selectFilterArray.push(value["Header"]);
                });
            }
            obj.SelectFilter = selectFilterArray.join(",");
            obj.AppliedFilter += $scope.GetPinnedData();
            
            if(reportData){
                if(obj.AppliedFilter != ""){
                    obj.AppliedFilter += " > ";
                }
                obj.AppliedFilter += reportData["HEADER"];
            }
            return obj;
        };
        
        $scope.GetQuery();
 
});