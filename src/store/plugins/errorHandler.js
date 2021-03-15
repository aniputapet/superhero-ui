export default ({ dispatch }) => {
  const errors = [];
  let invoke = true;
  const handlerBody = async (error) => {
    if (error) errors.unshift(error);
    if (invoke && errors.length !== 0) {
      invoke = false;
      await dispatch('modals/open', {
        name: 'error',
        error: errors[0],
      });
      errors.shift();
      invoke = true;
      handlerBody();
    }
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
