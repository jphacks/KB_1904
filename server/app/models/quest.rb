# frozen_string_literal: true

class Quest < ApplicationRecord
  belongs_to :parent
  belongs_to :child
end
