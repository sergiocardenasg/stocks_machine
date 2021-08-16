class Sector {

    static sectorContainer = document.getElementById("sector-container")
    static all = []

    constructor({id, name, stocks}){
        this.id = id
        this.name = name
        this.stocks = stocks

        Sector.all.push(this)
    }

    static sectorHTML() {
        // setTimeout(function () {
        //     const btns = Sector.all.map(sector => {return `<button>${sector.name}</button>`})
        // }, 2000)
        // debugger
        // Sector.sectorContainer.appendChild(btns)
    }

}