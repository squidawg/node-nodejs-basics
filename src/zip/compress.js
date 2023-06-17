import zlib from 'zlib'
import fs from "fs";

const compress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const outPath = 'src/zip/files/archive.gz';
    const gZip = zlib.createGzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(outPath);
    readStream.pipe(gZip).pipe(writeStream);
};

await compress();
