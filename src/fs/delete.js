import fs  from 'fs'

const remove = async () => {
    const file = 'src/fs/files/fileToRemove.txt';
    if(!fs.existsSync(file)){
        throw Error('FS operation failed');
    }
    fs.unlinkSync(file);
};

await remove();
