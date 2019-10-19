# frozen_string_literal: true

module Api
  class AuthenticationController < ApplicationController
    include Authenticatable
  end
end
