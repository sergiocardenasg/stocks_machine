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

    createStock() {
        const stock = {
            company: document.getElementById("company").value,
            ticker: document.getElementById("ticker").value,
            price: document.getElementById("price").value,
            sector_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(stock)
        }

        fetch(`${this.endpoint}/stocks`, configObj)
        .then(resp => resp.json())
        .then(stock => {
            const s = new Stock(stock)
            s.slapOnDOM()
        })
    }

    // postStock(stockData) {
    //     fetch(`${this.endpoint}/stocks`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Accept: "application/json"
    //         },
    //         body: JSON.stringify({
    //           "company": stockData.company.value,
    //           "ticker": stockData.ticker.value,
    //           "price": stockData.price.value,
    //           "sector": stockData.sector_id.name.value,
    //         })
    //       })
    //       .then(resp => resp.json())
    //       .then((newStock) => {
    //         renderStocks(newStock)
    //       });
    //   };

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
