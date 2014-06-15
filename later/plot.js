/*完整作圖javascript*/
function ass() {
    //Create graphics object from the graphics div 
    var gr = new jxGraphics(document.getElementById('graphics'));

    //筆 Define pens to draw outline of the shapes
    var penRed = new jxPen(new jxColor('red'), '5px');
    var penGreen = new jxPen(new jxColor('green'), '2px');
    var penWhite = new jxPen(new jxColor('white'), '3px');
	var penBlue = new jxPen(new jxColor('blue'), '5px');
    //筆刷 Define brushes to fill the shapes 
    var brushYellow = new jxBrush(new jxColor('yellow'));
    brushYellow.fillType = 'linear-gradient';

    var brushBlue = new jxBrush(new jxColor('blue'));
    brushBlue.fillType = 'linear-gradient';

    var brushRed = new jxBrush(new jxColor('red'));
    brushRed.fillType = 'linear-gradient';

    var brushBlack = new jxBrush(new jxColor('black'));


    //畫線
    //Create jsGraphics object
    var gr = new jxGraphics(document.getElementById("graphics"));

    //Create jxColor object
    var col = new jxColor("red");

    //Create jxPen object
    var pen = new jxPen(col, '2px');

    //Draw a Line between 2 points
    //Define end points to draw line
    var pt1 = new jxPoint(20, 30);
    var pt2 = new jxPoint(120, 230);

    //Create line object  
    var line = new jxLine(pt1, pt2, pen);

    //Draw the line on the graphics
    line.draw(gr);

    //曲線 Draw smooth curve passing through the given points 
    var curvePoints = [new jxPoint(531, 30), new jxPoint(17, 158), new jxPoint(569, 276), new jxPoint(401, 135)];
    var curve = new jxClosedCurve(curvePoints, penRed, brushYellow);
    curve.draw(gr);

    //寫字 Define font to draw the text 
    var font = new jxFont('impact');
    font.size = '40px';
    //Draw the color filled text string at specified point and angle 
    var text = new jxText(new jxPoint(75, 165), 'Welcome to jsDraw2DX!', font, penGreen, brushBlue, 347);
    text.draw(gr);

    //多邊形 Draw the filled polygon with specified vertices 
    var polypoints = [new jxPoint(550, 200), new jxPoint(550, 80), new jxPoint(610, 10), new jxPoint(800, 10), new jxPoint(860, 80), new jxPoint(860, 200), new jxPoint(800, 270), new jxPoint(610, 270)];
    var poly = new jxPolygon(polypoints, penGreen, brushBlack);
    poly.draw(gr);

    //橢圓 Draw ellipse with specified center point, height and width 
    var el = new jxEllipse(new jxPoint(710, 140), 200, 100, penWhite);
    el.draw(gr);

    //畫派(點，寬，高，開始角度，結束角度) Draw filled elliptical arc sectors with specified center point, height, width, start & arc angle. 
    var pie = new jxArcSector(new jxPoint(710, 140), 200, 100, 30, 70, penWhite, brushBlue);
    pie.draw(gr);
    var pie1 = new jxArcSector(new jxPoint(710, 140), 200, 100, 100, 290, penWhite, brushRed);
    pie1.draw(gr);

    //寫字 Modify font object properties 
    font.size = '20px';
    font.family = 'arial';
    font.style = 'italic';

    //改變筆粗 Change pen width of white pen
    penWhite.width = '2px';

    //寫字 Draw text strings at specified points with changed font 
    var text1 = new jxText(new jxPoint(700, 50), 'Polygon', font, penWhite);
    text1.draw(gr);

    var text2 = new jxText(new jxPoint(600, 80), 'Ellipse', font, penWhite);
    text2.draw(gr);

    var text2 = new jxText(new jxPoint(650, 240), 'Arc Sector', font, penWhite);
    text2.draw(gr);

    //畫數學圖 Draw function graph (plot) with specified function equation 
    var sinfn = new jxFunctionGraph('50*sin(x/10) + 220', 0, 300, penGreen);
    sinfn.draw(gr);

    //Again modify font object properties 
    font.size = '12px';
    font.style = 'normal';
    penGreen.width = '1px';

    //Draw text string at specified point 
    var text3 = new jxText(new jxPoint(300, 220), 'y=50*sin(x/10)+220', font, penGreen);
    text3.draw(gr);
} //end ass


//--------------------------------------------
//筆&筆刷 Define pens to draw outline of the shapes

	var gr = new jxGraphics(document.getElementById('graphics'));

	var penRed = new jxPen(new jxColor('red'), '5px');
	var penGreen = new jxPen(new jxColor('green'), '2px');
	var penBlackthin = new jxPen(new jxColor('black'), '2.5px');
	var penBlack = new jxPen(new jxColor('black'), '3px');
	var penBlue = new jxPen(new jxColor('blue'), '5px');
	var penBluethin = new jxPen(new jxColor('blue'), '3px');
	var penWhitethin = new jxPen(new jxColor('white'), '3px');

	//筆刷 Define brushes to fill the shapes 
	var brushWhite = new jxBrush(new jxColor('white'));
	brushWhite.fillType = 'spoil';

	var brushBlue = new jxBrush(new jxColor('blue'));
	brushBlue.fillType = 'linear-gradient';

	var brushRed = new jxBrush(new jxColor('red'));
	brushRed.fillType = 'linear-gradient';

	var brushBlack = new jxBrush(new jxColor('black'));

	var font = new jxFont('impact');
	font.style = 'normal';
    font.size = '30px';


