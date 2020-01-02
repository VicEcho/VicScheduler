const electron = require('electron')
const fs = require('fs')

const { app, BrowserWindow } = require('electron')
const openWindows = [];
function isDev() {
    return process.env.NODE_ENV === 'development';
}
Array.prototype.remove = (value) => {
    const index = this.indexOf(value);
    if (index > -1) {
        this.splice(index, 1);
    }
};
function createMainWindow() {
    const root = fs.readdirSync('/')
    console.log('2123002332', root)
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    openWindows.push(win);
    // 如果是测试环境则监听本地8001端口，否则加载index.html文件
    console.log('asdasdadad', process.env.NODE_ENV )
    if (isDev()) {
        const ss = win.loadURL('http://localhost:8001/');
        console.log('ss', ss)
        win.webContents.openDevTools()
    } else {
        win.loadFile('./dist/renderer/index.html');
    }    
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
        openWindows.remove(win);
    })
    // 打开开发者工具
}
app.on('ready', createMainWindow)