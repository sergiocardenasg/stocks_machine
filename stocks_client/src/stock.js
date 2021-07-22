class Stock {
    static all = []
    static stockContainer = document.getElementById("stocks-container")
    static formContainer = document.getElementById("form-container")

    constructor({id, company, ticker, price, sector_id}){
        this.id = id
        this.company = company
        this.ticker = ticker
        this.price = price
        this.sector_id = sector_id

        this.element = document.createElement("li")
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
        Stock.stockContainer.appendChild(this.stockHTML())
    }

    static renderForm() {
        Stock.formContainer.innerHTML += `
        <form id="new-stock-form">
            Company: <input type="text" id="company">
            Ticker: <input type="text" id="ticker">
            Price: <input type="text" id="price">
            <input type="submit" id="create">
        <form>
    `
    }
}