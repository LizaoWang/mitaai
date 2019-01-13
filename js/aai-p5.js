let t=0;let buf=10;var aaiYellow;function setup(){var canvas=createCanvas(525,175);canvas.parent('aai-p5');aaiYellow=color(245,200,58,255)}
function draw(){background(255);for(var i=0;i<9;i++){var t2=t;if(i>2&&i<6)
t2-=0.8;else if(i>2)
t2-=1.6;var addy=50*i;var triHeight=50;var flip=(i%2*-2)+1;var x1,y1,x2,y2,x3,y3;fill(aaiYellow);stroke(aaiYellow);if(i>2)addy+=25;if(i>5)addy+=25;x1=60-(sin(t2)*flip+1)*25+addy;y1=buf;x2=buf+addy;y2=buf+(sin(t2)*flip+1)*25;x3=60+addy;y3=60;if(i!=0&&i!=2&&i!=3&&i!=5)
triangle(x1,y1,x2,y2,x3,y3);if(i!=1&&i!=4)
triangle(x1,y1+(triHeight*2),x2,y2+(triHeight*2),x3,y3+(triHeight*2));x1=60-(sin(t2)*flip*-1+1)*25+addy;y1=buf+triHeight;x2=buf+addy;y2=buf+(sin(t2)*flip*-1+1)*25+triHeight;x3=60+addy;y3=60+triHeight;if(i!=6&&i!=8&&i!=0&&i!=3)
triangle(x1,y1,x2,y2,x3,y3);fill('black');stroke('black');x1=buf+(sin(t2)*flip+1)*25+addy;y1=buf;x2=buf+addy;y2=60;x3=60+addy;y3=buf+(sin(t2)*flip+1)*25;if(i!=0&&i!=2&&i!=3&&i!=5)
triangle(x1,y1,x2,y2,x3,y3);if(i!=1&&i!=4)
triangle(x1,y1+(triHeight*2),x2,y2+(triHeight*2),x3,y3+(triHeight*2));x1=buf+(sin(t2)*flip*-1+1)*25+addy;y1=buf+triHeight;x2=buf+addy;y2=60+triHeight;x3=60+addy;y3=buf+(sin(t2)*flip*-1+1)*25+triHeight;if(i!=6&&i!=8&&i!=2&&i!=5)
triangle(x1,y1,x2,y2,x3,y3)}
t+=0.02}
