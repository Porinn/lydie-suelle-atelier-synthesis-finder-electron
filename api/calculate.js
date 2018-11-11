const data = require('./data');
const {ipcMain} = require('electron');

/*
ipcMain.on('itemList', (event) => {
    event.sender.send('itemList', data.materials.map((item) => {return item.name}));
    //event.returnValue = data.materials.map((item) => {return item.name});
});
*/