export default ({ dispatch }) => {
  const errors = [];
  const handlerBody = async (error) => {
    try {
      if (errors.lenght === 0) {
        console.log({ errors });
        dispatch('modals/open', {
          name: 'error',
          error,
        });
      }
      errors.push(error);
    } catch {
      errors.pop();
      console.log({ errors });
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
