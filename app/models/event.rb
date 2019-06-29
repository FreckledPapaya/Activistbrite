# == Schema Information
#
# Table name: events
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string           not null
#  location   :string           not null
#  datetime   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  creator_id :integer
#

class Event < ApplicationRecord
    validates :title, :body, :location, :datetime, :creator_id, presence: true

    belongs_to :creator,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :creator_id
end
