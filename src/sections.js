const SectionsSortingKey = 'FORESTRY_DESKTOP_ENHANCER::SECTIONS::SORTING';

function isReady() {
  return document.querySelector('.container.list > span');
}

function apply() {
  const lastSelected = localStorage.getItem(SectionsSortingKey) || '2';
  const option = document.querySelector(`.container.list > span > span:nth-child(${lastSelected})`);

  if (!option.classList.contains('active'))
    option.click();

  ['2', '3'].forEach(i => {
    document.querySelector(`.container.list > span > span:nth-child(${i})`)
      .addEventListener('click', () => {
        localStorage.setItem(SectionsSortingKey, `${i}`);
      }, false);
  });
}

export {
  isReady,
  apply,
};
