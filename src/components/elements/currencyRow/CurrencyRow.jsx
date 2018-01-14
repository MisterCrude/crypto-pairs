import React from 'react';
import FontAwesome from 'react-fontawesome';
import variables from '../../../styles/variables';
import helpers from '../../../styles/helpers';

import CurrencyRowStyles from './CurrencyRowStyles';


class CurrencyRow extends React.Component {
    constructor(props) {
        super(props);
        this.animationDuration = 300;
        this.state = {
            animateStyle: {
                transition: `all ${this.animationDuration}ms ease`,
                opacity: 0,
            },
        }
    }

    mountStyle = () => {
        this.setState(prevState => ({
            animateStyle: {
                ...prevState.animateStyle,
                opacity: 1,
            },
        }));
    };

    unMountStyle = () => {
        this.setState(prevState => ({
            animateStyle: {
                ...prevState.animateStyle,
                opacity: 0,
            },
        }));
    };

    removeCurrenciesPair = (removeParentMethod, hideRemoveButton=false) => {
        if (hideRemoveButton) {
            return;
        }

        this.unMountStyle();
        setTimeout(() => removeParentMethod(), this.animationDuration + 20);
    };

    componentWillMount() {
       setTimeout(() => this.mountStyle(), 10);
    };

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
            styles: changeUp ? '' : { position: 'relative', top: '1px' },
        };
        return (
            <tr style={{...this.state.animateStyle, ...CurrencyRowStyles.row}}>
                <td>
                    <span style={CurrencyRowStyles.text}>
                        {base} / {target}
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
                        <FontAwesome style={{...CurrencyRowStyles.arrow, color: changeIndicator.color, ...changeIndicator.styles}} name={changeIndicator.icon} />
                    </span>
                </td>
                <td>
                    {/* Change */}
                    <span style={{color: changeIndicator.color, ...CurrencyRowStyles.smallText}}>{change}</span>

                    {/* Change percents */}
                    <span style={CurrencyRowStyles.smallText}>({changePercents}%)</span>
                </td>
                <td>
                    {/* Remove button */}
                    <button
                        style={{visibility: (hideRemoveButton && 'hidden'), ...CurrencyRowStyles.closeButton}}
                        onClick={(e) => this.removeCurrenciesPair(removeCurrenciesPair, hideRemoveButton)}>
                        <FontAwesome name="times-circle" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default CurrencyRow;