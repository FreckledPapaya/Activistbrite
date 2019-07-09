# == Schema Information
#
# Table name: events
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  body         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  organizer_id :integer          not null
#  start_date   :datetime         not null
#  end_date     :datetime
#  image_url    :string           not null
#

class Event < ApplicationRecord
    # migrate location (indexed) and category_id (indexed, fk) will null:false
    #  add validations
    validates :title, :body, :start_date, :organizer_id, :image_url, presence: true

    # has_one_attached :image

    belongs_to :organizer,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :organizer_id
end
