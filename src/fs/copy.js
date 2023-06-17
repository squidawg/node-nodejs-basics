import { mkdir } from 'node:fs';
import fs  from 'fs'
import path from "path";

import { copyFile } from 'node:fs/promises';

const copy = async () => {
    const filesDir = 'src/fs/files/';
    const filesCopyDir = 'src/fs/files_copy';

    if(!fs.existsSync(filesDir) || fs.existsSync(filesCopyDir)) {
        throw Error('FS operation failed');
    }
    mkdir(filesCopyDir, { recursive: true }, (err) => {
        if (err) throw err;
    })

   const files = fs.readdirSync(filesDir);
   files.forEach(file => {
       const fileName = path.basename(file);
       const src = path.join(filesDir, fileName);
       const dest = path.join(filesCopyDir, fileName);
       try{
           copyFile(src, dest);
       } catch (err) {
           throw Error(err);
       }
   })
};

await copy();
