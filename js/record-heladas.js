function resizeRMIN(){widthRMIN=parseInt(d3.select("#rmin-chart").style("width")),widthRMIN-=25;var t=d3.select(".record-minimas-chart");barpadding=1,xRangeRMIN=d3.scaleLinear().domain([d3.min(datosRMIN,function(t){return t.anyo}),d3.max(datosRMIN,function(t){return t.anyo})]).range([30,widthRMIN]),t.selectAll("rect").attr("width",widthRMIN/datosRMIN.length-barPadding).attr("fill",function(t,a){return colorsRMIN(a)}).attr("x",function(t){return xRangeRMIN(t.anyo)}).attr("y",function(t){return yRangeRMIN(t.dias)}).attr("height",function(t){return heightRMIN-yRangeRMIN(t.dias)}),t.data(datosRMIN).attr("width",widthRMIN).select("g").attr("transform","translate(0,0)"),xRangeRMIN.domain([d3.min(datosRMIN,function(t){return t.anyo}),d3.max(datosRMIN,function(t){return t.anyo})]),t.selectAll(".xAxis .tick").remove();var a=d3.axisBottom().scale(xRangeRMIN).tickFormat(d3.format("d")).ticks(5);t.append("g").attr("class","xAxis").attr("transform","translate(0,400)").call(a)}var barPadding=2,datosRMIN=[],margin={top:50,right:50,bottom:50,left:110},widthRMIN=1200-margin.left-margin.right,heightRMIN=500-margin.top-margin.bottom,svgRMIN=d3.select(".minimas-chart-container").append("svg").attr("class","record-chart-minimas").attr("width",widthRMIN+margin.left+margin.right).attr("height",heightRMIN+margin.top+margin.bottom).append("g").attr("transform","translate("+(margin.left-margin.right)+","+margin.top+")");widthBar=widthRMIN/66;var xRangeRMIN=d3.scaleLinear().range([30,widthRMIN]),yRangeRMIN=d3.scaleLinear().range([heightRMIN,0]),xAxisRMIN=d3.axisBottom().scale(xRangeRMIN).tickFormat(d3.format("d")).ticks(5),yAxisRMIN=d3.axisLeft().scale(yRangeRMIN).tickSize(16-widthRMIN).ticks(5),colorsRMIN=d3.scaleLinear().domain([10,35]).range(["#68abb8","#4f90a6","#3b738f","#2a5674"]);d3.csv("record-minimas.csv",function(t,a){(datosRMIN=a).forEach(function(t){t.anyo=t.fecha,t.dia=t.dias}),xRangeRMIN.domain([d3.min(datosRMIN,function(t){return t.anyo}),d3.max(datosRMIN,function(t){return t.anyo})]),yRangeRMIN.domain([0,d3.max(datosRMIN,function(t){return t.dia})]),svgRMIN.append("g").attr("class","xAxis").attr("transform","translate(0,400)").call(xAxisRMIN),svgRMIN.append("g").attr("class","yAxis").attr("transform","translate(30, 0)").call(yAxisRMIN),svgRMIN.selectAll("rect").data(datosRMIN).enter().append("rect").attr("class","barra").attr("width",widthRMIN/datosRMIN.length-barPadding).on("mouseover",function(t){div.transition(),div.style("opacity",1).html('<p class="tooltipHeladas">'+t.anyo+'<p/><p class="tooltipHeladas">'+t.dia+"<p/>").style("left",d3.event.pageX-50+"px").style("top",d3.event.pageY-100+"px")}).on("mouseout",function(t){div.transition().duration(200).style("opacity",0)}).attr("fill",function(t,a){return colorsRMIN(a)}).attr("x",function(t){return xRangeRMIN(t.anyo)}).attr("y",function(t){return yRangeRMIN(t.dias)}).attr("height",function(t){return heightRMIN-yRangeRMIN(t.dias)})}),d3.select(window).on("resize",function(){resize(),resizeT(),resizeRM(),resizeRMIN()});