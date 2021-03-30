const editJsonFile = require('edit-json-file');
const SETTINGS_FILE = 'neutralino.config.json';

module.exports.update = (key, value) => {
    let file;
    file = editJsonFile(SETTINGS_FILE);
    file.set(key, value);
    file.save();
};

module.exports.get = () => {
    let file = editJsonFile(SETTINGS_FILE);
    return file.get();
};
