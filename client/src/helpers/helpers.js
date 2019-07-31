const crypto = require("crypto");

const currentYPosition = () => {
  // Firefox, Chrome, Opera, Safari
  if (window.self.pageYOffset) return window.self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

const elmYPosition = eID => {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop - 50;
  var node = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
  } return y;
}

const scrollToElement = eID => {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
      window.scrollTo(0, stopY); return;
  }
  var speed = Math.round(distance / 80);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
          setTimeout('window.scrollTo(0, '+ leapY +')', timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
  }
  for ( var j=startY; j>stopY; j-=step ) {
      setTimeout('window.scrollTo(0, '+ leapY +')', timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
}

const hash = data => {
    return crypto.createHash("sha1").update(data, "binary").digest("hex");
}

export default {
  scrollToElement,
  hash
}