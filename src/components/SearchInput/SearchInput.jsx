import React from 'react';
import PropTypes from 'prop-types';
import SearchInputSuggestBox from '../SearchInputSuggestBox';
import SearchInputStyles from './SearchInputStyles';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            showSuggestBox: false,
            clearInput: true,
            keyboardButtonsActive: ''
        };
    }

    handleChange = event => {
        // Set input value
        this.setState({
            inputValue: event.target.value
        });
    };

    handleKeyboard = event => {
        this.setState({
            keyboardButtonsActive: event.key
        });

        if (event.key === 'Enter') {
            event.preventDefault();

            this.setState(prevState => ({
                showSuggestBox: !prevState.showSuggestBox
            }));
        }
    };

    focusInputStatus = isFocus => {
        if (this.state.clearInput) {
            this.setState({
                inputValue: '',
                keyboardButtonsActive: ''
            });
        }
        this.setState({
            showSuggestBox: isFocus,
            clearInput: true
        });
    };

    setSelectedItem = (coinName, fullCurrencyName) => {
        this.setState({
            inputValue: fullCurrencyName,
            clearInput: false,
            showSuggestBox: false
        });
        this.props.setValue(coinName);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.clearInput) {
            this.setState({ inputValue: '' });
        }
    }

    render() {
        const { items, label, deviceType } = this.props;

        return (
            <fieldset style={SearchInputStyles.fieldSet}>
                {/* Text field */}
                <input
                    style={SearchInputStyles.input}
                    placeholder={label}
                    onClick={() => this.focusInputStatus(true)}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyboard}
                    value={this.state.inputValue}
                    type="text"
                />

                {/* Suggestions */}
                <SearchInputSuggestBox
                    deviceType={deviceType}
                    showSuggestBox={this.state.showSuggestBox}
                    setSelectedItem={this.setSelectedItem}
                    inputValue={this.state.inputValue}
                    keyboardButtonsActive={this.state.keyboardButtonsActive}
                    items={items}
                />
            </fieldset>
        );
    }
}

SearchInput.defaultName = 'SearchInput';
SearchInput.propTypes = {
    items: PropTypes.array,
    deviceType: PropTypes.string,
    setValue: PropTypes.func.isRequired,
    label: PropTypes.string
};
SearchInput.defaultProps = {
    items: [],
    label: '',
    deviceType: 'Desktop'
};

export default SearchInput;
