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
}