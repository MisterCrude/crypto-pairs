import React from 'react';
import FontAwesome from 'react-fontawesome';
import variables from '../../../styles/variables';
import typography from '../../../styles/typography';
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
            <tr style={CurrencyRowStyles}>
                <td>
                    <span style={typography.fontLargeTitle}>
                        {base}/{target}
                    </span>
                </td>
                <td>
                    <span style={typography.fontLarge}>
                        {price}
                    </span>
                </td>
                <td style={helpers.textCenter}>
                    {/* Arrow indicator */}
                    <span style={typography.fontLarge}>
                        {changeUp
                            ?  <FontAwesome style={{color: variables.green}} name="arrow-up" />
                            :  <FontAwesome style={{color: variables.red}} name="arrow-down" />
                        }
                    </span>
                </td>
                <td style={helpers.textCenter}>
                    {/* Change */}
                    <span style={typography.fontLarge}>{change}</span>

                    {/* Change percents */}
                    <span style={{...typography.fontSmall, paddingLeft: variables.paddingSmall}}>({changePercents}%)</span>
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