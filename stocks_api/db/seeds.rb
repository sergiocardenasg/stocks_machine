# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Investor.create([
    {name: "Sergio", email: "sergio@me.com"},
    {name: "Alberto", email: "alberto@me.com"},
    {name: "Cardenas", email: "cardenas@me.com"}
])

msft = Stock.create(company: "Microsoft", ticker: "MSFT", price: "$275", investor_id: 1)
pypl = Stock.create(company: "Paypal", ticker: "PYPL", price: "$300", investor_id: 2)
meli = Stock.create(company: "Mercado Libre", ticker: "MELI", price: "$1,500", investor_id: 3)