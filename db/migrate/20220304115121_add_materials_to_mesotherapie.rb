class AddMaterialsToMesotherapie < ActiveRecord::Migration[6.1]
  def change
    add_column :mesotherapies, :materials, :string
  end
end
