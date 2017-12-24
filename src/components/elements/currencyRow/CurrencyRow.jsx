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
            removeCurrenciesPair,
        } = this.props;
        return (
            <tr style={CurrencyRowStyles.row}>
                <td>
                    <span style={CurrencyRowStyles.titleLarge}>
                        {base}/{target}
                    </span>
                </td>
                <td>
                    <span style={CurrencyRowStyles.text}>
                        {price}
                    </span>
                </td>
                <td style={helpers.textCenter}>
                    {/* Arrow indicator */}
                    <span style={CurrencyRowStyles.text}>
                        {changeUp
                            ?  <FontAwesome style={{...CurrencyRowStyles.arrow, color: variables.green}} name="angle-up" />
                            :  <FontAwesome style={{...CurrencyRowStyles.arrow, color: variables.red}} name="angle-down" />
                        }
                    </span>
                </td>
                <td>
                    {/* Change */}
                    <span style={CurrencyRowStyles.text}>{change}</span>

                    {/* Change percents */}
                    <span style={CurrencyRowStyles.smallText}>({changePercents}%)</span>
                </td>
                <td>
                    {/* Remove button */}
                    <button onClick={removeCurrenciesPair}> - </button>
                </td>
            </tr>
        );
    }
}

export default CurrencyRow;