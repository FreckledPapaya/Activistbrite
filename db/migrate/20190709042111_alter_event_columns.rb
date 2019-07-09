class AlterEventColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :creator_id
    add_column :events, :organizer_id, :integer, null: false 
    add_index :events, :organizer_id 

    remove_column :events, :location  

    remove_column :events, :datetime 
    add_column :events, :start_date, :datetime, null: false
    add_column :events, :end_date, :datetime, null: false
    add_index :events, :start_date


  end
end
