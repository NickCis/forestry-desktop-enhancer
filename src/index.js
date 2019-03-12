import * as pages from './pages';
import * as sections from './sections';

function wait(isReady, cb, t = 100) {
  let canceled = false;

  function check() {
    if (canceled)
      return;

    if (isReady()) {
      cb();
      return;
    }

    setTimeout(check, t);
  }

  check();

  return {
    cancel: () => (canceled = true),
  };
}

function run(config) {
  const [, section, ...rest] = document.location.hash.split('/');

  if (!config[section])
    return;

  const { isReady, apply } = config[section];

  return wait(isReady, apply);
}

const config = {
  pages,
  sections,
};
let currentWaiting = run(config);

window.addEventListener('popstate', () => {
  if (currentWaiting)
    currentWaiting.cancel();

  currentWaiting = run(config);
}, false);
