import React from 'react';
import SearchInputSuggestBox from '../searchInputSuggestBox/SearchInputSuggestBox';

import SearchInputStyles from './SearchInputStyles';


class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    handleChange = (e) => {
        // Set input value
        this.setState({inputValue: e.target.value});
    };

    render() {
        const {
            items,
        } = this.props;

        return(
           <fieldset>
               {/* Text field */}
               <input
                   onChange={this.handleChange}
                   value={this.state.inputValue}
                   type="text" />

               {/* Suggestions */}
               <SearchInputSuggestBox
                   inputValue={this.state.inputValue}
                   items={items} />
           </fieldset>
        );
    }
}

export default SearchInput;