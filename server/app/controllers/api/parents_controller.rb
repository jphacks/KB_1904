# frozen_string_literal: true

module Api
  class ParentsController < BaseController
    include Authenticatable

    skip_before_action :authenticate_request!, only: :create

    before_action :set_parent, only: %i[update]

    def create
      @parent = Parent.new(parent_params)
      if @parent.save
        render json: payload(@parent)
      else
        render_errors @parent
      end
    end

    def update
      if @parent.update(parent_params)
        render json: ::ParentSerializer.new(@parent)
      else
        render_errors @parent
      end
    end

    private

    def set_parent
      @parent = Parent.find(params[:id])
    end

    def parent_params
      params.require(:parent).permit(
        :name,
        :email,
        :password,
        :password_confirmation
      )
    end
  end
end
