import AppConfig from './app-config';

class Api {
    constructor () {
        this.apiUrl = AppConfig.apiUrl;
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

    currencyRate(currencyCoinOne, currencyCoinTwo) {
        return fetch(`${this.apiUrl}/ticker/${currencyCoinOne}-${currencyCoinTwo}`, {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(resp => resp['ticker'])
            .then(resp => ({
                base: resp.base,
                target: resp.target,
                price: resp.price,
                change: resp.change,
                changePercents: this._countPercentage(resp.change, resp.price),
                changeUp: !this._changeUpDetection(resp.change),
            }))
    }

    _changeUpDetection(change) {
        return /-/.test(change);
    }

    _countPercentage(change, price) {
        let pr = parseInt(price, 10);
        let ch = parseInt(change, 10);

        return (ch/(pr/100)).toFixed(2);
    }
}

export default new Api();