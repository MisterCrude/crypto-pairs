import React from 'react';
import CurrenciesList from '../../elements/currenciesList/CurrenciesList';
import AddNewCurrency from '../../elements/addNewCurrency/AddNewCurrency';

import MainStyles from './MainStyles';


class Main extends React.Component {
    render () {
        return (
            <main>
                {/* Currencies list */}
                <CurrenciesList />

                {/* Currencies list */}
                <button>add new line</button>
                <AddNewCurrency />

                <button>add to screen</button>
            </main>
        )
    }
}

export default Main;
