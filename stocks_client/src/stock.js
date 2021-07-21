class Stock {
    static all = []
    static stockContainer = document.getElementById("stocks-container")
    constructor({id, company, ticker, price, sector_id}){
        this.id = id
        this.company = company
        this.ticker = ticker
        this.price = price
        this.sector_id = sector_id

        this.element = document.createAttribute("li")
        this.element.dataset.id = this.id
        this.element.id = `stock-${this.id}`
        
        Stock.all.push(this)
    }

    stockHTML() {
        this.element.innerHTML += `
            <div>
                <h3>${this.ticker}</h3>
                <p>${this.company} - ${this.price}</p>
            </div>
        `
        return this.element
    }

    slapOnDOM(){
        Stock.stockContainer.appendChild(stockHTML())
    }
}