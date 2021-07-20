class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :company
      t.string :ticker
      t.string :price

      t.timestamps
    end
  end
end
