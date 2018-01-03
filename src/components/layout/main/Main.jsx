import React from 'react';
import CurrenciesPairs from '../../elements/currenciesPairs/CurrenciesPairs';
import AddNewCurrency from '../../elements/addNewCurrency/AddNewCurrency';
import NotificationList from '../../elements/notificationList/NotificationList';
import HelpersFoo from '../../../config/helpers-foo';
import NotificationsType from '../../../config/notification-types';
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
            notifications: [],
        };
    }

    // Add new currencies pair row with
    addNewCurrenciesPair = (e, baseCoin = this.state.baseCoin, targetCoin = this.state.targetCoin) => {
        if (e) {
            e.preventDefault();
        }

        Api.currencyRate(baseCoin, targetCoin)
            .then(resp => {
                if (this.hasSamePair(resp, this.state.currenciesPairs)) {
                    this.showNotification(resp.base, resp.target);
                } else {
                    this.setState(prevState => ({
                        currenciesPairs: [...prevState.currenciesPairs, resp,],
                    }));
                }
            })
            .catch(error => console.error(error));
    };

    // Show notification
    showNotification(baseCoin, targetCoin) {
        let warning = {
            ...NotificationsType.warning,
            // Add unique ID for every 'the same pair' notification
            id: HelpersFoo.getRandomNumber(),
            content: `You already have ${baseCoin}/${targetCoin} pair`,
        };

        this.setState(prevState => {
            let oldNotifications = prevState.notifications;

            if (oldNotifications.length > 3) {
                oldNotifications.shift();
            }
            return {notifications: [...oldNotifications, {...warning},]};
        })
    }

    // Return true if state have same currency pair
    hasSamePair = (newPair, state) => {
        for (let statePair of state) {
            if (statePair.base === newPair.base && statePair.target === newPair.target) {
                return true;
            }
        }
    };

    // Remove currencies pair row with
    removeCurrenciesPair = (id) => {
        this.setState(prevState => ({
            currenciesPairs: prevState.currenciesPairs.filter(item => item.id != id)
        }));
    };

    // Set currencies list on selects
    setCoin = (coinName, isBaseCoin) => {
        if (isBaseCoin) {
            this.setState({ baseCoin: coinName });
        } else {
            this.setState({ targetCoin: coinName });
        }
    };

    // Close notifications
    dismissNotification = (e, notificationId) => {
        if (e) {
            e.preventDefault();
        }

        this.setState((prevState) => ({
            notifications: prevState.notifications.filter((item) => item.id !== notificationId)
        }));
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
        const {
            baseCurrencies,
            targetCurrencies,
            currenciesPairs
        } = this.state;

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

                {/* Notifications */}
                <NotificationList
                    dismiss={this.dismissNotification}
                    notifications={this.state.notifications} />
            </main>
        )
    };
}

export default Main;
