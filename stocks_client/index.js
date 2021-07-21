const baseURL = "http://127.0.0.1:3000"

const sectorService = new SectorService(baseURL)
sectorService.getSectors()

const stockService = new StockService(baseURL)
stockService.getStocks()