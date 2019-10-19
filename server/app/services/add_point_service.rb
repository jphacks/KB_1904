# frozen_string_literal: true

class AddPointService
  attr_accessor :child

  def initialize(child)
    @child = child
  end

  def execute!(point)
    child.update!(point: child.point + point)
  end
end
