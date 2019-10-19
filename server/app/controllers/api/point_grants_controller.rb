# frozen_string_literal: true

module Api
  class PointGrantsController < BaseController
    def index
      @grants = PointGrant.all
      render json: ::Api::PointGrantSerializer.new(@grants)
    end
  end
end
