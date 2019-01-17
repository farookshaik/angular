(function () {
    try {
        return angular.module('bonitasoft.ui.widgets');
    } catch (e) {
        return angular.module('bonitasoft.ui.widgets', []);
    }
})().directive('groupHeader', function () {
    function link(scope) {
        scope.headerRowHeight = 30;
        scope.catHeaderRowHeight = scope.headerRowHeight + 'px';
        scope.categories = [];
       
        scope.grid.api['redrawColumn'] = function(){
         
        var lastDisplayName = "";
        var totalWidth = 0;
        var left = -1;
        var cols = scope.grid.api.grid.columns;
        var isTreeGrid = false;
        var expanderColWidth = 30;
        
        scope.categories = [];
        
        if(cols[0].colDef.name == "treeBaseRowHeaderCol"){
            isTreeGrid = true;   
           expanderColWidth =  cols[0].drawnWidth;
        }

        for (var i = 0; i < cols.length; i++) {
            var width = cols[i].drawnWidth;

            totalWidth += Number(width);

            var displayName = (typeof (cols[i]['colDef'].category) === "undefined") ?
              "\u00A0" : cols[i]['colDef'].category;

            if (displayName !== lastDisplayName) {
                var column = {
                    displayName: lastDisplayName,
                    width: totalWidth - Number(width),
                    widthPx: (totalWidth - Number(width)) + 'px',
                    left: left,
                    leftPx: left + 'px'
                }
                if (lastDisplayName != "") {
                    if(isTreeGrid && displayName!=""){
                        isTreeGrid = false;
                        column.width = (column.width - expanderColWidth);
                        column.widthPx = column.width +'px';
                    }
                    if(column.width == 0){
                        column['class'] ="borderNone"; 
                    }
                    scope.categories.push(column);
                }

                left += (totalWidth - Number(width));
                totalWidth = Number(width);
                lastDisplayName = displayName;
            }
        }
        if (totalWidth > 0) {
            scope.categories.push({
                displayName: lastDisplayName,
                width: totalWidth,
                widthPx: totalWidth + 'px',
                left: left,
                leftPx: left + 'px'
            });
        }
        }
        
        scope.grid.api.redrawColumn();
    }
    return {
        link: link,
        template: '<div class="headerCell ui-grid-header-cell" ng-repeat="cat in categories" ng-style="{width:cat.widthPx}" ng-class="cat.class">' +
                       '<div role="columnheader">' +
                           '<div role="button" tabindex="0" class="ui-grid-cell-contents ui-grid-header-cell-primary-focus">' +
                               '<span class="ui-grid-header-cell-label ng-binding"><b>{{cat.displayName}}</b></span>' +
                            '</div>' +
                       '</div>' +
                 '</div>'
    };
}).filter('customDate', function ($filter) {
    var format = "MM/dd/yyyy"
    return function (value) {
        return $filter('date')(new Date(value), format);
    };
}).filter('ssn', function ($filter) {

    return function (value) {
        if (value.length > 3)
            var value = value.substr(0, 3) + "-" + value.substr(3, 2) + "-" + value.substr(5, 4);
        return value;
    };
}).filter('zip', function ($filter) {

    return function (value) {
        if (value.length > 5)
            value = value.substr(0, 5) + "-" + value.substr(5, 4);
        return value;
    };
}).filter('phone', function ($filter) {

    return function (input) {
        if (value.length > 3)
            value = value.substr(0, 3) + "-" + value.substr(3, 3) + "-" + value.substr(6, 4);
        return value;
    };
});