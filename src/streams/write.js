import fs from "fs";
const write = async () => {
    const filePath = 'src/streams/files/fileToWrite.txt';
    const writeStream = fs.createWriteStream(filePath);
    process.stdout.write('Press Ctrl + C : to finish writing to file\n');
    process.stdin.pipe(writeStream);
};

await write();
