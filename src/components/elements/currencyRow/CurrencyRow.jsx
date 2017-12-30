import React from 'react';
import FontAwesome from 'react-fontawesome';
import variables from '../../../styles/variables';
import helpers from '../../../styles/helpers';

import CurrencyRowStyles from './CurrencyRowStyles';


class CurrencyRow extends React.Component {
    render () {
        const {
            base,
            target,
            price,
            change,
            changeUp,
            changePercents,
            hideRemoveButton,
            removeCurrenciesPair,
        } = this.props;
        let changeIndicator = {
            color: changeUp ? variables.green : variables.red,
            icon: changeUp ? 'angle-up' : 'angle-down',
        };
        return (
            <tr style={CurrencyRowStyles.row}>
                <td>
                    <span style={CurrencyRowStyles.text}>
                        {base}/{target}
                    </span>
                </td>
                <td>
                    <span style={CurrencyRowStyles.titleLarge}>
                        {price}
                    </span>
                </td>
                <td style={helpers.textCenter}>
                    {/* Arrow indicator */}
                    <span style={CurrencyRowStyles.text}>
                        <FontAwesome style={{...CurrencyRowStyles.arrow, color: changeIndicator.color}} name={changeIndicator.icon} />
                    </span>
                </td>
                <td>
                    {/* Change */}
                    <span style={{color: changeIndicator.color, ...CurrencyRowStyles.text}}>{change}</span>

                    {/* Change percents */}
                    <span style={CurrencyRowStyles.smallText}>({changePercents}%)</span>
                </td>
                <td>
                    {/* Remove button */}
                    {hideRemoveButton &&
                        <button
                            style={CurrencyRowStyles.closeButton}
                            onClick={removeCurrenciesPair}>
                            <FontAwesome name="times-circle" />
                        </button>}
                </td>
            </tr>
        );
    }
}

export default CurrencyRow;