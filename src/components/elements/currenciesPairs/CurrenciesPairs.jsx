import React from 'react';
import CurrencyRow from '../currencyRow/CurrencyRow';
import FontAwesome from 'react-fontawesome';

import CurrenciesPairsStyles from './CurrenciesPairsStyles';


class CurrenciesPairs extends React.Component {
    render () {
        const {
            showThrobber,
            currenciesPairs,
            removeCurrenciesPair,
            deviceType,
        } = this.props;

        return (
            <div style={{ ...CurrenciesPairsStyles[`tableWrapper${deviceType}`] }}>
                <table style={CurrenciesPairsStyles.table}>
                    <tbody>
                        {/* Currency row */}
                        {currenciesPairs.map((currenciesRow) =>
                            <CurrencyRow
                                deviceType={deviceType}
                                key={currenciesRow.id}
                                change={currenciesRow.change}
                                changeUp={currenciesRow.changeUp}
                                changePercents={currenciesRow.changePercents}
                                base={currenciesRow.base}
                                target={currenciesRow.target}
                                price={currenciesRow.price}
                                hideRemoveButton={currenciesPairs.length === 1}
                                removeCurrenciesPair={() => removeCurrenciesPair(currenciesRow.id)}/>)}

                        {/* Throbber */}
                        {showThrobber &&
                            <tr>
                                <td
                                    colSpan='5'
                                    style={CurrenciesPairsStyles.spinnerWrapper}>
                                    <FontAwesome
                                        style={CurrenciesPairsStyles.spinner}
                                        name='spinner'
                                        spin />
                                </td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CurrenciesPairs;