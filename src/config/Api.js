import AppConfig from './app-config';
import HelpersFoo from './helpers-foo';

class Api {
    constructor () {
        this.apiUrl = AppConfig.apiUrl;
    }

    _changeUpDetection(change) {
        return /-/.test(change);
    }

    _countPercentage(change, price) {
        console.log(change, price);

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

    currencyRate(currencyCoinOne, currencyCoinTwo) {
        return fetch(`${this.apiUrl}/ticker/${currencyCoinOne}-${currencyCoinTwo}`, {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(resp => resp['ticker'])
            .then(resp => ({
                id: HelpersFoo.getRandomNumber('api'),
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