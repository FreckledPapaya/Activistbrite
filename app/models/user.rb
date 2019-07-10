# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fname           :string
#  lname           :string
#  organizer_title :string
#

class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true 
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :organized_events,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :creator_id

    attr_reader :password

    after_initialize :ensure_session_token, :ensure_org_title

    def User.find_by_credentials(email, pw)
        user = User.find_by(email: email)

        return nil unless user
        return nil unless user.is_password?(pw)
        user
    end

    def User.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token 
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    # end user auth basics

    def ensure_org_title
        self.organizer_title ||= self.email
    end
end
