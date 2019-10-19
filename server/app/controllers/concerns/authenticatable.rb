# frozen_string_literal: true

module Authenticatable
  extend ActiveSupport::Concern

#   included do
#     protect_from_forgery except: :login
#   end

  def login
    if auth(email: params[:email], password: params[:password])
      render json: payload(parent)
    else
      render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
    end
  end

  def logout
    render json: { errors: ['Not implemented yet!!'] }
  end

  private

  def auth(email:, password:)
    parent = Parent.find_for_database_authentication(email)
    parent.valid_password?(password)
  end

  def payload(parent)
    return nil unless parent&.id

    {
      auth_token: JsonWebToken.encode({ parent_id: parent.id, exp: (Time.now + 2.week).to_i }),
      parent: { id: parent.id, email: parent.email }
    }
  end
end
