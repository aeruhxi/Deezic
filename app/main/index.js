const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const installDevtools = require('./installDevtools')

let mainWin = null

const getMainURL = () => {
  // For development
  if (process.env.NODE_ENV === 'development') {
    return url.format({
      host: '127.0.0.1:9555',
      protocol: 'http',
      slashes: true
    })
  }
  
  // For production
  return url.format({
    pathname: path.resolve(__dirname, '..', '..', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
  })
}

const createMainWin = () => {
  mainWin = new BrowserWindow({ width: 800, height: 600 })
  mainWin.loadURL(getMainURL())

  // Open the DevTools.
  mainWin.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWin.on('closed', () => {
    mainWin = null
  })
}

// When electron intializes and is ready to open window
app.on('ready', () => {
  // Install dev tools
  installDevtools()

  createMainWin()
})

// Runs when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWin === null) {
    createMainWin()
  }
})
