import React from 'react';
import FontAwesome from 'react-fontawesome';
import variables from '../../../styles/variables';

import CurrencyRowStyles from './CurrencyRowStyles';


class CurrencyRow extends React.Component {
    render () {
        const {
            base,
            target,
            price,
            change,
            changeUp,
            removeCurrenciesPair,
        } = this.props;
        return (
            <div style={CurrencyRowStyles}>
                {base}/{target}  {price}

                {/* Arrow indicator */}
                {changeUp
                    ?  <FontAwesome style={{color: variables.green}} name="arrow-up" />
                    :  <FontAwesome style={{color: variables.red}} name="arrow-down" />
                }

                {/* Change */}
                {change}

                {/* Remove button */}
                <button onClick={removeCurrenciesPair('ok')}>
                    <FontAwesome name="minus" />
                </button>
            </div>
        );
    }
}

export default CurrencyRow;