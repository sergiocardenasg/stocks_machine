class Sector {

    static sectorContainer = document.getElementById("sector-container")
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name

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