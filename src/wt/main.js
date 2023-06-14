import {Worker} from 'worker_threads';
import os from 'os'
const performCalculations = async () => {
    // Write your code here
    const cores = os.cpus().length;
    const results = [];
    for(let i = 0; i <  cores; i++){
        const worker = new Worker('./src/wt/worker.js', {workerData: 10 + i});
        worker.on('message', resData => {
            results[i] = { status: 'resolved', data: resData};
        })
        worker.on('error', () => {
            results[i] = { status: 'error', data: null }
            if(results.filter(Boolean).length === cores){
                console.log(results);
            }
        })
        worker.on('exit', () => {
            if(results.filter(Boolean).length === cores){
                console.log(results);
            }
        })
    }
};

await performCalculations();
