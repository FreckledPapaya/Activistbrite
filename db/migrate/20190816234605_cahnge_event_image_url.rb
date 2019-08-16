class CahngeEventImageUrl < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :image_url, true
  end
end
