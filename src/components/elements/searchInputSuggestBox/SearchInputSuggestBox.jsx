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
        this.setState({
            itemsForShowing: newItems,
        });
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.inputValue.length) {
            this.calcList(this.props.items, nextProps.inputValue);
        } else {
            this.setState({
                itemsForShowing: [],
            });
        }
    }

    render() {
        return(
           <ul>
               {this.state.itemsForShowing.map(item =>
                   <li key={HelpersFoo.getRandomNumber()}>{item.code} - {item.name}</li>)}
           </ul>
        );
    }
}

export default SearchInputSuggestBox;