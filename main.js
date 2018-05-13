const { app, BrowserWindow, } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({ width: 800, height: 600, minWidth: 800, minHeight: 600});

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