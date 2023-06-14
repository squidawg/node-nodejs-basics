import fs  from 'fs'
import path from "path";

const rename = async () => {
    const filePath = 'src/fs/files';
    const oldFileName = path.join(filePath, 'wrongFilename.txt');
    const newFileName = path.join(filePath, 'properFilename.md');

    if(!fs.existsSync(oldFileName) || fs.existsSync(newFileName)){
        throw Error('FS operation failed');

    }
    fs.renameSync(oldFileName, newFileName);
};

await rename();
