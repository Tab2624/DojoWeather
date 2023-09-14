function loading(element) {
  alert("Loading weather report...");
}

function removeCookies(idToSelect) {
  var elem = document.querySelector(idToSelect);
  elem.remove();
}

var newArr = [];
function tempConversion(element) {
  var myNodeList = document.querySelectorAll(".tempchange");
  if (element.value == "F°") {
    for (var i = 0; i < myNodeList.length; i++) {
      myNodeList[i].innerText =
        Math.round(myNodeList[i].innerText * 1.8 + 32) + "°";
      newArr.push(myNodeList[i].innerText);
    }
  } else if (element.value == "C°") {
    for (var i = 0; i < newArr.length; i++) {
      myNodeList[i].innerText = Math.round((newArr[i] - 32) / 1.8) + "°";
    }
  }
}
