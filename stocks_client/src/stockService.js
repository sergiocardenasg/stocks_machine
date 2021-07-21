class StockService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getStocks() {
        fetch(`${this.endpoint}/stocks`)
        .then(resp => resp.json())
        .then(stocks => {
            debugger
        })
    }
}