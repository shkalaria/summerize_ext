chrome.runtime.onMessage.addListener(
 function(request, sender) {
  var color = request.color;

  var divs = document.querySelectorAll("div");
  if(divs.length === 0) {
        alert("There are no any divs in the page.");
    } else {
        for(var i=0; i<divs.length; i++) {
            divs[i].style.backgroundColor = color;
            //divs[i].innerHTML = "";
        }
    }

/*
    var all = document.getElementsByTagName("div");
    var searchValue=config.toString().split(',');
    alert('Example:' + searchValue[0]);
    for(j=0; j < searchValue.length; j++) {
        for(i=0; i < all.length; i++) {
            if(all[i].innerHTML.indexOf(searchValue[j]) > -1){
            all[i].innerHTML = ""
            }
        }
    }
*/

});