function transfer(){	
	var tablink;
	chrome.tabs.getSelected(null,function(tab) {
	   	tablink = tab.url;
		$("#p1").text("The URL being tested is - "+tablink);

		var xhr=new XMLHttpRequest();
		params="url="+tablink;
		var markup = "url="+tablink+"&html="+document.documentElement.innerHTML;
		xhr.open("POST","http://localhost/main",false);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(markup);
		$("#div1").text(xhr.responseText);
		return xhr.responseText;
	});
}


chrome.tabs.getSelected(null,function(tab) {
   	var tablink = tab.url;
	$("#site_msg").text("This website is safe to use :)"+tablink);
});
