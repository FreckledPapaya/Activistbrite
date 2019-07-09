class AddColumnToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :image_url, :string, null: false
  end
end
