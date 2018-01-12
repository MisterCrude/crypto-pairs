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
            keyboardButtonsActive: '',
        }
    }

    handleChange = (event) => {
        // Set input value
        this.setState({
            inputValue: event.target.value,
        });
    };

    handleKeyboard = (event) => {
        this.setState({
            keyboardButtonsActive: event.key,
        });

        if (event.key === 'Enter') {
            event.preventDefault();

            this.setState(prevState => ({
                showSuggestBox: !prevState.showSuggestBox
            }));
        }
    };

    focusInputStatus = (isFocus) => {
        setTimeout(() => {
            if (this.state.clearInput) {
                this.setState({
                    inputValue: '',
                    keyboardButtonsActive: '',
                });
            }
            this.setState({
                showSuggestBox: isFocus,
                clearInput: true,
            });
        }, 10);
    };

    setSelectedItem = (coinName, fullCurrencyName) => {
        // Set selected item from  'SearchInputSuggestBox'

        this.setState({
            inputValue: fullCurrencyName,
            clearInput: false,
        });
        this.props.setValue(coinName);
    };

    componentWillReceiveProps(nextProps) {
       if (nextProps.clearInput) {
           this.setState({
               inputValue: '',
           });
       }
    }

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
                   onClick={() => this.focusInputStatus(true)}
                   onBlur={() => this.focusInputStatus(false)}
                   onChange={this.handleChange}
                   onKeyDown={this.handleKeyboard}
                   value={this.state.inputValue}
                   type='text' />

               {/* Suggestions */}
               <SearchInputSuggestBox
                   showSuggestBox={this.state.showSuggestBox}
                   setSelectedItem={this.setSelectedItem}
                   inputValue={this.state.inputValue}
                   keyboardButtonsActive={this.state.keyboardButtonsActive}
                   items={items} />
           </fieldset>
        );
    }
}

export default SearchInput;