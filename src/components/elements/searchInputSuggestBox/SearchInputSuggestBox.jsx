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

    setHoverStyle = (itemNumber) => {
        if (!itemNumber && itemNumber != 0) {
            return;
        }

        this.listItems.forEach((item, index )=> {
            item.style.backgroundColor = (itemNumber === index) ? variables.lightGay : variables.white;
        });
    };

    moveItemHighlight = (moveDirection) => {
        if (!moveDirection) {
            this.setState({ activeItem: 0 });
            return;
        }

        // Is it not last item in list?
        if (moveDirection === 'ArrowUp') {
            this.setState(prevState => {
                let newState = (prevState.activeItem <= 0) ? 0 : prevState.activeItem-1;
                return { activeItem: newState };
            });
        } else if (moveDirection === 'ArrowDown') {
            this.setState(prevState => {
                let newState = ((prevState.activeItem+1) >= this.listItems.length) ? prevState.activeItem : prevState.activeItem+1;
                return  { activeItem: newState };
            });
        }
        // Set styles to current item
        setTimeout(() => {
            this.setHoverStyle(this.state.activeItem);
        }, 10);
    };

    componentWillReceiveProps(nextProps) {
        this.calcList(this.props.items, nextProps.inputValue);
        this.moveItemHighlight(nextProps.keyboardButtonsActive);

        // Highlight first item by default
        // if (this.listItems.length) {
        //     setTimeout(() => {
        //         this.setHoverStyle(this.state.activeItem)
        //     }, 10);
        // }
    }

    render() {
        const {
            suggestBoxStatus,
        } = this.props;

        return(
            <ul style={{...SearchInputSuggestBoxStyles.list, display: (suggestBoxStatus) ? 'block' : 'none'}}>
                {this.state.itemsForShowing.map((item, index) =>
                    <li
                        style={{...SearchInputSuggestBoxStyles.item, cursor: 'pointer'}}
                        key={HelpersFoo.getRandomNumber()}
                        ref={(el => this.listItems[index] = el)}
                        onClick={() => this.setSelectedItem(item.code, `${item.code} - ${item.name}`)}
                        onMouseOver={() => this.setHoverStyle(index)} >{item.code} - {item.name}</li>)}

                    {/* No results */}
                    {this.state.itemsForShowing.length == 0 &&
                        <li style={SearchInputSuggestBoxStyles.item}>No results</li>}
            </ul>
        );
    }
}

export default SearchInputSuggestBox;