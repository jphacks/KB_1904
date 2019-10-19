# frozen_string_literal: true

module Api
  class ChildrenController < BaseController
    before_action :set_child, only: %i[update grant]

    def create
      @child = Child.build(child_params)
      if @child.save
        render json: ::ChildSerializer.new(@child)
      else
        render_errors @child
      end
    end

    def update
      if @child.update(child_params)
        render json: ::ChildSerializer.new(@child)
      else
        render_errors @child
      end
    end

    def grant
      ActiveRecord::Base.transaction do
        ::GrantPointService.new(@child).execute!(grant_params)
      end

      render json: ::ChildSerializer.new(@child)
    rescue ActiveRecord::RecordInvalid
      render_errors @child
    end

    private

    def set_child
      @child = Child.find(params[:id])
    end

    def child_params
      params.require(:child).permit(:name, :sex)
    end

    def grant_params
      params.require(:child).permit(:point, :description)
    end
  end
end
