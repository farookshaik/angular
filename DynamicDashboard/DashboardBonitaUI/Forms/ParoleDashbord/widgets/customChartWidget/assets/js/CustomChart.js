 (function () {
        try {
            return angular.module('bonitasoft.ui.widgets');
        } catch (e) {
            return angular.module('bonitasoft.ui.widgets', []);
        }
    })().directive('customChart', function () {
        return {
            link:function(scope, element, attrs,ctrl){
                
                $(window).on('resize',function(){
                    Plotly.Plots.resize(element[0]);
                });
                
                scope.DrawChart=function(){
                    var layout=Object.assign({},scope.Layout,{ margin: { t: 30 } });
                    Plotly.newPlot(element[0], scope.Data,layout , {displayModeBar: false} );
                    
                    element[0].on('plotly_click', function(eventdata){
                        
                        if(!scope.IsPinAllowed) return;
                        var pn='',
                          tn='',
                          lines=[];
                            for(var i=0; i < eventdata.points.length; i++){
                                    pn = eventdata.points[i].pointNumber;
                                    tn = eventdata.points[i].curveNumber;
                                    lines=eventdata.points[i].data.marker.line.width
                             };
                             var traces=[];
                             for(var i=0; i < element[0].data.length; i++){
                                    traces.push($.extend(true,{},element[0].data[i].marker));
                             };
                             if( eventdata.points[0].data.ServiceData){
                                  var serviceData=eventdata.points[0].data.ServiceData[eventdata.points[0].pointNumber];
                                  debugger;
                             if(eventdata.event.ctrlKey){
                                           scope.ShowReport(
                                                {
                                                    HEADER:((scope.properties.chartTitle)? (scope.properties.chartTitle) + " : ": " ") +eventdata.points[0].fullData.name ,
                                                    ID_ROW_KEY: serviceData.ID_ROW_KEY,
                                                    ID_COLUMN_DATA:serviceData.COLUMN,
                                                    ID_COLUMN:serviceData.COLUMN,
                                                    ID_NODE:""
                                                }
                                            );
                                            //scope.ShowReport(eventdata.points[0].fullData.name);
                                            return;
                                }
                            
                                   
                                    
                                    if(lines[pn] == 2){
                                         traces[tn].line.width[pn]= 0;
                                         scope.DeletePinFilter(serviceData.ID_ROW_KEY);
                                    }
                                    else{
                                         traces[tn].line.width[pn] = 2;
                                         scope.AddPinFilter({
                                                    Header:eventdata.points[0].fullData.name + " : " +eventdata.points[0].y + "(" +eventdata.points[0].y+")",
                                                    ID_ROW_KEY:serviceData.ID_ROW_KEY,
                                                    ID_COLUMN:serviceData.COLUMN,
                                                    ID_COLUMN_DATA:serviceData.COLUMN
                                                    
                                        });
                                    }
                                
                                    var update = {'marker': traces };
                                    Plotly.restyle(element[0], update);
                                    console.log( element[0].data);
                                    scope.ChartClicked(eventdata);
                        
                             }
                    });
                    
                    element[0].on('plotly_afterplot', function(evt){
                        
                        //SetHorizontalLabel();
                        
                        
                    });
                    
                    
                    function SetHorizontalLabel(){
                        var isBar=true;
                        var chartData=element[0].data;
                        for(var dataIndex=0,dataLength=chartData.length;dataIndex<dataLength;dataIndex++){
                            if(chartData[dataIndex].type !="bar" || chartData[dataIndex].orientation !='h'){
                                isBar=false;
                                break;
                            }
                        }
                        
                        if(!isBar) return;
                        var textElements=$(element).find("text.bartext");
                        for(var index=0,elementCount=textElements.length;index<elementCount;index++){
                            $(textElements[index]).addClass('horlbl');
                            var svgmatrix=textElements[index].transform.baseVal.getItem(0).matrix;
                            if(textElements[index].previousSibling.getBoundingClientRect().width>svgmatrix.e){
                                svgmatrix.e=textElements[index].previousSibling.getBoundingClientRect().width-svgmatrix.e;
                            }
                            else{
                                svgmatrix.e=svgmatrix.e-textElements[index].previousSibling.getBoundingClientRect().width;    
                                
                            }
                            
                            svgmatrix.f=svgmatrix.f-(textElements[index].previousSibling.getBoundingClientRect().height/2)-(textElements[index].getBoundingClientRect().height/2);
                        }
                    }
                    
                    
               } 
                //scope.DrawChart();
            }
        }
    });