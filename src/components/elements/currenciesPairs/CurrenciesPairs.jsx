import React from 'react';
import CurrencyRow from '../currencyRow/CurrencyRow';
import FontAwesome from 'react-fontawesome';
import helpers from '../../../styles/helpers'

import CurrenciesPairsStyles from './CurrenciesPairsStyles';


class CurrenciesPairs extends React.Component {
    render () {
        const { currenciesPairs, removeCurrenciesPair } = this.props;
        return (
            <table style={CurrenciesPairsStyles.table}>
                <tbody>
                    {/* Currency row */}
                    {currenciesPairs.length ? (
                        currenciesPairs.map((currenciesRow) =>
                            <CurrencyRow
                                key={currenciesRow.id}
                                change={currenciesRow.change}
                                changeUp={currenciesRow.changeUp}
                                changePercents={currenciesRow.changePercents}
                                base={currenciesRow.base}
                                target={currenciesRow.target}
                                price={currenciesRow.price}
                                removeCurrenciesPair={() => removeCurrenciesPair(currenciesRow.id)}/>
                        )
                    ) : (
                        <tr>
                            <td  style={CurrenciesPairsStyles.spinnerWrapper}>
                                <FontAwesome
                                    style={CurrenciesPairsStyles.spinner}
                                    name="spinner"
                                    spin />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default CurrenciesPairs;