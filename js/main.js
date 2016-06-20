var buttonArrow = document.getElementById('button-press');

var slide1 = document.getElementById('slide-1'),
    slide2= document.getElementById('slide-2');
var defaultState = true;


buttonArrow.onclick = function() {
    slideMove(defaultState, changeState(this, defaultState));

};


function slideMove(defaultDir, callback) {
  if (defaultDir) {
    addClass(slide1, 'left');
  } else {
    removeClass(slide1, 'left');
  }

  defaultState = !defaultDir;

  callback;
};

function changeState(buttonWrapper, state) {

  if (state) {
    addClass(buttonWrapper, 'direction-left');
  } else {
    removeClass(buttonWrapper, 'direction-left');
  }
};

function addClass(el, cssClass) {
  if (el.classList)
    el.classList.add(cssClass);
  else
    el.className += ' ' + cssClass;
};

function hasClass(el, cssClass) {
  if (el.classList)
    el.classList.contains(cssClass);
  else
  new RegExp('(^| )' + cssClass + '( |$)', 'gi').test(el.cssClass);
};

function removeClass(el, cssClass) {
  if (el.classList)
    el.classList.remove(cssClass);
  else
    el.cssClass = el.cssClass.replace(new RegExp('(^|\\b)' + cssClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
