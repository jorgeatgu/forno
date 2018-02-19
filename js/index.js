function getYear(a){return a.split("-")[2]}function update(){var a=d3.select("#updateButtonDay").property("value"),t=d3.select("#updateButtonMonth").property("value");a<10&&(a=("0"+a).slice(-2)),t<10&&(t=("0"+t).slice(-2));var i=a+"-"+t,e=new RegExp("^.*"+i+".*","gi");d3.csv("csv/temperaturas.csv",function(a,t){(dataFiltered=t.filter(function(a){return String(a.fecha).match(e)})).forEach(function(a){a.fecha=a.fecha,a.maxima=+a.maxima,a.minima=+a.minima,a.year=getYear(a.fecha)}),maxTemp=d3.max(dataFiltered,function(a){return a.maxima}),minTemp=d3.min(dataFiltered,function(a){return a.maxima}),xRange.domain([d3.min(dataFiltered,function(a){return a.year}),d3.max(dataFiltered,function(a){return a.year})]),yRange.domain([d3.min(dataFiltered,function(a){return a.maxima}),d3.max(dataFiltered,function(a){return a.maxima})]),d3.select(".yAxis").transition().duration(1e3).call(yAxis),d3.select(".xAxis").transition().duration(1e3).call(xAxis),d3.select(".legend-top").text("Temperaturas máximas");var i=svg.selectAll("circle").data(dataFiltered);i.transition().duration(1e3).attr("r",function(a){return a.maxima===maxTemp?12:a.maxima===minTemp?12:a.maxima>=35?11:a.maxima>=30?10:a.maxima>=25?9:a.maxima>=20?8:a.maxima>=15?7:6}).attr("cx",function(a){return xRange(a.year)}).attr("cy",function(a){return yRange(a.maxima)}),i.style("fill",function(a){return a.maxima===maxTemp?"#70284a":a.maxima===minTemp?"#045275":a.maxima>=35?"#9c3f5d":a.maxima>=30?"#c8586c":a.maxima>=25?"#dc7176":a.maxima>=20?"#ee8a82":a.maxima>=15?"#ee8a82":a.maxima>=10?"#4cc8a3":a.maxima>=7?"#38b2a3":a.maxima>=3?"#2c98a0":(a.maxima,"#257d98")}),i.on("mouseover",function(a){div.transition(),div.style("opacity",1).html('<p class="tooltipYear">'+a.year+'<p/><p class="tooltipTemp">'+a.maxima+"º<p/>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){div.transition().duration(200).style("opacity",0)}),i.exit().remove()})}function updateMin(){var a=d3.select("#updateButtonDay").property("value"),t=d3.select("#updateButtonMonth").property("value");a<10&&(a=("0"+a).slice(-2)),t<10&&(t=("0"+t).slice(-2));var i=a+"-"+t,e=new RegExp("^.*"+i+".*","gi");d3.csv("csv/temperaturas.csv",function(a,t){dataFilterMin=t.filter(function(a){return String(a.fecha).match(e)}),dataFilterMin.forEach(function(a){a.fecha=a.fecha,a.maxima=+a.maxima,a.minima=+a.minima,a.year=getYear(a.fecha)}),maxTemp=d3.max(dataFilterMin,function(a){return a.minima}),minTemp=d3.min(dataFilterMin,function(a){return a.minima}),xRange.domain([d3.min(dataFilterMin,function(a){return a.year}),d3.max(dataFilterMin,function(a){return a.year})]),yRange.domain([d3.min(dataFilterMin,function(a){return a.minima}),d3.max(dataFilterMin,function(a){return a.minima})]);d3.scaleLinear().domain([0,25]).range(["#b0f2bc","#89e8ac","#67dba5","#4cc8a3","#38b2a3","#2c98a0","#257d98"]);d3.select(".yAxis").transition().duration(1e3).call(yAxis),d3.select(".xAxis").transition().duration(1e3).call(xAxis),d3.select(".legend-top").text("Temperaturas mínimas");var i=svg.selectAll("circle").data(dataFilterMin);i.transition().duration(1e3).attr("r",function(a){return a.minima===maxTemp?16:a.minima>=20?11:a.minima>=20?10:a.minima>=15?9:a.minima>=10?8:a.minima>=5?7:a.minima>=0?6:a.minima<0?4:void 0}).attr("cx",function(a){return xRange(a.year)}).attr("cy",function(a){return yRange(a.minima)}),i.style("fill",function(a){return a.minima===maxTemp?"#70284a":a.minima===minTemp?"#045275":a.minima>=20?"#b0f2bc":a.minima>=18?"#89e8ac":a.minima>=14?"#67dba5":a.minima>=10?"#4cc8a3":a.minima>=5?"#38b2a3":a.minima>=0?"#2c98a0":a.minima<0?"#257d98":void 0}),i.on("mouseover",function(a){div.transition(),div.style("opacity",1).html('<p class="tooltipYear">'+a.year+'<p/><p class="tooltipTemp">'+a.minima+"º<p/>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){div.transition().duration(200).style("opacity",0)}),i.exit().remove()})}var dataFiltered,xRange,yRange,xAxis,yAxis,temp="ºC",barPadding=2,dedicatoria="Dedicado a Maria del Carmen Tobajas Urieta y Agustín Aznar Gracia. Gracias por todo.";console.log(dedicatoria);var margin={top:50,right:50,bottom:50,left:110},width=1200-margin.left-margin.right,height=500-margin.top-margin.bottom,color=d3.scaleLinear().domain([10,35]).range(["#d39c83","#e34f6f","#7c1d6f"]),div=d3.select(".grafica-temp").append("div").attr("class","tooltip").style("opacity",0),svg=d3.select(".grafica-temp").append("svg").attr("class","chart-temp").attr("viewBox","0 0 "+(width+margin.left+margin.right)+" "+(height+margin.top+margin.bottom)).append("g").attr("transform","translate("+(margin.left-margin.right)+","+margin.top+")"),xRange=d3.scaleLinear().range([30,width]),yRange=d3.scaleLinear().range([height,-20]),xAxis=d3.axisBottom(xRange).tickPadding(15).tickFormat(d3.format("d")).tickSize(-height).ticks(20),yAxis=d3.axisLeft(yRange).tickPadding(10).tickFormat(function(a){return a+temp}).tickSize(30-width).ticks(6);d3.csv("csv/temperaturas.csv",function(a,t){(dataFiltered=t.filter(function(a){return String(a.fecha).match(/02-01/)})).forEach(function(a){a.fecha=a.fecha,a.maxima=+a.maxima,a.minima=+a.minima,a.year=getYear(a.fecha)}),maxTemp=d3.max(dataFiltered,function(a){return a.maxima}),minTemp=d3.min(dataFiltered,function(a){return a.maxima}),xRange.domain([d3.min(dataFiltered,function(a){return a.year}),d3.max(dataFiltered,function(a){return a.year})]),yRange.domain([d3.min(dataFiltered,function(a){return a.maxima}),d3.max(dataFiltered,function(a){return a.maxima})]),svg.append("g").attr("class","xAxis").attr("transform","translate(0,400)").transition().duration(1e3).call(xAxis),svg.append("g").attr("class","yAxis").attr("transform","translate(30, 0)").transition().duration(1e3).call(yAxis),svg.append("text").attr("class","legend-top").attr("transform","rotate(0)").attr("y",-20).attr("x",190).style("text-anchor","end").text("Temperaturas máximas"),svg.selectAll("dot").data(dataFiltered).enter().append("circle").attr("class","circles").on("mouseover",function(a){div.transition(),div.style("opacity",1).html('<p class="tooltipYear">'+a.year+'<p/><p class="tooltipTemp">'+a.maxima+"º<p/>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){div.transition().duration(200).style("opacity",0)}).transition().duration(1e3).attr("cx",function(a){return xRange(a.year)}).attr("cy",function(a){return yRange(a.maxima)}).attr("r",function(a){return a.maxima===maxTemp?12:a.maxima===minTemp?6:a.maxima>=35?11:a.maxima>=30?10:a.maxima>=25?9:a.maxima>=20?8:a.maxima>=15?7:6}).style("fill",function(a){return a.maxima===maxTemp?"#70284a":a.maxima===minTemp?"#045275":a.maxima>=35?"#9c3f5d":a.maxima>=30?"#c8586c":a.maxima>=25?"#dc7176":a.maxima>=20?"#ee8a82":a.maxima>=15?"#ee8a82":a.maxima>=10?"#4cc8a3":a.maxima>=7?"#38b2a3":a.maxima>=3?"#2c98a0":(a.maxima,"#257d98")})});