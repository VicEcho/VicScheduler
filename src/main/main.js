const electron = require('electron')
const fs = require('fs')

const { app, BrowserWindow } = require('electron')
const openWindows = {};
function isDev() {
    return process.env.NODE_ENV === 'development';
}

function createMainWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // 将打开的窗口放入openWindows中维护
    openWindows["mainWin"] = win;
    // 如果是测试环境则监听本地8001端口，否则加载index.html文件
    console.log('asdasdadad', process.env.NODE_ENV)
    if (isDev()) {
        const ss = win.loadURL('http://localhost:8001/');
        win.webContents.openDevTools()
    } else {
        win.loadFile('./dist/renderer/index.html');
    }
    win.on('closed', () => {
        // 取消引用 window 对象，删除map里维护的窗口，
        delete openWindows["mainWin"];
        win = null
    });
    // 打开开发者工具
}
app.on('ready', createMainWindow)
electron.ipcMain.on('openNewBrower', (route) => {
    // 在主进程中
    global.currentRoute = "/newBrower.html";
    if (openWindows["newBrower"]) {
        return;
    }
    let win = new BrowserWindow({
        width: 200,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    openWindows["newBrower"] = win;
    if (isDev()) {
        const ss = win.loadURL('http://localhost:8001/newBrower.html');
        win.webContents.openDevTools()
    } else {
        // win.loadFile('./dist/renderer/index.html');
    }
    win.on('closed', () => {
        // 取消引用 window 对象，删除map里维护的窗口，
        delete openWindows["newBrower"];
        win = null
    });
});