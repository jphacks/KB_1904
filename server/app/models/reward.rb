# frozen_string_literal: true

class Reward < ApplicationRecord
  extend Enumerize

  belongs_to :parent
  belongs_to :child

  enumerize :status, in: %i[none requested approved], default: :none
end
