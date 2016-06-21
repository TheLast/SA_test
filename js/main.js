
// Slider variables
let buttonArrow = document.getElementById('button-press');

let slide1 = document.getElementById('slide-1');
let slide2= document.getElementById('slide-2');
let buttonText = document.getElementById('button-text');

let textForward = 'WEITER';
let textBack    = 'ZURUCK';

let defaultState = true;

// Accordion variables
let toggleButtons = document.getElementsByClassName('accordion-toggle');
let i;

// Slider events
buttonArrow.onclick = function() {
    slideMove(defaultState, changeState(this, defaultState));
};

// Accordion events
for (i = 0; i<toggleButtons.length; i++) {
  toggleButtons[i].onclick = function() {
      toggleClass(this, 'show');
      toggleClass(this.nextElementSibling, 'hidden');
  }
}

// Helper functions
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
    buttonText.innerHTML = textBack;
  } else {
    removeClass(buttonWrapper, 'direction-left');
    buttonText.innerHTML = textForward;
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

function toggleClass(el, cssClass) {
  if (el.classList) {
  el.classList.toggle(cssClass);
  } else {
    var classes = el.cssClass.split(' ');
    var existingIndex = classes.indexOf(cssClass);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(cssClass);

    el.cssClass = classes.join(' ');
  }
}
