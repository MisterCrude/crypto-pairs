const HelpersFoo = {
    getRandomNumber: (prefix) => {
        let number = Math.floor((1 + Math.random())*0x10000).toString(16);
        return (prefix) ? `${prefix}-${number}` : number
    },
};

export default HelpersFoo;