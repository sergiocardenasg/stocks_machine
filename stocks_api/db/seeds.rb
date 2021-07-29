# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sector.create([
    {name: "Technology"},
    {name: "Financials"},
    {name: "Real Estate"},
    {name: "Energy"},
    {name: "Materials"},
    {name: "Healthcare"},
    {name: "Industrials"},
    {name: "Consumer Discretionary"},
    {name: "Consumer Staples"},
    {name: "Utilities"},
    {name: "Telecommunication"},
])

msft = Stock.create(company: "Microsoft", ticker: "MSFT", price: "275", sector_id: 1)
pypl = Stock.create(company: "Paypal", ticker: "PYPL", price: "300", sector_id: 1)
cof = Stock.create(company: "Capital One", ticker: "COF", price: "150", sector_id: 2)
ttd = Stock.create(company: "The Trade Desk", ticker: "TTD", price: "120", sector_id: 1)
meli = Stock.create(company: "Mercado Libre", ticker: "MELI", price: "1800", sector_id: 1)
uhn = Stock.create(company: "UnitedHealtcare", ticker: "UNH", price: "430", sector_id: 6)
tsla = Stock.create(company: "Tesla", ticker: "TSLA", price: "750", sector_id: 7)
yeti = Stock.create(company: "Yeti", ticker: "YETI", price: "80", sector_id: 8)
lmnd = Stock.create(company: "Lemonade", ticker: "LMND", price: "130", sector_id: 2)
abnb = Stock.create(company: "Airbnb", ticker: "ABNB", price: "134", sector_id: 8)
t = Stock.create(company: "AT&T", ticker: "T", price: "40", sector_id: 11)
pg = Stock.create(company: "P&G", ticker: "PG", price: "139", sector_id: 9)
vvv = Stock.create(company: "Valvoline", ticker: "VVV", price: "31", sector_id: 4)
duk = Stock.create(company: "Duke Energy", ticker: "DUK", price: "106", sector_id: 10)
mmm = Stock.create(company: "3M", ticker: "MMM", price: "89", sector_id: 5)