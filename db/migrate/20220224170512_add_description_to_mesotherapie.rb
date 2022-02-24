class AddDescriptionToMesotherapie < ActiveRecord::Migration[6.1]
  def change
    add_column :mesotherapies, :description, :string
    add_column :mesotherapies, :origin, :text
    add_column :mesotherapies, :caracteristic, :text
    add_column :mesotherapies, :bienfait, :text
    add_column :mesotherapies, :time_precaunisation, :text
    add_column :mesotherapies, :technique, :text
    add_column :mesotherapies, :motto, :string
  end
end
