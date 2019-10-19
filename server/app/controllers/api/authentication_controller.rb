# frozen_string_literal: true

module Api
  class AuthenticationController < ApplicationController
    protect_from_forgery except: :login

    def login
      parent = Parent.find_for_database_authentication(email: params[:email])

      if parent.valid_password?(params[:password])
        render json: payload(parent)
      else
        render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
      end
    end

    def logout
      render json: { errors: ['Not implemented yet!!'] }
    end

    private

    def payload(parent)
      return nil unless parent&.id

      {
        auth_token: JsonWebToken.encode({ parent_id: parent.id, exp: (Time.now + 2.week).to_i }),
        parent: { id: parent.id, email: parent.email }
      }
    end
  end
end
