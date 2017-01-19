module.exports = () => {
  if (process.env.NODE_ENV === 'development') {
    const installExtension = require('electron-devtools-installer').default;
    const {
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require('electron-devtools-installer');

    /* eslint-disable no-console */
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
    /* eslint-enable no-console */
  }
};
