import './pages.css';

function isReady() {
  return document.querySelector('.main-content > div:nth-child(2)');
}

function renderButton() {
  const div = document.createElement('div');
  div.style = `
    width: 28px;
    height: 28px;
    border-radius: calc(28px / 2);
    background: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin-right: 20px;
  `;
  div.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2">
        <path d="M0 22h12M0 12h12M0 17h12M0 7h12M0 2h12m7 0v8m4-5l-3.294-3.294a.996.996 0 0 0-1.412 0L15 5m4 17v-8m4 5l-3.294 3.294a.996.996 0 0 1-1.412 0L15 19" fill="none" stroke="currentcolor" stroke-width="2"></path>
        <circle cx="12" cy="12" r="2"></circle>
      </g>
    </svg>
  `;

  return div;
}

function renderPlaceholder() {
  const div = document.createElement('div');
  div.style = 'flex: 1;';
  return div;
}

function apply() {
  const button = renderButton();

  button.addEventListener('click', () => {
    const fmtColumn = document.querySelector('.main-content > div:nth-child(2) > div:first-child');
    fmtColumn.style.display = fmtColumn.style.display === 'none' ? '' : 'none';
  }, false);

  const bar = document.querySelector('.main-content > div:first-child');

  bar.insertBefore(button, bar.children[0]);
  bar.insertBefore(renderPlaceholder(), bar.children[bar.children.length-1]);
}

export {
  isReady,
  apply,
};
