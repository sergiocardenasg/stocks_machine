class Sector {

    static sectorContainer = document.getElementById("sector-container")
    static all = []

    sectorHTML() {
        this.element.innerHTML += `
            <div>
                <button>${this.name}</button>
            </div>
        `
        return this.element
    }

    sectorButton(sector){
        Sector.sectorContainer.appendChild(this.sectorHTML())
    }
}