import { app, BrowserWindow, globalShortcut, ipcMain, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let serve;
let mainWindow;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

/**
 * Creates the main window of the Electron application.
 */
function createMainWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    icon: path.join(__dirname, 'src/assets/favicon', 'favicon.ico'),
    frame: false
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    mainWindow.loadURL('http://localhost:1337');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  // Opens the Chrome Developer Tools
  mainWindow.webContents.openDevTools({
    mode: 'detach'
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// Register Global Shortcut Commands
function registerGlobalShortcuts() {
  // Register the Debug (Ctrl+D) shortcut
  globalShortcut.register('CommandOrControl+D', () => {
    // Launch DevTools if it is not currently open, close it if it is open.
    if (mainWindow.webContents.isDevToolsOpened()) {
      mainWindow.webContents.closeDevTools();
    } else {
      mainWindow.webContents.openDevTools({
        mode: 'detach'
      });
    }
  });
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createMainWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (process.platform === 'darwin' && mainWindow === null) {
      createMainWindow();
    }
  });
} catch (error) {
  console.log('Error:', error);
}

ipcMain.on('app-minimize', (event, arg) => {
  console.log('Minimizing App');
  mainWindow.minimize();
});

ipcMain.on('app-maximize', (event, arg) => {
  if (mainWindow.isMaximized()) {
    console.log('Restoring App');
    mainWindow.unmaximize();
  } else {
    console.log('Maximizing App');
    mainWindow.maximize();
  }
});

ipcMain.on('app-close', (event, arg) => {
  console.log('Closing App');
  app.quit();
});

ipcMain.on('app-launched', (event, arg) => {
  console.log(arg);
});
