# frozen_string_literal: true

module Api
  class RewardAcquisitionsController < BaseController
    def index
      @acquisitions = RewardAcquisition.all
      render json: ::RewardAcquisitionSerializer.new(@acquisitions)
    end
  end
end
