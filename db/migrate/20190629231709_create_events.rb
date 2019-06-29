class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.string :location, null:false
      t.datetime :datetime, null:false 

      t.timestamps
    end

    add_index :events, :title
    add_index :events, :location
    add_index :events, :datetime
  end
end
