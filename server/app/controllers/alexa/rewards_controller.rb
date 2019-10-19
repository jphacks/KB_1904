# frozen_string_literal: true

module Alexa
  class RewardsController < BaseController

    def index
      @rewards = Reward.all
      render json: ::RewardSerializer.new(@rewards)
    end
  end
end
