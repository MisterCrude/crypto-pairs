import React from 'react';
import HelpersFoo from '../../../config/helpers-foo';
import variables from '../../../styles/variables';

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

    hoverAnimation = (event, isOverEvent) => {
        let item = event.target;
        let animationOptions = {
            easing: 'ease-in-out',
            iterations: '1',
            fill: 'forwards',
            duration: 300,
        };
        let backgroundColor = (isOverEvent) ? [variables.white, variables.lightGay] : [variables.lightGay, variables.white];

        item.animate({backgroundColor}, animationOptions);
    };

    componentWillReceiveProps(nextProps) {
        this.calcList(this.props.items, nextProps.inputValue);
    }

    render() {
        const {
            suggestBoxStatus,
        } = this.props;

        return(
            <ul style={{...SearchInputSuggestBoxStyles.list, display: (suggestBoxStatus) ? 'block' : 'none'}}>
                {this.state.itemsForShowing.map(item =>
                    <li
                        style={{...SearchInputSuggestBoxStyles.item, cursor: 'pointer'}}
                        key={HelpersFoo.getRandomNumber()}
                        onClick={() => this.setSelectedItem(item.code, `${item.code} - ${item.name}`)}
                        onMouseOver={(e) => this.hoverAnimation(e, true)}
                        onMouseLeave={(e) => this.hoverAnimation(e, false)} >{item.code} - {item.name}</li>)}

                    {/* No results */}
                    {this.state.itemsForShowing.length == 0 && <li style={SearchInputSuggestBoxStyles.item}>No results</li>}
            </ul>
        );
    }
}

export default SearchInputSuggestBox;