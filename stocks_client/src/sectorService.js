class SectorService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getSectors() {
        fetch(`${this.endpoint}/sectors`)
        .then(resp => resp.json())
        // .then(sectors => {
        //     debugger
        // })
    }
}