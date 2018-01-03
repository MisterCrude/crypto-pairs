import React from 'react';
import HelpersFoo from '../../../config/helpers-foo';
import FontAwesome from 'react-fontawesome';

import SearchInputSuggestBoxStyles from './SearchInputSuggestBoxStyles';


class SearchInputSuggestBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsForShowing: [],
        }
    }

    calcList = (items, inputValue) => {
        // Create regexp by using 'inputValue' from parent
        let reg = new RegExp(inputValue.toLocaleLowerCase());
        // Filtered match 'inputValue' substr in 'items' array
        let newItems = items.filter(item => {
            return reg.test(item.shortName.toLocaleLowerCase()) || reg.test(item.name.toLocaleLowerCase())
        });

        // Update state
        if (inputValue.search('-')+1) {
             return;
        }
        this.setState({
            itemsForShowing: newItems,
        });
    };

    setSelectedItem = (coinName, fullCurrencyName) => {
        this.props.setSelectedItem(coinName, fullCurrencyName)
    };

    componentWillReceiveProps(nextProps) {
        this.calcList(this.props.items, nextProps.inputValue);
    }

    render() {
        const {
            suggestBoxStatus,
        } = this.props;

        return(
           <ul>
               {suggestBoxStatus &&
                   this.state.itemsForShowing.map(item =>
                   <li
                       key={HelpersFoo.getRandomNumber()}
                       onClick={() => this.setSelectedItem(item.code, `${item.code} - ${item.name}`)}>{item.code} - {item.name}</li>)}
           </ul>
        );
    }
}

export default SearchInputSuggestBox;