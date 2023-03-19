//슬라이드
let curPos = 0;
let postion = 0;
let start_x, end_x;
const IMAGE_WIDTH = 100;
const swipe = document.querySelector(".swipe");
//
const box = document.getElementsByClassName("box");
console.log(box.offsetWidth);
//

swipe.addEventListener("touchstart", touch_start);
swipe.addEventListener("touchend", touch_end);

function prev() {
  if (curPos > 0) {
    postion += IMAGE_WIDTH;
    swipe.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
}
function next() {
  if (curPos < 16) {
    postion -= IMAGE_WIDTH;
    swipe.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
}

function touch_start(event) {
  start_x = event.touches[0].pageX;
}

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if (start_x > end_x) {
    next();
  } else {
    prev();
  }
}
//모바일 하단탭 제외 100%
