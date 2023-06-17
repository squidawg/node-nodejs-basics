import fs  from 'fs'

const list = async () => {
    const filesDir = 'src/fs/files/'
    const files = fs.readdirSync(filesDir);
    if(!fs.existsSync(filesDir)){
        throw Error('FS operation failed');
    }
    files.forEach( file => {
        console.log(file)
    })
};

await list();
