const Config = {
    // Detect prod or dev environment
    isDev:
        window &&
        window.location &&
        window.location.hostname &&
        window.location.hostname === 'localhost',

    // External API endpoint
    apiUrl: 'https://api.cryptonator.com/api',

    // Affiliate link in footer
    affiliateLink: {
        name: 'cryptonator.com',
        link: 'https://www.cryptonator.com/'
    },

    // Point for  styles
    breakpoint: 768,

    // Currencies on with you can check price base currency
    currencies: {
        fiat: [
            { shortName: 'USD', code: 'USD', name: 'US Dollar' },
            { shortName: 'EUR', code: 'EUR', name: 'Euro' },
            { shortName: 'PLN', code: 'PLN', name: 'Polish zlotys' },
            { shortName: 'RUB', code: 'RUR', name: 'Ruble' }
        ],
        crypto: [
            { shortName: 'BTC', code: 'BTC', name: 'Bitcoin' },
            { shortName: 'ETH', code: 'ETH', name: 'Ethereum' },
            { shortName: 'LTC', code: 'LTC', name: 'Litecoin' },
            { shortName: 'BCH', code: 'BCH', name: 'Bitcoin cash' },
            { shortName: 'XRP', code: 'XRP', name: 'Ripple' },
            { shortName: 'DASH', code: 'DASH', name: 'Dash' },
            { shortName: 'XMR', code: 'XMR', name: 'Monero' }
        ]
    }
};

export default Config;
