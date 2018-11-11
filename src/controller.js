const {ipcRenderer} = require('electron');

$(document).ready(() => {
    ipcRenderer.send('itemList');
    console.log('ready');
})

ipcRenderer.on('itemList', (event, list) => {
    alert('receive');
    $('.finder-item-list').html(`<option>${list}</option>`);
})

function find() {
    //alert('test');
    ipcRenderer.send('itemList');
    console.log('send');
}