var background = chrome.extension.getBackgroundPage();
var colors = {
    "-1":"#58bc8a",
    "0":"#ffeb3c",
    "1":"#ff8b66"
};
var featureList = document.getElementById("features");

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs){
    var result = background.results[tabs[0].id];
    var isPhish = background.isPhish[tabs[0].id];
    var legitimatePercent = background.legitimatePercents[tabs[0].id];
    console.log(legitimatePercent)

    for(var key in result){
        var newFeature = document.createElement("li");
        //console.log(key);
        newFeature.textContent = key;
        //newFeature.className = "rounded";
        newFeature.style.backgroundColor=colors[result[key]];
        featureList.appendChild(newFeature);
    }
    
    $("#site_score").text(parseInt(legitimatePercent)+"%");
    if(isPhish) {
        $("#res-circle").css("background", "#ff8b66");
        $("#site_msg").text("Warning!! This URL is not safe");
        document.getElementById('site_msg').style.animation = "unsafe 2s infinite";
        $("#site_score").text(parseInt(legitimatePercent)-20+"%");
    }
});
