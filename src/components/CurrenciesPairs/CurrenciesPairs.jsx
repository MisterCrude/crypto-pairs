import React from 'react';
import PropTypes from 'prop-types';
import CurrencyRow from '../CurrencyRow';
import FontAwesome from 'react-fontawesome';
import CurrenciesPairsStyles from './CurrenciesPairsStyles';

const CurrenciesPairs = ({
    showThrobber,
    currenciesPairs,
    removeCurrenciesPair,
    deviceType,
    hasError
}) => (
    <div style={{ ...CurrenciesPairsStyles[`tableWrapper${deviceType}`] }}>
        <table style={CurrenciesPairsStyles.table}>
            <tbody>
                {/* Currency row */}
                {currenciesPairs.map(currenciesRow => (
                    <CurrencyRow
                        deviceType={deviceType}
                        key={currenciesRow.id}
                        change={currenciesRow.change}
                        changeUp={currenciesRow.changeUp}
                        changePercents={currenciesRow.changePercents}
                        base={currenciesRow.base}
                        target={currenciesRow.target}
                        price={currenciesRow.price}
                        hideRemoveButton={currenciesPairs.length === 1}
                        removeCurrenciesPair={() => removeCurrenciesPair(currenciesRow.id)}
                    />
                ))}

                {(showThrobber || hasError) && (
                    <tr>
                        <td colSpan="5" style={CurrenciesPairsStyles.spinnerWrapper}>
                            {/* API error */}
                            {hasError && (
                                <h2 style={CurrenciesPairsStyles.errorMsg}>
                                    Sorry, some server error. Try again later.
                                </h2>
                            )}

                            {/* Throbber */}
                            {showThrobber && !hasError && (
                                <FontAwesome
                                    style={CurrenciesPairsStyles.spinner}
                                    name="spinner"
                                    spin
                                />
                            )}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

CurrenciesPairs.defaultName = 'CurrenciesPairs';
CurrenciesPairs.propTypes = {
    showThrobber: PropTypes.bool,
    currenciesPairs: PropTypes.array.isRequired,
    removeCurrenciesPair: PropTypes.func.isRequired,
    deviceType: PropTypes.string,
    hasError: PropTypes.bool
};
CurrenciesPairs.defaultProps = {
    showThrobber: false,
    deviceType: 'Desktop',
    hasError: false
};

export default CurrenciesPairs;
