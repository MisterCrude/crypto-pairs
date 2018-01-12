import React from 'react';
import buttons from '../../../styles/buttons';
import variables from '../../../styles/variables';
import SearchInput from '../../elements/searchInput/SearchInput';

import AddCurrenciesListStyles from './AddNewCurrencyStyles';


class AddNewCurrency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clearInput: false,
        };
    }

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
            default:
                break;
        }

        button.animate({...cssProperty}, animationOptions);
    }

    addNewCurrenciesPair = (event) => {
        this.props.addNewCurrenciesPair(event);
        this.setState({
            clearInput: true,
        });
        setTimeout(() => this.setState({
            clearInput: false,
        }), 10);
    };

    render() {
        const {
            setCoin,
            baseCurrencies,
            targetCurrencies
        } = this.props;

        return (
            <form style={AddCurrenciesListStyles.form}>
                {/* Base coin */}
                <div style={AddCurrenciesListStyles.fieldSet}>
                    <SearchInput
                        label='Base coin'
                        clearInput={this.state.clearInput}
                        items={baseCurrencies}
                        setValue={(coinName, isBaseCoin=true) => {setCoin(coinName, isBaseCoin)}} />
                </div>

                {/* Target coin */}
                <div style={AddCurrenciesListStyles.fieldSet}>
                    <SearchInput
                        label='Target coin'
                        clearInput={this.state.clearInput}
                        items={targetCurrencies}
                        setValue={(coinName, isBaseCoin=false) => {setCoin(coinName, isBaseCoin)}} />
                </div>

                {/* Button */}
                <button
                    style={{...buttons.gradientMiddle, ...AddCurrenciesListStyles.button}}
                    onMouseOver={(e) => this.buttonAnimation(e, 'hover', true)}
                    onMouseLeave={(e) => this.buttonAnimation(e, 'hover', false)}
                    onMouseDown={(e) => this.buttonAnimation(e, 'click', true)}
                    onMouseUp={(e) => this.buttonAnimation(e, 'click', false)}
                    onClick={this.addNewCurrenciesPair}>
                    Add new pair +
                </button>
            </form>
        );
    }
}

export default AddNewCurrency;
