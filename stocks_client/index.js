const baseURL = "http://127.0.0.1:3000";
const addBtn = document.querySelector("#new-stock-btn");
const stockForm = document.querySelector("#form-container");
let addStock = false;

// const sectorService = new SectorService(baseURL)
// sectorService.getSectors()

const stockService = new StockService(baseURL)
stockService.getStocks()
Stock.renderForm()

addBtn.addEventListener('click', () => {
    addStock = !addStock
    if (addStock) {
        stockForm.style.display = 'block'
        Stock.stockForm.addEventListener('submit', function () {
            // event.preventDefault()
            // stockService.createStock()
            debugger
        })
    } 
    else {
        stockForm.style.display = 'none'
    }
  });