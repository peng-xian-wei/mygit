var label=document.getElementById("title2").getElementsByTagName("label");
var list1=document.getElementById("content1");
var list2=document.getElementById("content2");
//
window.onload=function(){
	
	list2.style.display="none";
	label[1].onclick=function(){
		label[1].className="label";
		label[0].className="";
		list1.style.display="none";
		list2.style.display="block";
	};
	label[0].onclick=function(){
		label[0].className="label";
		label[1].className="";
		list2.style.display="none";
		list1.style.display="block";
	};
	
};



