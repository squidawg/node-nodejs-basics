import { spawn } from 'child_process'

const spawnChildProcess = async (args) => {
    const filePath = 'src/cp/files/script.js';
    const childProcess = spawn('node', [filePath, ...args]);
    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    })
};
// Put your arguments in function call to test this functionality
spawnChildProcess(['-lh', '/usr', 'CLOSE']);
