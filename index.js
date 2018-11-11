const {app, BrowserWindow, ipcMain} = require('electron');

let window;
function createWindow() {
    window = new BrowserWindow({width: 800, height: 800});
    window.loadFile('src/index.html');

    // DevTool 열기 (테스트용)
    window.webContents.openDevTools();

    window.on('closed', () => {
        window = null;
    });
}

app.on('ready', createWindow);
app.on('activate', () => {
    if (window !== null) createWindow();
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

ipcMain.on('itemList', (event) => {
    event.sender.send('itemList', 'test');
})