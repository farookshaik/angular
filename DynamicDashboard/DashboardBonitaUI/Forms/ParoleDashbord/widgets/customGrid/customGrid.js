(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('customGrid', function() {
    return {
      controllerAs: 'ctrl',
      controller: /**
 * The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template
 * 
 * Custom widget properties defined on the right can be used as variables in a controller with $scope.properties
 * To use AngularJS standard services, you must declare them in the main function arguments.
 *  
 * You can leave the controller empty if you do not need it.
 */
 
function ($scope, $rootScope, $http, $controller, $window, $timeout) {

    $controller('ServiceWidget', { $scope: $scope, $rootScope: $rootScope, $http: $http, $controller: $controller });
  
    $scope.isDataGrid = false;
    $scope.isTreeGrid = false;

    var paginationOptions = {
        pageNumber: 1,
        pageSize: 10,
    };
     $scope.ServiceUrl = "";
    $scope.ServiceInData = {};
    $scope.ServiceInData["RowFrom"]=paginationOptions.pageNumber;
    $scope.ServiceInData["RowTo"]=paginationOptions.pageSize;
    $scope.showPlsWaitloader = false;
    $scope.failureResponse ="";


    switch ($scope.properties.isTreeGrid.toUpperCase()) {
        case "DATAGRID":
            $scope.isDataGrid = true;
            break;
        case "TREEGRID":
            $scope.isTreeGrid = true;
             $scope.isTreeGrid;
            break;
    }

    $scope.properties.isPagination = $scope.properties.pagination;
    var verticalScrollStatus = 0;

    if($scope.properties.height){
        $scope.height = "height:" + $scope.properties.height + "px;";
    }
    else{
        $scope.height = "height:auto;";
    }
    if ($scope.isTreeGrid) {
        verticalScrollStatus = 1;
        if ($scope.properties.isPagination) {
            $scope.properties.isPagination = false;
        }
    }

    $scope.gridOptions = {
        enableSorting: $scope.properties.sorting,
        enableRowSelection: $scope.properties.enableRowSelection,
        enableRowHeaderSelection: false,
        multiSelect: false,
        modifierKeysToMultiSelect: false,
        showColumnFooter: $scope.properties.columnFooter,
        showGridFooter: $scope.properties.gridFooter,
        enableSelectAll: true,
        enableGridMenu: false,
        enableColumnMenus: false,
        noUnselect: true,
        enablePaginationControls: $scope.properties.isPagination,
        showTreeExpandNoChildren: false,
        paginationPageSizes: [5, 10, 25],
        paginationPageSize: 10,
        useExternalPagination: true,
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: verticalScrollStatus,
        enableExpandAll:false
    };

    $scope.gridOptions['isGroupHeader'] = false;
    
    $scope.gridOptions['isTreeGrid']  =$scope.isTreeGrid;

    var pinningTemplate = '<div ng-if="COL_FIELD > 0">' +
                              '<div id="{{row.uid}}" class="crossHairStyle highlightNumber ui-grid-cell-contents" ng-click="grid.appScope.pinClickCallBack(row,col,$event)">' +
                                 "<div class='PinIconContainer'><span class='PinIconStyle pinImage' ng-show=" + "row.entity[col.field+'_PIN']" + "></span></div>" +
                                    '<div ng-click="grid.appScope.countClick(row,col,$event)" class="TemplateDisplayContainer">{{COL_FIELD}}</div>' +
                               '</div>' +
                          '</div>' +
                          '<div ng-if="COL_FIELD <= 0">' +
                             '<div class="ui-grid-cell-contents">{{COL_FIELD}}</div>' +
                          '</div>';

    var groupHeaderTpl = "<div role='rowgroup' class='ui-grid-header'>" +
                              "<div class='ui-grid-top-panel'>" +
                                "<div class='ui-grid-header-viewport'>" +
                                    "<div class='ui-grid-header-canvas'>" +
                                        "<div class='ui-grid-header-cell-wrapper' ng-style='colContainer.headerCellWrapperStyle()'>" +
                                            "<div ng-if ='colContainer.grid.api.grid.options.isGroupHeader' class='ui-grid-header-cell-row' style='display: table-caption;'>" +
                                                "<div group-header='colContainer'></div>" +
                                            "</div>" +
                                            "<div role='row' class='ui-grid-header-cell-row defaultColumn'>" +
                                                '<div class="ui-grid-header-cell ui-grid-clearfix" ng-repeat="col in colContainer.renderedColumns track by col.uid" ui-grid-header-cell col="col" render-index="$index">' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                              '</div>' +
                        '</div>';


    var fnInitilize = function () {

        var columns = [];
        var colmnLen = $scope.properties.headers;
        var columnClass = $scope.properties.ColumnClass;
        var columnFormat = $scope.properties.columnFormat;

        $scope.gridOptions['headerTemplate'] = groupHeaderTpl;
        for (var i = 0; i < colmnLen.length; i++) {
            var columnObj = {};

            if (angular.isObject($scope.properties.headers[i])) {
                $scope.gridOptions['isGroupHeader'] = true;
                angular.extend(columnObj, $scope.properties.headers[i]);
            }
            else {
                columnObj['name'] = $scope.properties.headers[i];
                columnObj['displayName'] = $scope.properties.headers[i];
            }
            columnObj['cellTooltip'] = true,
            columnObj['headerTooltip'] = true,
            columnObj['field'] = $scope.properties.member[i];
            columnObj['cellClass'] = (columnClass && columnClass[i]) ? columnClass[i] : '';

            if ((columnFormat && columnFormat[i])) {
                switch (angular.uppercase(columnFormat[i])) {
                    case 'DATE':
                        columnObj['cellFilter'] = "customDate";
                        break;
                    case 'AMOUNT':
                        columnObj['cellFilter'] = 'currency';
                        break;
                    case 'SSN':
                        columnObj['cellFilter'] = 'ssn';
                        break;
                    case 'PHONE':
                        columnObj['cellFilter'] = 'phone';
                        break;
                    case 'ZIP':
                        columnObj['cellFilter'] = 'zip';
                        break;
                }
            }

            if ($scope.properties.isPinningTemplate && i != 0) {
                columnObj['cellTemplate'] = pinningTemplate;
                columnObj['cellClass'] += ' rightAlign';
            }

            
            columns.push(columnObj);
        }
        $scope.gridOptions['columnDefs'] = columns;

        if ($scope.properties.isPagination) {
            $scope.gridOptions['paginationPageSize'] = $scope.properties.pageSize;
        }else{
             //$scope.gridOptions['enableVerticalScrollbar'] = false;
        }
    }

    var fnRefreshGrid = function () {

        if (angular.isString($scope.properties.dataSource[0])) {
            $scope.ServiceUrl = $scope.properties.dataSource[0];
            $scope.Refresh();
        }
        else {
              $scope.SuccessCallback($scope.properties.dataSource);
        }
    }

    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;

        if( $scope.isTreeGrid && $scope.properties.headers[$scope.properties.headers.length-1].width){
            var lastColumn = $scope.properties.headers[$scope.properties.headers.length-1];
            var availableWidth = $scope.gridApi.grid.getViewportWidth() - $scope.gridApi.grid.scrollbarWidth;
            var percentageIntegerValue = parseInt(lastColumn.width.replace(/%/g, ''), 10);
            var width = parseInt(percentageIntegerValue / 100 * availableWidth);
        
            $scope.gridOptions['columnDefs'][$scope.properties.headers.length-1].width =   Math.round((width-40)/availableWidth*100)+"%";
        }

        if ($scope.properties.enableRowSelection) {
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                //$scope.broadcast(this, row.entity);
            });
        }

        if ($scope.properties.isPagination) {
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                console.log("pagination changed")
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                $scope.SetCurrentPage(newPage, pageSize)
                fnRefreshGrid();
            });
        }
        if ($scope.gridOptions['isGroupHeader']) {
            
            $($window).off().on('resize', function (e) {
                 $scope.gridApi.redrawColumn();
            });
        }
    };
    
   
    $scope.SuccessCallback = function (records) {

        var data = [], count = 10;
        if (records && records.length > 0) {
            data = records;
            count = data[0].ROW_COUNT||data[0].ROW_NUM;
        }
        $scope.gridOptions.totalItems = count;
        if ($scope.isTreeGrid) {
            $scope.gridOptions['data'] = modifiedTreeDataStructure(data);

            //$scope.gridOptions['treeIndent'] = [10, 15];
            $timeout(function (e) {
                $scope.gridApi.treeBase.expandAllRows();
            }, 800);
        }
        else {
            $scope.gridOptions['data'] = data;
        }
        if ($scope.properties.isPinningTemplate) {
            $scope.showPin(data);
        }
    }

    $scope.FailureCallback = function (error) {
        $scope.failureResponse = error;
    }

    $scope.showPin = function (records) {

        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            angular.forEach(record, function (value, key) {
                var idRowKey = records[i].ID_ROW_KEY + "_" + key;
                if ($scope.IsPinned(idRowKey)) {
                    records[i][key + "_PIN"] = true;
                }
            });

        }
    }

    $scope.SetCurrentPage = function (currentPageNo, pageSize) {
        $scope.ServiceInData["RowFrom"] = ((currentPageNo - 1) * pageSize) + 1;
        $scope.ServiceInData["RowTo"] = currentPageNo * pageSize;
    }

    $scope.onLoad = function () {

        //if ($scope.properties.serviceInput && $scope.properties.serviceInput.length > 0)
          //  $scope.ServiceInData = JSON.parse($scope.properties.serviceInput);

        fnInitilize();
        $scope.LoadPinFilter();
        fnRefreshGrid();

    }
     
    $rootScope.$on('filterChanged', function (evt, data) {
         
        if(data.sender.properties.isLocal){
            if(!$scope.properties.toRespond && $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)==-1){
                return;
            }
            $.extend($scope.ServiceInData,data.data);
            fnRefreshGrid();
            return;
        }
        if($scope.properties.toRespond && $scope.properties.toRespond.length>0 && $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)!=-1){
               fnRefreshGrid();
                return;
        }
        if($scope.properties.mute=='Incoming' || $scope.properties.mute=='Both'){
            return;
        }
        fnRefreshGrid();
    });

    $rootScope.$on('facadeChanged', function (evt, data) {
       
        if($scope.$id == data.sender.$id) return;
         if($scope.properties.mute=='Incoming' || $scope.properties.mute=='Both'){
            return;
        }
   
        /*
       if(data.sender.properties.isLocal){
            if($scope.properties.toRespond.length==0 || $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)==-1){
                return;
            }
        } else{
             if($scope.properties.toRespond.length>0 && $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)==-1){
                return;
            }
        }
        */
        $scope.LoadPinFilter();
        fnRefreshGrid();
    });
    $scope.countClick = function (row, col, event){
        
        
         if (row.entity[col.field] > 0){
              var cellRecord = row.entity;
                if(event.ctrlKey){
                     var header = (angular.isObject($scope.properties.headers[0]))?$scope.properties.headers[0].displayName : $scope.properties.headers[0];
                    $scope.ShowReport(
                        {
                            HEADER:header + " > " + cellRecord[$scope.properties.member[0]] + " : " + col.displayName + " (" + cellRecord[col.field] + ")",
                            ID_ROW_KEY: cellRecord.ID_ROW_KEY,
                            ID_COLUMN:col.field,
                            ID_NODE:""
                        }
                    );
                event.stopPropagation();
                return;
                }
            
         }
    }
    

    $scope.pinClickCallBack = function (row, col, event) {

        if (row.entity[col.field] > 0) {
            row.entity[col.field + "_PIN"] = !row.entity[col.field + "_PIN"];
            var cellRecord = row.entity;
          
            var pinID = cellRecord.ID_ROW_KEY + "_" + col.field;
            if (row.entity[col.field + "_PIN"]) {
                var header = (angular.isObject($scope.properties.headers[0]))?$scope.properties.headers[0].displayName : $scope.properties.headers[0];
                var filterData = {
                    "ID_ROW_KEY": pinID,
                    "ID_ROW_DATA": cellRecord.ID_ROW_KEY,
                    "ID_COLUMN_DATA": col.field,
                    "Header": header + " > " + cellRecord[$scope.properties.member[0]] + " : " + col.displayName + " (" + cellRecord[col.field] + ")",
                };
                $scope.AddPinFilter(filterData);
            } else {
                $scope.DeletePinFilter(pinID);
            }
            
            //$scope.LoadPinFilter();
            fnRefreshGrid();
            $scope.broadcastFacadeChanged(this, {sender:$scope,data:row.entity});
        }
    }

    $scope.selectAll = function () {
        $scope.gridApi.selection.selectAllRows();
    };

    $scope.clearAll = function () {
        $scope.gridApi.selection.clearSelectedRows();
    };

    $scope.selectRow = function () {
        if ($scope.gridApi.selection.selectRow) {
            $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
        }
    }

    $scope.showPlsWait = function () {
        $scope.showPlsWaitloader = true;
    }

    $scope.hidePlsWait = function () {
        $scope.showPlsWaitloader = false;
    }

    $scope.onLoad();

    function modifiedTreeDataStructure(data) {

        var groupedRecords = d3.nest()
        .key(function (d) { return d[$scope.properties.parentMember] })
        .key(function (d) { return d[$scope.properties.nodeMember] })
        .map(data);

        var collectData = [];
        getModifiedStructureData("", 0, null, collectData);

        function getModifiedStructureData(DataMember, level, parent, collectData) {

            if (groupedRecords[DataMember] != undefined) {
                angular.forEach(groupedRecords[DataMember], function (value, key) {
                    var Obj = value[0];
                    Obj["$$treeLevel"] = level;
                    Obj["isPined"] = false;
                    collectData.push(Obj);
                    getModifiedStructureData(key, level + 1, Obj, collectData);

                });
            }
        }

        return collectData;
    }

},
      template: '<!-- The custom widget template is defined here\n   - You can use standard HTML tags and AngularJS built-in directives, scope and interpolation system\n   - Custom widget properties defined on the right can be used as variables in a templates with properties.newProperty\n   - Functions exposed in the controller can be used with ctrl.newFunction()\n   - You can use the \'environment\' property injected in the scope when inside the Editor whiteboard. It allows to define a mockup\n     of the Custom Widget to be displayed in the whiteboard only. By default the widget is represented by an auto-generated icon\n     and its name (See the <span> below).\n-->\n \n \n<span ng-if="environment" style="font-weight:bold;"><img ng-src="data:image/svg+xml,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2050%2020\'%3E%3Cg%3E%3Cpath%20fill%3D\'%23CBD5E1\'%20d%3D\'M36%2C15v2h11v-2H36z%20M40%2C10v2h7v-2H40z%20M11%2C10v2h14v-2H11z%20M3%2C10v2h3v-2H3z%20M11%2C15v2h17v-2H11z%20M3%2C15v2h3%20v-2H3z\'%2F%3E%3Cpath%20fill%3D\'%23fff\'%20d%3D\'M1%2C19V1h48v18H1z%20M0%2C0v20h50V0H0z\'%2F%3E%3Cpath%20fill%3D\'%23CBD5E1\'%20d%3D\'M1%2C7v1h7v11h1V8h22v11h1V8h17V7H32V1h-1v6H9V1H8v6H1z\'%2F%3E%3Cpath%20fill%3D\'%23fff\'%20d%3D\'M35%2C3h12v2H35V3z%20M11%2C3h13v2H11V3z%20M3%2C3h3v2H3V3z\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" height="20" width="50" src="data:image/svg+xml,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2050%2020\'%3E%3Cg%3E%3Cpath%20fill%3D\'%23CBD5E1\'%20d%3D\'M36%2C15v2h11v-2H36z%20M40%2C10v2h7v-2H40z%20M11%2C10v2h14v-2H11z%20M3%2C10v2h3v-2H3z%20M11%2C15v2h17v-2H11z%20M3%2C15v2h3%20v-2H3z\'%2F%3E%3Cpath%20fill%3D\'%23fff\'%20d%3D\'M1%2C19V1h48v18H1z%20M0%2C0v20h50V0H0z\'%2F%3E%3Cpath%20fill%3D\'%23CBD5E1\'%20d%3D\'M1%2C7v1h7v11h1V8h22v11h1V8h17V7H32V1h-1v6H9V1H8v6H1z\'%2F%3E%3Cpath%20fill%3D\'%23fff\'%20d%3D\'M35%2C3h12v2H35V3z%20M11%2C3h13v2H11V3z%20M3%2C3h3v2H3V3z\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"> {{environment.component.name}}</span>\n\n<div style="min-height:100px;" ng-if="isDataGrid" >\n        <div ui-grid="gridOptions" ui-grid-pagination ui-grid-selection class="grid dataViewGrid" style="{{height}}"></div>\n        <div ng-show="showPlsWaitloader" class="plsWaitStyle"></div>\n</div>\n\n<div style="min-height:100px;" ng-if="isTreeGrid">\n        <div ui-grid="gridOptions" ui-grid-selection ui-grid-tree-view class="grid treeViewGrid" style="{{height}}"></div>\n        <div ng-show="showPlsWaitloader" class="plsWaitStyle verticalHorzCenter"><i class="glyphicon glyphicon-list"></i></div>\n</div> \n<div class="error">{{failureResponse}}</div>'
    };
  });
