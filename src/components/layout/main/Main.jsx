import React from 'react';
import CurrenciesPairs from '../../elements/currenciesPairs/CurrenciesPairs';
import AddNewCurrency from '../../elements/addNewCurrency/AddNewCurrency';
import helpers from '../../../styles/helpers';
import FontAwesome from 'react-fontawesome';
import Api from '../../../config/Api';

import MainStyles from './MainStyles';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenciesPairs: [],
            baseCurrencies: [],
            targetCurrencies: [],
            baseCoin: '',
            targetCoin: '',
        };
    }

    // Add new currencies pair row with
    addNewCurrenciesPair = (e, baseCoin = this.state.baseCoin, targetCoin = this.state.targetCoin) => {
        if (e) {
            e.preventDefault();
        }

        Api.currencyRate(baseCoin, targetCoin)
            .then(resp => {
                this.setState(prevState => ({
                    currenciesPairs: [...prevState.currenciesPairs, resp],
                }));

            })
            .catch(error => console.error(error));
    };

    // Remove currencies pair row with
    removeCurrenciesPair = (id) => {
        this.setState(prevState => ({
            currenciesPairs: prevState.currenciesPairs.filter(item => item.id != id)
        }));
    };

    // Set currencies list on selects
    setCoin = (event, isBaseCoin) => {
        if (isBaseCoin) {
            this.setState({ baseCoin: event.target.value });
        } else {
            this.setState({ targetCoin: event.target.value });
        }
    };

    componentDidMount() {
        let baseList = Api.getBaseCurrenciesList;
        let targetList = Api.getTargetCurrenciesList;

        this.setState(prevState => ({
            baseCurrencies: [...baseList],
            targetCurrencies: [...targetList],
            baseCoin: baseList[0].code,
            targetCoin: targetList[0].code,
        }));

        // TODO: remove setTimeout
        setTimeout(() => this.addNewCurrenciesPair(), 0)
    };

    render() {
        const { baseCurrencies, targetCurrencies, currenciesPairs } = this.state;

        return (
            <main style={MainStyles}>
                {/* Currencies list */}
                <CurrenciesPairs
                    currenciesPairs={currenciesPairs}
                    removeCurrenciesPair={this.removeCurrenciesPair} />

                {/* Currencies list */}
                <AddNewCurrency
                    baseCurrencies={baseCurrencies}
                    targetCurrencies={targetCurrencies}
                    addNewCurrenciesPair={this.addNewCurrenciesPair}
                    setCoin={this.setCoin} />

                {/*<button>add to screen</button>*/}
            </main>
        )
    }
}

export default Main;