//畫紅線
function line(x1, y1, x2, y2) {
    var line = new jxLine(new jxPoint(x1, y1), new jxPoint(x2, y2), penRed);
    line.draw(gr);
}


//描紅點
function dot(x, y) {
    var cr = new jxCircle(new jxPoint(x, y), 5, penRed, brushRed);
    cr.draw(gr);
}


//判斷
function pp() {
    //吃json
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "001.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();


    //畫畫
    //連線
    for (var i = 0; json["data"][i] != null; i++) {
        if (json["data"][i].category == "heartbeat") {
            continue;
        }

        if (i != 0) {
            if (json["data"][i - 1].category == "heartbeat") {
                line(json["data"][i - 2].values.frame.avg.x, json["data"][i - 2].values.frame.avg.y, json["data"][i].values.frame.avg.x, json["data"][i].values.frame.avg.y);
            } else {
                line(json["data"][i - 1].values.frame.avg.x, json["data"][i - 1].values.frame.avg.y, json["data"][i].values.frame.avg.x, json["data"][i].values.frame.avg.y);
            }
        }

    }
    //描點
    for (var i = 0; json["data"][i] != null; i++) {
        if (json["data"][i].category == "heartbeat") {
            continue;
        }
        dot(json["data"][i].values.frame.avg.x, json["data"][i].values.frame.avg.y);

    }
}

//畫大圓
function big () {
	//吃json
	var json = (function () {
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': "001.json",
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
		return json;
	})();

	//畫畫
	var teamY = [];//大圈的X.Y值
	var teamX = [];
	var gaze = [];//大圈的集合
	var cnt=0;//team
	var gc=0;//gaze

	for (var i = 0; json["data"][i] != null; i++) {	

    	//內涵heartbeat-----------------------------------------------------------------
    	if (json["data"][i].category == "heartbeat") { //當行遇見heatbeat
    		continue;
    	}
    	if (i != 0) {
    		if (json["data"][i - 1].category == "heartbeat") {                
    			if((Math.pow((
    				Math.pow( ( json["data"][i-2].values.frame.avg.x - json["data"][i].values.frame.avg.x ), 2) +
    				Math.pow( ( json["data"][i-2].values.frame.avg.y - json["data"][i].values.frame.avg.y ), 2)
/*改距離*/    				) ,0.5) )< 10){
    				teamX[cnt] = json["data"][i-2].values.frame.avg.x;
    			teamX[cnt+1] = json["data"][i].values.frame.avg.x;
    			teamY[cnt] = json["data"][i-2].values.frame.avg.y;
    			teamY[cnt+1] = json["data"][i].values.frame.avg.y;
    			cnt++;            		        		
    			}	

	    		else{                	             	         		
	    			if(cnt==0){
	    				continue;
	    			}            
	    			else{    	
	    				var R=Math.round((teamX.length)/2);
	    				console.log("teamX.length="+teamX.length);
	    				var cr1 = new jxCircle(new jxPoint(teamX[R], teamY[R]), (cnt*2), penBlack, brushBlue);    				
	    				cr1.draw(gr);
	    				console.log(teamX[R]+','+teamY[R]+','+gc);               	
	    				gaze[gc] = new jxPoint(teamX[R], teamY[R]);                	   
	    				if(gc>0){
	    					var line1 = new jxLine(gaze[gc-1], gaze[gc], penWhitethin);
	    					line1.draw(gr);
	    				}


	    				var text2 = new jxText(new jxPoint(teamX[R], teamY[R]), gc, font, penBlackthin, brushWhite);
	    				text2.draw(gr);

	    				gc++;  

	    				cnt=0;
	    				teamX.length=0;
	    				teamY.length=0;
	    			}

	    		}
    		} 
            //------------------------------------------------------------------------------

 			//不涵heartbeat-----------------------------------------------------------------
 			else {
 				if((Math.pow((
 					Math.pow( ( json["data"][i-1].values.frame.avg.x - json["data"][i].values.frame.avg.x ), 2) +
 					Math.pow( ( json["data"][i-1].values.frame.avg.y - json["data"][i].values.frame.avg.y ), 2)
 					) ,0.5)) <100){
 					teamX[cnt] = json["data"][i-1].values.frame.avg.x;
 				teamX[cnt+1] = json["data"][i].values.frame.avg.x;
 				teamY[cnt] = json["data"][i-1].values.frame.avg.y;
 				teamY[cnt+1] = json["data"][i].values.frame.avg.y;
 				cnt++;
 				}
	 			else{

	 				if(cnt==0){
	 					continue;
	 				}            
	 				else{    	
	 					var R=Math.round((teamX.length)/2);
	 					console.log("teamX.length="+teamX.length);
	 					var cr1 = new jxCircle(new jxPoint(teamX[R], teamY[R]), (cnt*2), penBlack, brushBlue);    				
	 					cr1.draw(gr);
	 					console.log(teamX[R]+','+teamY[R]+','+gc);               	
	 					gaze[gc] = new jxPoint(teamX[R], teamY[R]);                	   
	 					if(gc>0){
	 						var line1 = new jxLine(gaze[gc-1], gaze[gc], penWhitethin);
	 						line1.draw(gr);
	 					}


	 					var text2 = new jxText(new jxPoint(teamX[R], teamY[R]), gc, font, penBlackthin, brushWhite);
	 					text2.draw(gr);

	 					gc++;  

	 					cnt=0;
	 					teamX.length=0;
	 					teamY.length=0;
	 				}

	 			}
 			}
 		}


 	}

}




