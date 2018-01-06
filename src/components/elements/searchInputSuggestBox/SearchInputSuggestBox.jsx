import React from 'react';
import HelpersFoo from '../../../config/helpers-foo';
import variables from '../../../styles/variables';

import SearchInputSuggestBoxStyles from './SearchInputSuggestBoxStyles';


class SearchInputSuggestBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsForShowing: [],
            activeItem: 0,
        };
        this.listItems = [];
    }

    setActiveItemState = (newState) => {
        this.setState({activeItem: newState,}, () => this.setHoverStyle(this.state.activeItem))
    };

    setSelectedItem = (coinName, fullCurrencyName) => {
        this.props.setSelectedItem(coinName, fullCurrencyName)
    };

    setHoverStyle = () => {
        this.listItems.forEach((item, index) => {
            item.style.backgroundColor = (this.state.activeItem === index) ? variables.lightGay : variables.white;
        });
    };

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

    selectItemByArrows = (moveDirection) => {
        let newState = 0;

        if (!moveDirection) {
            return;
        }

        // Is it not last item in list?
        if (moveDirection === 'ArrowUp') {
            newState = (this.state.activeItem <= 0) ? 0 : this.state.activeItem-1;
        } else if (moveDirection === 'ArrowDown') {
            newState = ((this.state.activeItem+1) >= this.listItems.length) ? this.state.activeItem : this.state.activeItem+1;
        }
        this.setActiveItemState(newState);
    };

    componentWillReceiveProps(nextProps) {
        this.calcList(this.props.items, nextProps.inputValue);
        this.selectItemByArrows(nextProps.keyboardButtonsActive);
        // if (nextProps.showSuggestBox) {
        //     setInterval(() => this.setHoverStyle(), 10)
        // }  else {
        //     this.setActiveItemState(0)
        // }
    }

    render() {
        const {
            showSuggestBox,
        } = this.props;

        return(
            <ul style={{...SearchInputSuggestBoxStyles.list, display: (showSuggestBox) ? 'block' : 'none'}}>
                {this.state.itemsForShowing.map((item, index) =>
                    <li
                        style={SearchInputSuggestBoxStyles.itemPointer}
                        key={HelpersFoo.getRandomNumber('suggestbox')}
                        ref={(el => this.listItems[index] = el)}
                        onMouseEnter={() => this.setActiveItemState(index)}
                        onClick={() => this.setSelectedItem(item.code, `${item.code} - ${item.name}`)} >{item.code} - {item.name}</li>)}

                    {/* No results */}
                    {this.state.itemsForShowing.length == 0 &&
                        <li style={SearchInputSuggestBoxStyles.item}>No results</li>}
            </ul>
        );
    }
}

export default SearchInputSuggestBox;