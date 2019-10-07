  
        
        var imgs=document.getElementById("imgs").getElementsByTagName("img");
        var spans=document.getElementById("spans").getElementsByTagName("li");
        var num=1,index;
        for(var i=0;i<spans.length;i++){
                 spans[i].index=i;
                 spans[i].onmouseover=function(){
                         for(var j=0;j<spans.length;j++){
                                imgs[j].className="hidden";
                                spans[j].className="";
                              }
                          imgs[this.index].className="show";
                          spans[this.index].className="on";
                          clearInterval(time);
                     };
            }
       
        function action(){
            imgs[0].src="../images/"+num+".jpg";
            for(var j=0;j<spans.length;j++){
             	 spans[j].className="";
                }
            spans[num-1].className="on";
            num++;
            if(num>5){
                 num=1;
                }
       
            }
    var time=setInterval("action()",2000);
