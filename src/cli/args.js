const parseArgs = () => {
    const args = process.argv.slice(2);

    const result = args
        .map( (arg) => arg
            .startsWith('--') ?
            arg.replace('--', ''): `is ${arg},`);

    const resData = result
        .join(' ')
        .split(',')
    for(let data of resData){
        console.log(data)
    }
};

parseArgs();
