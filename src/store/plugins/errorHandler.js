export default ({ dispatch }) => {
  const errors = [];
  const handlerBody = async (error) => {
    // errors.push(error);
    try {
      // if (errors.lenght === 0) {
        dispatch('modals/open', {
          name: 'error',
          error,
        });
     // }
    } catch {
      // errors.pop();
    }
  };

  window.addEventListener('unhandledrejection', (error) => {
    console.log({ error, stack: error.reason.stack });
    handlerBody(error);
  });

  window.onerror = (message, source, line, col, error) => {
    handlerBody(error);
  };
};
