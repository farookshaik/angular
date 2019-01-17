(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('customChartWidget', function() {
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
function ( $scope, $rootScope, $http, $controller,$location )
{

    $controller( 'ServiceWidget', { $scope: $scope, $rootScope: $rootScope, $http: $http, $controller: $controller } );
    $scope.IsMute = false;//$scope.properties.isMute;
    $scope.ServiceInData = {};//$scope.properties.serviceInput;
    $scope.IsPinAllowed = false;
    
    $scope.SuccessCallback = function ( responseData )
    {
        ConstructChartData(responseData);
        $scope.DrawChart();
    }
    
        
    $rootScope.$on('filterChanged',function(evt,data){
        
        if(data.sender.properties.isLocal){
            if(!$scope.properties.toRespond && $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)==-1){
                return;
            }
            $.extend($scope.ServiceInData,data.data);
            $scope.LoadPinFilter();
            LoadData(); 
            return;
        }
        if($scope.properties.toRespond && $scope.properties.toRespond.length>0 && $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)!=-1){
                $scope.LoadPinFilter();
                LoadData(); 
                return;
        }
        
        if($scope.properties.mute=='Incoming' || $scope.properties.mute=='Both'){
            return;
        }
        
        $scope.LoadPinFilter();
        LoadData(); 
    });
    
    $scope.showPlsWait = function(){
         $scope.showPlsWaitloader = true;
     }
     
     $scope.hidePlsWait = function(){
         $scope.showPlsWaitloader = false;
     }
    
    $rootScope.$on( 'facadeChanged', function ( evt, data )
    {    
        debugger;
        if(data.sender.$id==$scope.id) return;
        
        if($scope.properties.mute=='Incoming' || $scope.properties.mute=='Both'){
            return;
        }
        
        /*
        if(data.sender.properties.isLocal){
            if($scope.properties.toRespond.length==0 || $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)==-1){
                return;
            }
        }
        else{
             if($scope.properties.toRespond.length>0 && $scope.properties.toRespond.split(',').indexOf(data.sender.properties.id)==-1){
                return;
            }
        }
        */
        $scope.LoadPinFilter();
        LoadData();    
    } );

    $scope.ChartClicked=function(data){
        $scope.LoadPinFilter();
        LoadData();
        $scope.broadcastFacadeChanged(this, {sender:$scope,data:{"X":data.points[0].x,"Y":data.points[0].y}});
        
        
    }


    var chartType = {
        "Bar": "bar",
        "Line": "scatter",
        "Area": "area",
        "Pie": "pie"
    }

    var Orientation = {
        Horizontal: "h",
        Vertical: "v"
    }
    
    var groupBarType={
        'GROUP':'group',
        'STACK':'stack'
    }
    

    $scope.Layout = {
        showlegend: $scope.properties.showLegend,
        hovermode:'closest',
        legend: {
            "orientation": Orientation[$scope.properties.legendOrientation],
            "x": $scope.properties.legendPostionLeft/100,
            "y": $scope.properties.legendPostionTop/100,
        },
        title: $scope.properties.chartTitle,
        xaxis: {
            type:"category",
            title: $scope.properties.xAxisTitle,
            visible:$scope.properties.visibleXaxis
        },
        yaxis: {
            title: $scope.properties.yAxisTitle,
            visible:$scope.properties.visibleYaxis
            
        },
        height: $scope.properties.height,
    };
    if($scope.properties.type=="Bar")
        $scope.Layout.bargroupgap=($scope.properties.barSpacing/100);
   
    
    if($scope.properties.groupBarType){
        $scope.Layout.barmode=$scope.properties.groupBarType.trim().toLowerCase();
    }
    
    $scope.Data = []
    
    function LoadData(){
        if($scope.properties.datasource.length==1 && $scope.properties.datasource[0].indexOf('http')!=-1){
            $scope.ServiceUrl=$scope.properties.datasource[0];
            $scope.Refresh();
            $scope.IsPinAllowed = true;
        }
        else{
            $scope.IsPinAllowed = false;
            ConstructChartData($scope.properties.datasource);
            if($scope.DrawChart){            
                $scope.DrawChart();
            }
        }
    }
    LoadData();
    
    
    

    function ConstructChartData(chartServiceData)
    {
        $scope.Data = []
        var xAxis = ( $scope.properties.xAxisMember && $scope.properties.xAxisMember.trim().length > 0 ) ? $scope.properties.xAxisMember.split( ',' ) : [];
        var yAxis = ( $scope.properties.yAxisMember && $scope.properties.yAxisMember.trim().length > 0 ) ? $scope.properties.yAxisMember.split( ',' ) : [];
        var types = ( $scope.properties.chartTypes && $scope.properties.chartTypes.trim().length > 0 ) ? $scope.properties.chartTypes.split( ',' ) : [];
        var legends = ( $scope.properties.legendNames && $scope.properties.legendNames.trim().length > 0 ) ? $scope.properties.legendNames.split( ',' ) : [];
        var toolTipFormats = $scope.properties.toolTipFormats
        var dataMembers = xAxis.concat( yAxis );
        var memberLength = dataMembers.length
        var dataSource = {};
        var lines=[];
        for ( dataIndex = 0, dataLength = chartServiceData.length; dataIndex < dataLength; dataIndex++ ) {
            lines.push(0);
            for ( memberIndex = 0; memberIndex < memberLength; memberIndex++ ) {
                if ( dataSource[dataMembers[memberIndex]] ) {
                    dataSource[dataMembers[memberIndex]].push( chartServiceData[dataIndex][dataMembers[memberIndex]] );
                    
                    if(chartServiceData[dataIndex]["ID_ROW_KEY"]){
                        dataSource[dataMembers[memberIndex]+"_DATA"].push({ID_ROW_KEY:chartServiceData[dataIndex]["ID_ROW_KEY"],COLUMN:dataMembers[memberIndex]});    
                        if($scope.IsPinned(chartServiceData[dataIndex]["ID_ROW_KEY"])){
                            dataSource[dataMembers[memberIndex]+"_LINES"].push(2);
                        }
                        
                        else{
                            dataSource[dataMembers[memberIndex]+"_LINES"].push(0);
                        }
                    }
                }
                else {
                    dataSource[dataMembers[memberIndex]] = [chartServiceData[dataIndex][dataMembers[memberIndex]]];
                    if(chartServiceData[dataIndex]["ID_ROW_KEY"]){
                        dataSource[dataMembers[memberIndex]+"_DATA"]=[{ID_ROW_KEY:chartServiceData[dataIndex]["ID_ROW_KEY"],COLUMN:dataMembers[memberIndex]}];    
                        if($scope.IsPinned(chartServiceData[dataIndex]["ID_ROW_KEY"])){
                            dataSource[dataMembers[memberIndex]+"_LINES"]=[2];
                        }
                        else{
                            dataSource[dataMembers[memberIndex]+"_LINES"]=[0];
                        }
                    }
                    
                }
            }
        }
        
        var colors = []
        if ($scope.properties.BarColor)
            colors = $scope.properties.BarColor.split(",");
            
             var labelcolors = []
        if ($scope.properties.LabelColor)
            labelcolors = $scope.properties.LabelColor.split(",");

        var chartDataSource = [];
        for ( var index = 0, length = Math.max( xAxis.length, yAxis.length ) ; index < length; index++ ) {
            var chartData = {
                x: [],
                y: [],
                type: chartType[$scope.properties.type],
                hoverinfo: "text",
                textposition:$scope.properties.textposition,
                textfont:{
},

                marker:{
                    line:{
                        width:[]
                    }
                }
            }
             if(colors.length>index){
                chartData.marker["color"]=colors[index]
            }
             if(labelcolors.length>index){
                chartData.textfont["color"]=labelcolors[index]
            }
            if ( $scope.properties.type == "Pie" ) {
                chartData = {
                    labels: dataSource[$scope.properties.xAxisMember],
                    values: dataSource[$scope.properties.yAxisMember],
                    type: 'pie'
                }
            }
            else {
                if ( xAxis.length > index ) {
                    chartData.x = dataSource[xAxis[index].trim()];
                }
                else {
                    chartData.x = dataSource[xAxis[xAxis.length - 1].trim()];
                }

                if ( yAxis.length > index ) {
                    chartData.y = dataSource[yAxis[index].trim()];
                    chartData.marker.line.width=dataSource[yAxis[index].trim()+"_LINES"];
                    chartData["ServiceData"]=dataSource[yAxis[index].trim()+"_DATA"];
                }
                else {
                    chartData.y = dataSource[yAxis[yAxis.length - 1].trim()];
                    chartData.marker.line.width=dataSource[yAxis[yAxis.length - 1].trim()+"_LINES"];
                    chartData["ServiceData"]=dataSource[yAxis[yAxis.length - 1].trim()+"_DATA"];
                }

            }
            if ( legends.length > index ) {
                chartData["name"] = legends[index].trim();
            }
            else {
                chartData["name"] = "";
            }

            if ( types.length > index ) {
                chartData.type = chartType[types[index].trim()];
            }
            if ( chartData.type == "area") {
                chartData["fill"] = "tonexty"
            }
            if ( toolTipFormats && toolTipFormats.length > index ) {
                chartData["text"] = getTooltipText( toolTipFormats[index], chartData )
            }
            chartData.orientation=Orientation[$scope.properties.orientation];
            //chartData.textposition="outside";  
            $scope.Data.push( chartData );
        }
        
        

    }


    function getTooltipText( toolTipFormat, chartData )
    {
        var text = [];
        for ( toolTipIndex = 0, dataLength = chartData.x.length; toolTipIndex < dataLength; toolTipIndex++ ) {
            var xregexp = new RegExp( '\\{x\\}', 'gi' );
            var yregexp = new RegExp( '\\{y\\}', 'gi' );
            var toolTipText = toolTipFormat.replace( xregexp, chartData.x[toolTipIndex] )
            toolTipText = toolTipText.replace( yregexp, chartData.y[toolTipIndex] )
            text.push( toolTipText )
        }


        return text;
    }
    

}


,
      template: '<!-- The custom widget template is defined here\n   - You can use standard HTML tags and AngularJS built-in directives, scope and interpolation system\n   - Custom widget properties defined on the right can be used as variables in a templates with properties.newProperty\n   - Functions exposed in the controller can be used with ctrl.newFunction()\n   - You can use the \'environment\' property injected in the scope when inside the Editor whiteboard. It allows to define a mockup\n     of the Custom Widget to be displayed in the whiteboard only. By default the widget is represented by an auto-generated icon\n     and its name (See the <span> below).\n-->\n \n<span ng-if="environment" style="font-weight:bold;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAITSURBVFhH7ZmxTsJQFIb7XAjE3cfQt3DXXXfddXFBRwcWF2vCwgALCwMsoHFhuX43bdpzT+FACYZq7skfUvv3nvu1tP+1IRkt3cWrO31qioABKWkUUyaQErWrIYpYdRSx6ihi1ZGF1e25k6lrLVx7vM6auNa3t9hea/GpLMTxNKRt1ZKysDyTy9UehBYTb7Daw9LisMAaCGsaWEoWFqdVdFEXrDUvLTWBtNiWlr9UhbUILCULS3bp9kNLXJLOW2B10tLiMGnRpLQqN4bUlluey854xZSJ6ZlVMWVip7dSvR/Riobqe69qC9axFLHq6A9i5cE40w8UOuu5h7FLZ+6uYiH/nDKqkrTofuhHPU98B2VJWVgyM9Vj9Th2Rd2qOBWZqVLgOs2HUC9h0ipZWCwg5QThVfmY590ptqVlxCkoRX2uAkvJwuJciwlUPhlYRpzKUZS0lLbcW/RlbalmpoGFPNl8TWYeBsuQjbVJESti5SLxSEvS7+pdWzYW+cSom1+65WXMXO4cEDIzyXRpHQbra5WPp1QoG1g7WpS0lCwsWfvNbViUtJQiVsTytZ9FSUspYv1zLBmn/fCNfj8smhRFc2kpWViyi/qHXa5LymLBKUqtDRxZlDpPJQuLpZrBo4V/oahaTJlZ6h2GP9mJxQHKQplF26olZWEdURGrjiJWHUWsOkrOm/fDHUj+Z85GkQEzWrofJZ1PALCnhf0AAAAASUVORK5CYII=" /> {{environment.component.name}}</span>\n\n<div class="chartwidget">\n    <div class="chartContainer" style="height:{{properties.height+12}}px">\n        <div ng-show="showPlsWaitloader" class="plsWaitStyle verticalHorzCenter"><i class="glyphicon glyphicon-stats"></i></div>\n        <div custom-chart> </div>\n        <div class="error">{{failureResponse}}</div>\n    </div>\n</div>'
    };
  });
