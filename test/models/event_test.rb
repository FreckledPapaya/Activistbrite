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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
