class SectorService {

    static sectorContainer = document.getElementById("sector-container")

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getSectors() {
        fetch(`${this.endpoint}/sectors`)
        .then(resp => resp.json())
        .then(sectors => {
            // sectors.forEach(sector => {
            //     Sector.all.push(sector)
            // })
            for (const sector of sectors) {
                const sect = new Sector(sector)
            }
        })
    }
}