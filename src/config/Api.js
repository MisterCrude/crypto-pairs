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

    currencyRate(currencyCoinOne, currencyCoinTwo) {
        return fetch(`${this.apiUrl}/ticker/${currencyCoinOne}-${currencyCoinTwo}`, {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(reps => reps['ticker'])
            .then(reps => ({
                base: reps.base,
                target: reps.target,
                price: reps.price,
                change: reps.change,
                changeUp: this.changeUpDetection(reps.change),
            }))
    }

    changeUpDetection(change) {
        let patt = new RegExp('e');
        return patt.test(change);
    }
}

export default new Api();