const parseEnv = () => {
    const envVar = process.env;
    const resData = Object.keys(envVar)
        .filter( param => param.includes('RSS_'))
        .map( key => `${key}=${envVar[key]}`)
    console.log(resData.join('; '));
};

parseEnv();
