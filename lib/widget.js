/**
 * Toggle the visibility of the window
 */
function toggleWidgetState() {
  var rootElem = document.getElementById('SkygearSupportWidget');

  if (rootElem.className === 'SkygearSupportWidget') {
    // The window is closed
    rootElem.className = 'SkygearSupportWidget SkygearSupportWidget--Open';
  } else {
    // The window is open
    rootElem.className = 'SkygearSupportWidget';
  }
}

/**
 * Create a root element to contain all nodes
 */
var rootElem = document.createElement('div');
rootElem.id = 'SkygearSupportWidget';
rootElem.className = 'SkygearSupportWidget';
rootElem.innerHTML = [
  '<div class="Window">',
    '<div class="Window__Title">Got Question about<i class="Window__Title__SkygearLogo"></i>?</div>',
    '<div class="Window__Body">',
      '<a class="Window__Link Window__Link--Forum" href="https://discuss.skygear.io" target="_blank">Ask the questions in our offical support forum</a>',
      '<a class="Window__Link Window__Link--Slack" href="https://slack.skygear.io" target="_blank">Join us at Slack and chat</a></div>',
  '</div>'
].join('');

/**
 * Create a button element
 */
var buttonElem = document.createElement('div');
buttonElem.className = 'Button';
buttonElem.innerHTML = '<i class="Button__Icon Button__Icon"></i>';

/**
 * Bind the toggleWidgetState function to click event of the button
 */
buttonElem.addEventListener('click', toggleWidgetState);

/**
 * Append the button element to root element
 */
rootElem.appendChild(buttonElem);

/**
 * Append the root element to body
 */
document.body.appendChild(rootElem);
