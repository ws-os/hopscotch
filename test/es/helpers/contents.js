function verifyStepNumber(callout, expectdValue) {
  let stepNumberEl = callout.el.querySelector('.hopscotch-bubble-number');
  if (typeof expectdValue === 'undefined') {
    expect(stepNumberEl).toEqual(expectdValue);
  } else {
    expect(stepNumberEl).toBeDefined();
    expect(stepNumberEl.innerHTML).toEqual(expectdValue);
  }
}

function verifyButton(callout, selector, expectedIsPresent) {
  let buttonEl = callout.el.querySelector(selector);
  let actualExists = !buttonEl ? ' to not exist' : ' to exists';
  let expectedExists = !expectedIsPresent ? ' to not exist' : ' to exists';
  expect(selector + actualExists).toEqual(selector + expectedExists);
}

function verifyNextButton(callout, expectedIsPresent) {
  verifyButton(callout, '.hopscotch-nav-button.next', expectedIsPresent);
}

function verifyPrevButton(callout, expectedIsPresent) {
  verifyButton(callout, '.hopscotch-nav-button.prev', expectedIsPresent);
}

let ContentsTestUtils = {
  verifyStepNumber,
  verifyNextButton,
  verifyPrevButton
};

export default ContentsTestUtils;