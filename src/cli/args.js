const parseArgs = () => {
    const args = process.argv.slice(2);

    const result = args
        .map( (arg) => arg
            .startsWith('--') ?
            arg.replace('--', ''): `is ${arg},`);

    const resData = result
        .join(' ')
        .split(',')
    console.log(resData
        .slice(0 , resData.length - 1))
};

parseArgs();
