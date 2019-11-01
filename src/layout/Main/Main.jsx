import React from 'react';
import PropTypes from 'prop-types';
import CurrenciesPairs from '../../components/CurrenciesPairs';
import AddNewCurrency from '../../components/AddNewCurrency';
import NotificationList from '../../components/NotificationList';
import { Helpers } from '../../config/helpers';
import NotificationsType from '../../config/notification-types';
import FontAwesome from 'react-fontawesome';
import Api from '../../config/Api';
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
            showThrobber: true,
            hasError: false
        };
    }

    // Add new currencies pair row with
    addNewCurrenciesPair = (
        e,
        baseCoin = this.state.baseCoin,
        targetCoin = this.state.targetCoin
    ) => {
        if (e) {
            e.preventDefault();
        }

        if (!baseCoin || !targetCoin) {
            this.showNotification('Please, provide correct Base and Target coins', 'error');

            // Clear inputs with coins
            this.setState({
                baseCoin: '',
                targetCoin: ''
            });
            return;
        }

        // Check if you have added same pair
        if (this.hasSamePair({ base: baseCoin, target: targetCoin }, this.state.currenciesPairs)) {
            this.showNotification(`You already have ${baseCoin}/${targetCoin} pair`, 'warning');

            // Clear inputs with coins
            this.setState({
                baseCoin: '',
                targetCoin: ''
            });
            return;
        }

        // Check if set same coin for both inputs
        if (baseCoin === targetCoin) {
            this.showNotification(`You can't set same coin for both inputs`, 'warning');

            // Clear inputs with coins
            this.setState({
                baseCoin: '',
                targetCoin: ''
            });
            return;
        }

        // Show throbber
        this.setState({
            showThrobber: true
        });

        Api.currencyRate(baseCoin, targetCoin)
            .then(resp => {
                this.setState(prevState => ({
                    currenciesPairs: [...prevState.currenciesPairs, resp],
                    showThrobber: false,
                    baseCoin: '',
                    targetCoin: ''
                }));
            })
            .catch(() => {
                this.setState({
                    hasError: true
                });
            });
    };

    // Show notification
    showNotification(notificationText, type) {
        let typeStyles;

        switch (type) {
            case 'success':
                typeStyles = NotificationsType.success;
                break;
            case 'error':
                typeStyles = NotificationsType.error;
                break;
            default:
                typeStyles = NotificationsType.warning;
                break;
        }

        let notice = {
            ...typeStyles,
            // Add unique ID for every 'the same pair' notification
            id: Helpers.getRandomNumber('main'),
            content: notificationText
        };

        this.setState(prevState => {
            let oldNotifications = prevState.notifications;

            if (oldNotifications.length > 3) {
                oldNotifications.shift();
            }
            return { notifications: [...oldNotifications, { ...notice }] };
        });
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
    removeCurrenciesPair = id => {
        this.setState(prevState => ({
            currenciesPairs: prevState.currenciesPairs.filter(item => item.id !== id)
        }));
    };

    // Set currencies list on selects
    setCoin = (coinName, isBaseCoin) => {
        if (isBaseCoin) {
            this.setState({
                baseCoin: coinName
            });
        } else {
            this.setState({
                targetCoin: coinName
            });
        }
    };

    // Close notifications
    dismissNotification = (event, notificationId) => {
        event && event.preventDefault();

        this.setState(prevState => ({
            notifications: prevState.notifications.filter(item => item.id !== notificationId)
        }));
    };

    handleClickSaveButton = e => {
        e.preventDefault();

        localStorage.setItem('pairs', JSON.stringify(this.state.currenciesPairs));

        this.showNotification(`You pairs successfully saved`, 'success');
    };

    setStartedCurrencies = (baseCoin, targetCoin) => {
        let pairs = localStorage.getItem('pairs');

        if (pairs) {
            pairs = JSON.parse(pairs);
            pairs.forEach(pair => {
                this.addNewCurrenciesPair(null, pair.base, pair.target);
            });
        } else {
            this.addNewCurrenciesPair(null, baseCoin, targetCoin);
        }
    };

    componentDidMount() {
        let baseList = Api.getBaseCurrenciesList;
        let targetList = Api.getTargetCurrenciesList;

        this.setState(prevState => ({
            baseCurrencies: [...baseList],
            targetCurrencies: [...targetList]
        }));

        this.setStartedCurrencies(baseList[0].code, targetList[0].code);
    }

    render() {
        const { deviceType } = this.props;

        return (
            <main
                style={{
                    ...MainStyles.container,
                    ...MainStyles[`container${deviceType}`]
                }}
            >
                {/* Currencies list */}
                <CurrenciesPairs
                    hasError={this.state.hasError}
                    deviceType={deviceType}
                    currenciesPairs={this.state.currenciesPairs}
                    showThrobber={this.state.showThrobber}
                    removeCurrenciesPair={this.removeCurrenciesPair}
                />

                {/* Fields for new pairs */}
                <AddNewCurrency
                    deviceType={deviceType}
                    baseCurrencies={this.state.baseCurrencies}
                    targetCurrencies={this.state.targetCurrencies}
                    addNewCurrenciesPair={this.addNewCurrenciesPair}
                    setCoin={this.setCoin}
                />

                {localStorage && (
                    <div style={MainStyles.buttonWrapper}>
                        <button style={MainStyles.saveButton} onClick={this.handleClickSaveButton}>
                            <FontAwesome name="save" />
                        </button>
                    </div>
                )}

                {/* Notifications */}
                <NotificationList
                    dismiss={this.dismissNotification}
                    notifications={this.state.notifications}
                />
            </main>
        );
    }
}

Main.defaultName = 'Main';
Main.propTypes = {
    deviceType: PropTypes.string
};
Main.defaultProps = {
    deviceType: 'Desktop'
};

export default Main;
