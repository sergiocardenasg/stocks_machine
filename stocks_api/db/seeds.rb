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

msft = Stock.create(company: "Microsoft", ticker: "MSFT", price: "$275", sector_id: 1)
pypl = Stock.create(company: "Paypal", ticker: "PYPL", price: "$300", sector_id: 1)
cof = Stock.create(company: "Capital One", ticker: "COF", price: "$150", sector_id: 2)