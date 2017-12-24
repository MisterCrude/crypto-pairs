import AppConfig from './app-config';

class Api {
    constructor () {
        this.apiUrl = AppConfig.apiUrl;
    }

    _changeUpDetection(change) {
        return /-/.test(change);
    }

    _countPercentage(change, price) {
        let pr = parseInt(price, 10);
        let ch = parseInt(change, 10);

        return (ch/(pr/100)).toFixed(2);
    }

    get getBaseCurrenciesList() {
        return [ ...AppConfig.currencies.crypto ]
    }

    get getTargetCurrenciesList() {
        return [ ...AppConfig.currencies.fiat, ...AppConfig.currencies.crypto ]
    }

    get getAffiliateLink() {
        return  { ...AppConfig.affiliateLink };
    }

    get _getRandomNumber() {
        return Math.floor((1 + Math.random())*0x10000).toString(16);
    }

    currencyRate(currencyCoinOne, currencyCoinTwo) {
        return fetch(`${this.apiUrl}/ticker/${currencyCoinOne}-${currencyCoinTwo}`, {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(resp => resp['ticker'])
            .then(resp => ({
                id: this._getRandomNumber,
                base: resp.base,
                target: resp.target,
                price: resp.price,
                change: resp.change,
                changePercents: this._countPercentage(resp.change, resp.price),
                changeUp: !this._changeUpDetection(resp.change),
            }))
    }
}

export default new Api();