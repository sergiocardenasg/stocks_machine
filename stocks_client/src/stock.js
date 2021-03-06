class Stock {
    static all = []
    static stockContainer = document.getElementById("stocks-container")
    static formContainer = document.getElementById("form-container")
    

    constructor({id, company, ticker, price, sector}){
        this.id = id
        this.company = company
        this.ticker = ticker
        this.price = price
        //this.sector_id = sector_id
        this.sector = sector

        this.element = document.createElement("li")
        this.element.dataset.id = this.id
        this.element.id = `stock-${this.id}`
        this.element.addEventListener('click', this.deleteClick)
        Stock.all.push(this)
    }

    stockHTML() {
        this.element.innerHTML += `
            <div class="filterDiv ${this.sector.name} show">
                <br>
                <h5 class="ticker">${this.ticker}</h5>
                <h7 class="sector">${this.sector.name}</h7> <br>
                <h7 class="name">${this.company}</h7> <br>
                <h8 class="price">$${this.price}</h8> <br>
                <button id="deleteBtn">Delete</button>
            </div>
        `
        return this.element
    }

    slapOnDOM(){
        Stock.stockContainer.appendChild(this.stockHTML())
    }

    static renderForm() {
        // sectorIDs = sectors.map(sector => sector.sector_id);
        // sectorNames = sectors.map(sector => sector.name);
        Stock.formContainer.innerHTML += `
        <form id="new-stock-form">
            Company: <input type="text" id="company" required>
            Ticker: <input type="text" id="ticker" required>
            Price: <input type="text" id="price" required> <br>
            Sector: <br>
                <input type="radio" id="1" name="sector" value="Technology">
                <label for="tech">Technology</label><br>
                <input type="radio" id="2" name="sector" value="Financials">
                <label for="financials">Financials</label><br>
                <input type="radio" id="3" name="sector" value="Real Estate">
                <label for="realestate">Real Estate</label><br>
                <input type="radio" id="4" name="sector" value="Energy">
                <label for="energy">Energy</label><br>
                <input type="radio" id="5" name="sector" value="Materials">
                <label for="materials">Materials</label><br>
                <input type="radio" id="6" name="sector" value="Healthcare">
                <label for="healthcare">Healthcare</label><br>
                <input type="radio" id="7" name="sector" value="Industrials">
                <label for="industrials">Industrials</label><br>
                <input type="radio" id="8" name="sector" value="Consumer Discretionary">
                <label for="disc">Consumer Discretionary</label><br>
                <input type="radio" id="9" name="sector" value="Consumer Staples">
                <label for="staples">Consumer Staples</label><br>
                <input type="radio" id="10" name="sector" value="Utilities">
                <label for="utilities">Utilities</label><br>
                <input type="radio" id="11" name="sector" value="Telecommunication">
                <label for="telecom">Telecommunication</label><br>
            <input type="submit" id="create btn-secondary">
        <form>
    `
    }
    
    deleteClick = () => {
        if (event.target.innerText === "Delete"){
            stockService.deleteStock(this.id)
        }
    }
}