const { exec } = require('child_process');
const chmod = require('chmod');

module.exports.runApp = (settingsObj, runSuccessCallback = null, argsOpt = "") => {
    let binaryCmd;
    let args = " --load-dir-res";
    if(argsOpt.length > 0)
        args += " " + argsOpt;
    switch (process.platform) {
        case 'win32':
            binaryCmd = `neutralino-win.exe${args}`;
            break;
        case 'linux':
            binaryCmd = `./neutralino-linux${args}`;
            chmod(`neutralino-linux`, 777);
            break;
        case 'darwin':
            binaryCmd = `./neutralino-mac${args}`;
            chmod(`neutralino-mac`, 777);
            break;
    }
    exec(binaryCmd, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
        }
        if(runSuccessCallback)
            runSuccessCallback();
    });
}
