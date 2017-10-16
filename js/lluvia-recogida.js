var barPadding=2,datosRLLUMIN=[],margin={top:50,right:50,bottom:50,left:110},widthRLLUMIN=1200-margin.left-margin.right,heightRLLUMIN=500-margin.top-margin.bottom,svgRLLUMIN=d3.select(".recogida-lluvias-chart-container").append("svg").attr("class","chart-lluvias-recogida").attr("width",widthRLLUMIN+margin.left+margin.right).attr("height",heightRLLUMIN+margin.top+margin.bottom).append("g").attr("transform","translate("+(margin.left-margin.right)+","+margin.top+")"),x=d3.scaleTime().domain([1941,2017]).range([0,widthRLLUMIN]),y=d3.scaleLinear().domain([0,700]).range([heightRLLUMIN,0]),xAxisRLLUMIN=d3.axisBottom(x).tickFormat(d3.format("d")).ticks(10),yAxisRLLUMIN=d3.axisLeft(y).tickSize(16-widthLLUMIN).ticks(5),valueline=d3.line().x(function(a){return x(a.fecha)}).y(function(a){return y(a.precipitacion_anual)});d3.csv("csv/dias-de-lluvia.csv",function(a,t){(datosRLLUMIN=t).forEach(function(a){a.anual=a.fecha,a.dia=a.precipitacion_anual}),svgRLLUMIN.append("path").data([datosRLLUMIN]).attr("class","line").attr("d",valueline),svgRLLUMIN.append("g").attr("transform","translate(0,"+heightRLLUMIN+")").call(xAxisRLLUMIN),svgRLLUMIN.append("g").call(yAxisRLLUMIN)});