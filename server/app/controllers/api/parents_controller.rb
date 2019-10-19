# frozen_string_literal: true

module Api
  class ParentsController < BaseController
    before_action :set_parent, only: %i[update]

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