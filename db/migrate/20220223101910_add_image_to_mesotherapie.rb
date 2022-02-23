class AddImageToMesotherapie < ActiveRecord::Migration[6.1]
  def change
    add_column :mesotherapies, :image, :string
  end
end
