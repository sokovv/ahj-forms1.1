/* eslint-disable linebreak-style */
// import { createPopper } from '@popperjs/core'; Для библиотеки popperjs

export default class ToolTripWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
      <div id="pop" aria-describedby="tooltip">Нажми на кнопку получишь результат</div>
      <div id="tooltip" class="hide" role="tooltip" '="" style="top: 0px; left: 0px;">
          <div id="tooltripTop">Popover – это всплывающее окно для показа дополнительного контента</div>
          <div id="tooltripBot">Этот элемент ещё называют всплывающим информером</div>
          <div id="arrow" data-popper-arrow="" style="left: 0px;"></div>
      </div>
  `;
  }

  static get popSelector() {
    return '#pop';
  }

  static get tooltipSelector() {
    return '#tooltip';
  }

  // eslint-disable-next-line class-methods-use-this
  onSubmit(evt) {
    evt.preventDefault();
    const tooltip = document.querySelector('#tooltip');
    tooltip.classList.toggle('hide');
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const pop = this.parentEl.querySelector(this.constructor.popSelector);
    const tooltip = this.parentEl.querySelector('#tooltip');
    const arrow = this.parentEl.querySelector('#arrow');
    tooltip.style.top = `${pop.offsetTop - tooltip.offsetHeight - arrow.offsetHeight / 2}px`;
    tooltip.style.left = `${pop.offsetLeft}px`;
    arrow.style.left = `${tooltip.offsetWidth / 2 - arrow.offsetWidth}px`;
    pop.addEventListener('click', (evt) => this.onSubmit(evt));
  }
}

// Для библиотеки Popperjs
// createPopper(pop, tooltip, {
//   placement: 'top',
//   modifiers: [
//     {
//       name: 'offset',
//       options: {
//         offset: [0, 8],
//       },
//     },
//   ],
// });
