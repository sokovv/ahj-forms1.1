/* eslint-disable linebreak-style */
import ToolTripWidget from '../toolTrip';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new ToolTripWidget(container);
  widget.bindToDOM();

  expect(container.innerHTML).toEqual(ToolTripWidget.markup);
});

test('should toolTrip not hide', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new ToolTripWidget(container);

  widget.bindToDOM();

  const pop = container.querySelector(ToolTripWidget.popSelector);
  pop.click();

  const tooltip = container.querySelector(ToolTripWidget.tooltipSelector);

  expect(tooltip.classList.contains('hide')).toEqual(false);
});
