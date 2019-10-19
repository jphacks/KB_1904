# frozen_string_literal: true

module Api
  class RewardSerializer < BaseSerializer
    attributes :name,
               :description,
               :point,
               :status
  end
end
