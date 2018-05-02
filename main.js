const { app, BrowserWindow, } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({ width: 800, height: 800});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'./index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', ()=> mainWindow = null);
});

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});