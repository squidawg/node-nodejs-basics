import zlib from 'zlib'
import fs from "fs";


const decompress = async () => {

    const outPath = 'src/zip/files/fileToCompress.txt';
    const filePath = 'src/zip/files/archive.gz';

    const unZip = zlib.createUnzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(outPath);

    readStream.pipe(unZip).pipe(writeStream);
};

await decompress();
