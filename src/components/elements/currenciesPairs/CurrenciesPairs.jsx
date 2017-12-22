import React from 'react';
import CurrencyRow from '../currencyRow/CurrencyRow';

import CurrenciesPairsStyles from './CurrenciesPairsStyles';


class CurrenciesPairs extends React.Component {
    render () {
        const { currenciesPairs, removeCurrenciesPair } = this.props;
        return (
            <table style={CurrenciesPairsStyles}>
                <tbody>
                    {/* Currency row */}
                    {currenciesPairs.map((currenciesRow, i) =>
                        <CurrencyRow
                            key={i}
                            change={currenciesRow.change}
                            changeUp={currenciesRow.changeUp}
                            changePercents={currenciesRow.changePercents}
                            base={currenciesRow.base}
                            target={currenciesRow.target}
                            price={currenciesRow.price}
                            removeCurrenciesPair={removeCurrenciesPair}/>
                    )}
                </tbody>
            </table>
        );
    }
}

export default CurrenciesPairs;