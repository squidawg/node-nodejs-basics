import crypto from 'crypto'
import fs from "fs";
const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
    const file = fs.readFileSync(filePath);
    const  hash = crypto.createHash('sha256');
    hash.update(file);
    console.log(hash.digest('hex'));
};

await calculateHash();
