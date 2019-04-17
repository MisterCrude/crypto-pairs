import React from 'react';
import PropTypes from 'prop-types';
import variables from '../../styles/variables';
import SearchInputSuggestBoxStyles from './SearchInputSuggestBoxStyles';

class SearchInputSuggestBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsForShowing: [],
            activeItem: 0,
            showSuggestBox: false
        };
        this.listItems = [];
    }

    setActiveItemState = newState => {
        this.setState({ activeItem: newState }, () => this.setHoverStyle(this.state.activeItem));
    };

    setHoverStyle = () => {
        if (!this.listItems.length) {
            return;
        }

        this.listItems.forEach((item, index) => {
            if (item === null) return;
            item.style.backgroundColor =
                this.state.activeItem === index ? variables.lightGay : variables.white;
        });
    };

    calcList = (items, inputValue) => {
        // Create regexp by using 'inputValue' from parent
        let reg = new RegExp(inputValue.toLocaleLowerCase());
        // Filtered match 'inputValue' substr in 'items' array
        let newItems = items.filter(item => {
            return (
                reg.test(item.shortName.toLocaleLowerCase()) ||
                reg.test(item.name.toLocaleLowerCase())
            );
        });

        // Update state
        if (inputValue.search('-') + 1) {
            return;
        }
        this.setState({
            itemsForShowing: newItems
        });
    };

    selectItemInCoinList = moveDirection => {
        let newState = 0;

        if (!moveDirection) {
            return;
        }

        // Is it not last item in list?
        if (moveDirection === 'ArrowUp') {
            newState = this.state.activeItem <= 0 ? 0 : this.state.activeItem - 1;
        } else if (moveDirection === 'ArrowDown') {
            newState =
                this.state.activeItem + 1 >= this.listItems.length
                    ? this.state.activeItem
                    : this.state.activeItem + 1;
        } else if (moveDirection === 'Enter') {
            let coin = this.listItems[this.state.activeItem];
            coin.click();
        }
        this.setActiveItemState(newState);
    };

    componentWillReceiveProps(nextProps) {
        this.calcList(this.props.items, nextProps.inputValue);

        // mark first item in list
        if (nextProps.showSuggestBox) {
            setTimeout(() => this.setHoverStyle(), 10);
        } else {
            this.setActiveItemState(0);
        }
        // open drop down
        this.setState({
            showSuggestBox: nextProps.showSuggestBox
        });
        if (
            this.state.showSuggestBox === nextProps.showSuggestBox &&
            nextProps.keyboardButtonsActive === 'Enter'
        ) {
            return;
        }
        this.selectItemInCoinList(nextProps.keyboardButtonsActive);
    }

    render() {
        const { setSelectedItem, deviceType } = this.props;

        return (
            <ul
                style={{
                    ...SearchInputSuggestBoxStyles.list,
                    ...SearchInputSuggestBoxStyles[`list${deviceType}`],
                    display: this.state.showSuggestBox ? 'block' : 'none'
                }}
            >
                {this.state.itemsForShowing.map((item, index) => (
                    <li
                        style={SearchInputSuggestBoxStyles.itemPointer}
                        key={item.code}
                        ref={el => (this.listItems[index] = el)}
                        onMouseEnter={() => this.setActiveItemState(index)}
                        onClick={() => setSelectedItem(item.code, `${item.code} - ${item.name}`)}
                    >
                        {item.code} - {item.name}
                    </li>
                ))}

                {/* No results */}
                {this.state.itemsForShowing.length === 0 && (
                    <li style={SearchInputSuggestBoxStyles.item}>No results</li>
                )}
            </ul>
        );
    }
}

SearchInputSuggestBox.defaultName = 'SearchInputSuggestBox';
SearchInputSuggestBox.propTypes = {
    setSelectedItem: PropTypes.func.isRequired,
    keyboardButtonsActive: PropTypes.string,
    showSuggestBox: PropTypes.bool,
    inputValue: PropTypes.string,
    deviceType: PropTypes.string,
    items: PropTypes.array
};
SearchInputSuggestBox.defaultProps = {
    keyboardButtonsActive: '',
    inputValue: '',
    items: [],
    deviceType: 'Desktop'
};

export default SearchInputSuggestBox;
