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
            showSuggestBox: false,
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
        if (!this.listItems.length) {
            return;
        }

        this.listItems.forEach((item, index) => {
            if (item.element === null) return;
            item.element.style.backgroundColor = (this.state.activeItem === index) ? variables.lightGay : variables.white;
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
        } else if (moveDirection === 'Enter') {
            // let coin = {...this.listItems[this.state.activeItem]};
            // this.setSelectedItem('BTC', 'sdsd')
            // console.log('Enter');
        }
        this.setActiveItemState(newState);
    };

    componentWillReceiveProps(nextProps) {
        this.calcList(this.props.items, nextProps.inputValue);

        this.selectItemByArrows(nextProps.keyboardButtonsActive);
        if (nextProps.showSuggestBox) {
            setTimeout(() => this.setHoverStyle(), 10)
        } else {
            this.setActiveItemState(0)
        }

        this.setState({
            showSuggestBox: nextProps.showSuggestBox,
        })
    }

    render() {
        return(
            <ul style={{...SearchInputSuggestBoxStyles.list, display: (this.state.showSuggestBox) ? 'block' : 'none'}}>
                {this.state.itemsForShowing.map((item, index) =>
                    <li
                        style={SearchInputSuggestBoxStyles.itemPointer}
                        key={HelpersFoo.getRandomNumber('suggestbox')}
                        ref={(el => this.listItems[index] = {element: el, code: item.code, fullName: `${item.code} - ${item.name}`})}
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