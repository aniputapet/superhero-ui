export default ({ dispatch }) => {
  const errors = [];
  let invoke = true;
  const handlerBody = async (error) => {
    if (error) errors.unshift(error);
    if (invoke && errors.length !== 0) {
      invoke = false;
      await dispatch('modals/open', {
        name: 'error',
        error: errors.shift(),
      });
      invoke = true;
      handlerBody();
    }
  };

  const handlerBodyLoop = async (error) => {
    errors.unshift(error);
    if (!invoke) return;
    invoke = false;
    while (errors.length) {
      // eslint-disable-next-line no-await-in-loop
      await dispatch('modals/open', {
        name: 'error',
        error: errors.shift(),
      });
    }
    invoke = true;
  };

  window.addEventListener('unhandledrejection', (error) => {
    const combined = { message: error.reason, stack: error.reason.stack, info: error };
    handlerBodyLoop(combined);
  });
  window.onerror = (message, source, line, col, error) => {
    const combined = { message, stack: `${source} ${line}:${col}`, info: error };
    handlerBodyLoop(combined);
  };
};
