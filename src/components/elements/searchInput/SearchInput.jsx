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
            this.setState({ showSuggestBox: status, });
            // if (status) {
            //     this.setState({ inputValue: '', });
            // }
        }, 10);
    };

    // componentWillReceiveProps(nextProps) {
    //     // Set default value
    //     if (nextProps.items.length && !this.state.inputValue) {
    //         this.setState({
    //             inputValue: `${nextProps.items[0].shortName} - ${nextProps.items[0].name}`,
    //         });
    //     }
    // }

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