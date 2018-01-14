import AppConfig from './app-config';
import HelpersFoo from './helpers-foo';

class Api {
    constructor () {
        this.apiUrl = AppConfig.apiUrl;
    }

    _changeUpDetection(change) {
        return change < 0;
    }

    _countPercentage(change, price) {
        let percents = (change/(price/100));
        let result = '';

        if (percents < 0) {
            result = percents.toString().replace('-', '');
            result = (result < 1) ? '> 1' : (+result).toFixed(2);
        } else {
            result = percents.toFixed(2);
        }
        return result;
    }

    _prettyPriceFormat(price) {
        let convertedPrice = price;

        if (convertedPrice > 1) {
            convertedPrice = (+convertedPrice).toFixed(4);
            convertedPrice = convertedPrice.toString();
            convertedPrice = convertedPrice.split('.');

            let firstPart = convertedPrice[0];
            firstPart = firstPart.split('').reverse().join('');
            firstPart = firstPart.match(/.{1,3}/g);

            firstPart = firstPart.map(item => {
                return item+',';
            });

            firstPart = firstPart.join('').split('').reverse();
            firstPart.shift();
            convertedPrice = `${firstPart.join('')}.${convertedPrice[1]}`;
        }

        return convertedPrice;
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
                price: this._prettyPriceFormat(resp.price),
                change: resp.change,
                changePercents: this._countPercentage(resp.change, resp.price),
                changeUp: !this._changeUpDetection(resp.change),
            }))
    }
}

export default new Api();