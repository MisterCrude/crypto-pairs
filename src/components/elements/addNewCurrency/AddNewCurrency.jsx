import React from 'react';
import buttons from '../../../styles/buttons';
import variables from '../../../styles/variables';
import HelpersFoo from '../../../config/helpers-foo';
import SearchInput from '../../elements/searchInput/SearchInput';

import AddCurrenciesListStyles from './AddNewCurrencyStyles';


class AddNewCurrency extends React.Component {
    buttonAnimation(e, eventType, isFirstPartEvent) {
        let button = e.target;
        let animationOptions = {
            easing: 'ease-in-out',
            iterations: '1',
            fill: 'forwards',
        };
        let cssProperty;

        switch(eventType) {
            case 'click':
                // Click animation
                let boxShadow;

                if (isFirstPartEvent)  {
                    boxShadow = [variables.boxShadowSmall, variables.boxShadowSmallInvert]
                } else {
                    boxShadow = [variables.boxShadowSmallInvert, variables.boxShadowSmall]
                }
                animationOptions.duration = 100;
                cssProperty = {boxShadow};
                break;
            case 'hover':
                // Hover animation
                let backgroundPosition;

                if (isFirstPartEvent)  {
                    backgroundPosition = ['0 0', '100% 0']
                } else {
                    backgroundPosition = ['100% 0', '0 0']
                }

                animationOptions.duration = 800;
                cssProperty = {backgroundPosition};
                break;
        }

        button.animate({...cssProperty}, animationOptions);
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
                <SearchInput items={baseCurrencies} />


                <fieldset style={AddCurrenciesListStyles.fieldSet}>
                    <label style={AddCurrenciesListStyles.label} htmlFor="baseCoin">Base coin</label>
                    <select id="baseCoin" onChange={(e) => setCoin(e, true)}>
                        {baseCurrencies.map((item) =>
                            <option key={HelpersFoo.getRandomNumber()} value={item.code}>
                                {item.code} - {item.name}
                            </option>)}
                    </select>
                </fieldset>

                {/* Target coin */}
                <fieldset style={{...AddCurrenciesListStyles.fieldSet, flexGrow: 2}}>
                    <label style={AddCurrenciesListStyles.label} htmlFor="targetCoin">Target coin</label>
                    <select id="targetCoin" onChange={(e) => setCoin(e, false)}>
                        {targetCurrencies.map((item) =>
                            <option key={HelpersFoo.getRandomNumber()} value={item.code}>
                                {item.code} - {item.name}
                            </option>)}
                    </select>
                </fieldset>

                {/* Button */}
                <button
                    style={{...buttons.gradientMiddle, ...AddCurrenciesListStyles.button}}
                    onMouseOver={(e) => this.buttonAnimation(e, 'hover', true)}
                    onMouseLeave={(e) => this.buttonAnimation(e, 'hover', false)}
                    onMouseDown={(e) => this.buttonAnimation(e, 'click', true)}
                    onMouseUp={(e) => this.buttonAnimation(e, 'click', false)}
                    onClick={addNewCurrenciesPair}>
                    Add new pair +
                </button>
            </form>
        );
    }
}

export default AddNewCurrency;
