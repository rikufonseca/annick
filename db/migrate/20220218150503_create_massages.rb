class CreateMassages < ActiveRecord::Migration[6.1]
  def change
    create_table :massages do |t|
      t.string :name
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
