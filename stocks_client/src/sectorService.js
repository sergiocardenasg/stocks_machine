class SectorService {

    static sectorContainer = document.getElementById("sector-container")

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getSectors() {
        fetch(`${this.endpoint}/sectors`)
        .then(resp => resp.json())
        .then(sectors => {
            sectors.forEach(sector => {
                Sector.all.push(sector)
            })
        })
        // .then(Sector.all.map(sector => Sector.sectorContainer.appendChild(`<button>${sector.name}</button>`)))
        // debugger
    }
}