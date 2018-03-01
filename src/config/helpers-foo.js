const HelpersFoo = {
    getRandomNumber: (prefix) => {
        let number = Math.floor((1 + Math.random())*0x10000000).toString(16);
        return (prefix) ? `${prefix}-${number}` : number
    },
};

const MobileDeviceDetector = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export { HelpersFoo, MobileDeviceDetector };