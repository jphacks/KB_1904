# frozen_string_literal: true

module Alexa
  class BaseController < ActionController::API
    include ::ErrorRescuable

    def render_errors(obj)
      handle_400 error_details: obj.errors.full_messages
    end
  end
end
