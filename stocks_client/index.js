const baseURL = "http://127.0.0.1:3000";
const addBtn = document.querySelector("#new-stock-btn");
const stockForm = document.querySelector("#form-container");
let addStock = false;
const stockService = new StockService(baseURL)

// const sectorService = new SectorService(baseURL)
// sectorService.getSectors()

stockService.getStocks()
Stock.renderForm()

addBtn.addEventListener('click', () => {
    addStock = !addStock
    if (addStock) {
        addBtn.innerHTML = "Hide Form"
        stockForm.style.display = 'block'
        Stock.formContainer.addEventListener('submit', () => {
            //event.preventDefault()
            stockService.createStock()
        })
    } 
    else {
        addBtn.innerHTML = "Add a Stock!"
        stockForm.style.display = 'none'
    }
  });