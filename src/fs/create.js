import fs  from 'fs'

const create = async () => {
    const path = 'src/fs/files/fresh.txt'

    if(fs.existsSync(path)){
        throw Error('FS operation failed')
    }
    fs.writeFileSync(path, 'I am fresh and young')
};

await create();
