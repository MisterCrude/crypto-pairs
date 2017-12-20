import React from 'react';
import FontAwesome from 'react-fontawesome';

import AddCurrenciesListStyles from './AddNewCurrencyStyles';


class AddNewCurrency extends React.Component {
    render() {
        const {
            setCoin,
            addNewCurrenciesPair,
            baseCurrencies,
            targetCurrencies
        } = this.props;

        return (
            <form>
                {/* Base coin */}
                <label htmlFor="baseCoin">Base coin</label>
                <select id="baseCoin" onChange={(e) => setCoin(e, true)}>
                    {baseCurrencies.map((item, i) =>
                        <option key={i} value={item.code}>
                            {item.code} - {item.name}
                        </option>)}
                </select>

                {/* Target coin */}
                <label htmlFor="targetCoin">Target coin</label>
                <select id="targetCoin" onChange={(e) => setCoin(e, false)}>
                    {targetCurrencies.map((item, i) =>
                        <option key={i} value={item.code}>
                            {item.code} - {item.name}
                        </option>)}
                </select>

                {/* Button */}
                <button onClick={addNewCurrenciesPair}>
                    Add new pair <FontAwesome name="plus"/>
                </button>
            </form>
        );
    }
}

export default AddNewCurrency;
