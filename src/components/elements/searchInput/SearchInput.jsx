import React from 'react';
import SearchInputSuggestBox from '../searchInputSuggestBox/SearchInputSuggestBox';

import SearchInputStyles from './SearchInputStyles';


class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            showSuggestBox: false,
            clearInput: true,
        }
    }

    handleChange = (event) => {
        // Set input value
        this.setState({
            inputValue: event.target.value,
        });
    };

    setSelectedItem = (coinName, fullCurrencyName) => {
        // Set selected item from  'SearchInputSuggestBox'
        this.setState({
            inputValue: fullCurrencyName,
            clearInput: false,
        });
        this.props.setValue(coinName);
    };

    focusInputStatus = (isFocus) => {
        setTimeout(() => {
            if (this.state.clearInput) {
                this.setState({ inputValue: '', });
            }
            this.setState({
                showSuggestBox: isFocus,
                clearInput: true,
            });
        }, 10);
    };

    render() {
        const {
            items,
            label,
        } = this.props;

        return(
           <fieldset style={SearchInputStyles.fieldSet}>
               {/* Text field */}
               <input
                   style={SearchInputStyles.input}
                   placeholder={label}
                   onFocus={() => this.focusInputStatus(true)}
                   onBlur={() => this.focusInputStatus(false)}
                   onChange={this.handleChange}
                   value={this.state.inputValue}
                   type='text' />

               {/* Suggestions */}
               <SearchInputSuggestBox
                   suggestBoxStatus={this.state.showSuggestBox}
                   setSelectedItem={this.setSelectedItem}
                   inputValue={this.state.inputValue}
                   items={items} />
           </fieldset>
        );
    }
}

export default SearchInput;