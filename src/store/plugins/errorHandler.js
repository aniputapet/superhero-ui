export default ({ dispatch }) => {
  const handlerBody = async (error) => {
    dispatch('modals/open', {
      name: 'error',
      error,
    });
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
