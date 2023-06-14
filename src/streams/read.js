import fs  from 'fs';
const read = async () => {
    const filePath = 'src/streams/files/fileToRead.txt';
    const readableStream = fs.createReadStream(filePath, 'utf-8')
    for await (const chunk of readableStream){
        process.stdout.write(chunk)
    }
};
await read();
