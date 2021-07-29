class StockService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getStocks() {
        fetch(`${this.endpoint}/stocks`)
        .then(resp => resp.json())
        .then(stocks => {
            for (const stock of stocks) {
                const s = new Stock(stock)
                s.slapOnDOM()
            }
        })
    }

    createStock() {
        // if (!document.querySelector("input[type=radio]").checked) {
        //     alert("Please select a sector for the stock.");
        // }
        // else {
        //     return true
        // }

        const stock = {
            company: document.getElementById("company").value,
            ticker: document.getElementById("ticker").value,
            price: document.getElementById("price").value,
            sector_id: document.querySelector("input[type=radio]:checked").id
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
            console.log(s)
            s.slapOnDOM()
            filterSelection("all")
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            document.getElementById("all-sec").classList += " active";
        })
    }

    deleteStock(id){
        fetch(`${this.endpoint}/stocks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(alert('Stock has been deleted.'))
        let myobj = document.getElementById(`stock-${id}`);
        myobj.remove();
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
