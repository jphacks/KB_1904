# frozen_string_literal: true

module Api
  class ChildrenController < BaseController
    before_action :set_child, only: %i[update]

    def create
      @child = Child.build(child_params)
      if @child.save
        render json: ::Api::ChildSerializer.new(@child)
      else
        render_errors @child
      end
    end

    def update
      if @child.update(child_params)
        render json: ::Api::ChildSerializer.new(@child)
      else
        render_errors @child
      end
    end

    private

    def set_child
      @child = Child.find(params[:id])
    end

    def child_params
      params.require(:child).permit(:name, :sex)
    end
  end
end
