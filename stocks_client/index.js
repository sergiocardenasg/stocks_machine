const baseURL = "http://127.0.0.1:3000";
const addBtn = document.querySelector("#new-stock-btn");
const stockForm = document.querySelector("#form-container");
let addStock = false;
const stockService = new StockService(baseURL)
const sectorService = new SectorService(baseURL)

sectorService.getSectors()
stockService.getStocks()
Stock.renderForm()


addBtn.addEventListener('click', () => {
    addStock = !addStock
    if (addStock) {
        addBtn.innerHTML = "Hide Form"
        stockForm.style.display = 'block'
        Stock.formContainer.addEventListener('submit', () => {
            event.preventDefault()
            stockService.createStock()
            event.target.reset()
            stockForm.style.display = 'none'
            addBtn.innerHTML = "Add a Stock!"
        })
    } 
    else {
        addBtn.innerHTML = "Add a Stock!"
        stockForm.style.display = 'none'
    }
  });

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("sectors-container");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}