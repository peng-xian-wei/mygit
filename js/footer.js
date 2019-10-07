
var li= document.getElementById("footer").getElementsByTagName("li");
var imgter= document.getElementById("footer").getElementsByTagName("img");
var page1=document.getElementById("page1");
var page2=document.getElementById("page2");
var page3=document.getElementById("page3");
var page4=document.getElementById("page4");
var top_title=document.getElementById("top_label");
var lab=document.getElementById("footer").getElementsByTagName("span");
	function page(){
		page1.className="show";
		page2.className="hidden";
		page3.className="hidden";
		page4.className="hidden";
		
	}
	page();
	

	imgter[0].onmouseover=function(){
			imgter[0].src="../images/tuijian2.gif";
			imgter[1].src="../images/dianying1.gif";
			imgter[2].src="../images/faxian1.gif";
			imgter[3].src="../images/wode1.gif";
			
			top_title.innerHTML=lab[0].innerHTML;
			page();
			
			
	};
	imgter[1].onmouseover=function(){
		imgter[0].src="../images/tuijian1.gif";
		imgter[1].src="../images/dianying2.gif";
		imgter[2].src="../images/faxian1.gif";
		imgter[3].src="../images/wode1.gif";
		
		page1.className="hidden";
		page2.className="show";
		page3.className="hidden";
		page4.className="hidden";
		top_title.innerHTML=lab[1].innerHTML;
    };
    imgter[2].onmouseover=function(){
    	imgter[0].src="../images/tuijian1.gif";
    	imgter[1].src="../images/dianying1.gif";
    	imgter[2].src="../images/faxian2.gif";
    	imgter[3].src="../images/wode1.gif";
    	
    	page1.className="hidden";
		page2.className="hidden";
		page3.className="show";
		page4.className="hidden";
		top_title.innerHTML=lab[2].innerHTML;
    };
    imgter[3].onmouseover=function(){
    	imgter[0].src="../images/tuijian1.gif";
    	imgter[1].src="../images/dianying1.gif";
	    imgter[2].src="../images/faxian1.gif";
	    imgter[3].src="../images/wode2.gif";
	    
	    page1.className="hidden";
		page2.className="hidden";
		page3.className="hidden";
		page4.className="show";
		top_title.innerHTML=lab[3].innerHTML;
    };
