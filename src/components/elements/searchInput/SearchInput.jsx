import React from 'react';
import SearchInputSuggestBox from '../searchInputSuggestBox/SearchInputSuggestBox';

import SearchInputStyles from './SearchInputStyles';


class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            showSuggestBox: false,
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
        });
        this.props.setValue(coinName, true);
    };

    setSuggestBoxStatus = (status) => {
        setTimeout(() => {
            this.setState({
                showSuggestBox: status,
            })
        }, 10);
    };

    render() {
        const {
            items,
        } = this.props;

        return(
           <fieldset style={SearchInputStyles.fieldSet}>
               {/* Text field */}
               <input
                   style={SearchInputStyles.input}
                   onFocus={() => this.setSuggestBoxStatus(true)}
                   onBlur={() => this.setSuggestBoxStatus(false)}
                   onChange={this.handleChange}
                   value={this.state.inputValue}
                   type="text" />

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