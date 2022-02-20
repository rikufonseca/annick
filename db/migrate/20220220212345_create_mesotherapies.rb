class CreateMesotherapies < ActiveRecord::Migration[6.1]
  def change
    create_table :mesotherapies do |t|
      t.string :name
      t.integer :price_two
      t.integer :price_one
      t.text :explanation
      t.string :time_one
      t.string :time_two

      t.timestamps
    end
  end
end
