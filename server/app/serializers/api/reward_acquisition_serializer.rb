# frozen_string_literal: true

module Api
  class RewardAcquisitionSerializer < BaseSerializer
    attributes :name,
               :point,
               :reward_id
  end
end
