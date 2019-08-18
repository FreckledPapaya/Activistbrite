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
#  image_url    :string
#

DAYS = {
    1 => 'Monday',
    2 => 'Tuesday',
    3 => 'Wednesday',
    4 => 'Thursday',
    5 => 'Friday',
    6 => 'Saturday',
    7 => 'Sunday',
}

MONTHS = {
    1 => 'January',
    2 => 'February',
    3 => 'March',
    4 => 'April',
    5 => 'May',
    6 => 'June',
    7 => 'July',
    8 => 'August',
    9 => 'September',
    10 => 'October',
    11 => 'November',
    12 => 'December'
}

class Event < ApplicationRecord
    # migrate location (indexed) and category_id (indexed, fk) will null:false
    #  add validations
    validates :title, :body, :start_date, :organizer_id, presence: true

    after_initialize :ensure_photo

    has_one_attached :image

    belongs_to :organizer,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :organizer_id

    def organizer_title
        self.organizer.organizer_title
    end

    def weekday (date)
        return DAYS[date.wday]
    end

    def date(date)
        return date.mday
    end

    def month(date)
        return MONTHS[date.mon]
    end

    def year(date)
        return date.year
    end

    def time(date)
        hour = date.hour
        minute = date.min
        morn_aft = "am"
        if hour > 11
            morn_aft = "pm" 
        end
        if hour > 12 
            hour -= 12
        end
        if hour == 0
            hour = 12
        end
        hour = hour.to_s
        if minute < 10
            minute = "0" + minute.to_s
        else
            minute = minute.to_s
        end

        return hour + ":" + minute + morn_aft
    end

    def ensure_photo
        unless self.image.attached?
            path = 'app/assets/images/1stpride.png'
            file = File.open(path)
            self.image.attach(io: file, filename: '1stpride.png')
        end
    end 

end
