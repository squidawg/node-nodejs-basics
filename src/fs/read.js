import fs  from 'fs'

const read = async () => {
    const resData = []
    const filePath = 'src/fs/files/fileToRead.txt'
    const file = fs.readFileSync(filePath)
    if(!fs.existsSync(filePath)){
        throw Error('FS operation failed');
    }
    file.forEach( line => {
        resData.push(String.fromCharCode(line))
    })
    console.log(resData.join(''))
};

await read();
