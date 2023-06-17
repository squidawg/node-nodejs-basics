import {parentPort ,workerData, Worker, isMainThread} from 'worker_threads';

// n should be received from main thread

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if(isMainThread){
        const worker = new Worker('../wt/worker.js', {workerData:12})
        worker.on('message', (resData) => {
            process.stdout.write(resData.toString())
        })
    } else {
        const fibNum = nthFibonacci(workerData);
        parentPort.postMessage(fibNum);
    }
};


sendResult();
