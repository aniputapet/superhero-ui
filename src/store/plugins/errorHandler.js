export default ({ dispatch }) => {
  const errors = [];
  let invoke = true;

  const handlerBody = async (error) => {
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
    handlerBody(combined);
  });
  window.onerror = (message, source, line, col, error) => {
    const combined = { message, stack: `${source} ${line}:${col}`, info: error };
    handlerBody(combined);
  };
};
