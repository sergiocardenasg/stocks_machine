class StockService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getStocks() {
        fetch(`${this.endpoint}/stocks`)
        .then(resp => resp.json())
        .then(stocks => {
            for (const stock of stocks) {
                const s = new Stock (stock)
                s.slapOnDOM()
            }
        })
    }

    // getStocksAPI() {
    //     fetch(`https://finnhub.io/api/v1/search?q=apple&token=btco2tf48v6vroferuag`)
    //         .then(resp => resp.json())
    //         .then(stocks => {
    //         for (const stock of stocks) {
    //             const s = new Stock (stock)
    //             s.slapOnDOM()
    //         }
    //     })
    // }
}
