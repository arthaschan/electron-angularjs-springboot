const {
    app,
    BrowserWindow
} = require('electron');


// var childProcess = require('child_process');
// var options = {
//     maxBuffer: 1024 * 1024 * 100,
//     encoding: 'utf8',
//     timeout: 5000
// };
// var child = childProcess.exec(`java -jar ${__dirname}/war/wire.war`, options, function (error, stdout, stderr) {
//     if (error) {
//         console.log(error.stack);
//         console.log('Error Code: ' + error.code);
//         console.log('Error Signal: ' + error.signal);
//     }
//     console.log('Results: \n' + stdout);
//     if (stderr.length) {
//         console.log('Errors: ' + stderr);
//     }
// });

var spawn = require('child_process').spawn
var free = spawn('java', ['-jar', `${__dirname}/war/wire.war`]);

let win;

function createWindow() {


    win = new BrowserWindow({
        width: 1104,
        height: 620
    });

    // win.setMenu(null);

    win.loadFile(`${__dirname}/test/test.html`);

    setTimeout(() => {
        win.loadFile(`${__dirname}/html/index.html`);
    }, 3000);

    //控制台
    win.webContents.openDevTools();

    win.on('close', () => {
        win = null;
    });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

    // 注册子进程关闭事件
    free.on('exit', function (code, signal) {

    });

    if (process.platform !== 'darwin') {
        app.quit();
    }

});

//os x
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});