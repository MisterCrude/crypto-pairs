import React from 'react';
import buttons from '../../../styles/buttons';
import variables from '../../../styles/variables';

import AddCurrenciesListStyles from './AddNewCurrencyStyles';


class AddNewCurrency extends React.Component {
    buttonAnimation(e, isOver) {
        let button = e.target;
        let animationOptions = {
            duration: 800,
            easing: 'ease-in-out',
            iterations: '1',
            fill: 'forwards',
        };
        let backgroundPosition;

        if (isOver)  {
            backgroundPosition = ['0 0', '100% 0']
        } else {
            backgroundPosition = ['100% 0', '0 0']
        }
        button.animate({backgroundPosition}, animationOptions);
    }

    render() {
        const {
            setCoin,
            addNewCurrenciesPair,
            baseCurrencies,
            targetCurrencies
        } = this.props;

        return (
            <form style={AddCurrenciesListStyles.form}>
                {/* Base coin */}
                <fieldset style={AddCurrenciesListStyles.fieldSet}>
                    <label style={AddCurrenciesListStyles.label} htmlFor="baseCoin">Base coin</label>
                    <select id="baseCoin" onChange={(e) => setCoin(e, true)}>
                        {baseCurrencies.map((item, i) =>
                            <option key={i} value={item.code}>
                                {item.code} - {item.name}
                            </option>)}
                    </select>
                </fieldset>

                {/* Target coin */}
                <fieldset style={AddCurrenciesListStyles.fieldSet}>
                    <label style={AddCurrenciesListStyles.label} htmlFor="targetCoin">Target coin</label>
                    <select id="targetCoin" onChange={(e) => setCoin(e, false)}>
                        {targetCurrencies.map((item, i) =>
                            <option key={i} value={item.code}>
                                {item.code} - {item.name}
                            </option>)}
                    </select>
                </fieldset>

                {/* Button */}
                <button
                    style={{...buttons.gradientMiddle, ...AddCurrenciesListStyles.button}}
                    onMouseOver={(e) => this.buttonAnimation(e, true)}
                    onMouseLeave={(e) => this.buttonAnimation(e, false)}
                    onClick={addNewCurrenciesPair}>
                    Add new pair +
                </button>
            </form>
        );
    }
}

export default AddNewCurrency;
