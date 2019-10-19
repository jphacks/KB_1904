# frozen_string_literal: true

module Api
  class BaseController < ActionController::API
    before_action :authenticate_request!

    attr_reader :current_parent
    attr_reader :current_child

    private

    def authenticate_request!
      unless user_id_in_token?
        render json: { errors: ['Not Authenticated'] }, status: :unauthorized
        return
      end
      @current_parent = Parent.find(auth_token[:parent_id])
      @current_child = @current_parent.child
    rescue JWT::VerificationError, JWT::DecodeError
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end

    def http_token
      @http_token ||= if request.headers['Authorization'].present?
                        request.headers['Authorization'].split(' ').last
                      end
    end

    def auth_token
      @auth_token ||= JsonWebToken.decode(http_token)
    end

    def user_id_in_token?
      http_token && auth_token && auth_token[:user_id].to_i
    end
  end
end
