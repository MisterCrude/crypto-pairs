import React from 'react';
import CurrencyRow from '../currencyRow/CurrencyRow';

import CurrenciesPairsStyles from './CurrenciesPairsStyles';


class CurrenciesPairs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenciesList: [
                {
                    base: null,
                    target: null,
                    price: null,
                    change: null,
                    changeUp: null,
                }
            ]
        };
    }

    render () {
        const { currenciesPairs, removeCurrenciesPair } = this.props;
        return (
            <div style={CurrenciesPairsStyles}>
                {/* Currency row */}
                {currenciesPairs.map((currenciesRow, i) =>
                    <CurrencyRow
                        key={i}
                        change={currenciesRow.change}
                        base={currenciesRow.base}
                        target={currenciesRow.target}
                        price={currenciesRow.price}
                        removeCurrenciesPair={removeCurrenciesPair}/>
                )}
            </div>
        );
    }
}

export default CurrenciesPairs;