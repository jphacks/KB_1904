# frozen_string_literal: true

class Child < ApplicationRecord
  belongs_to :parent

  has_many :quests
  has_many :rewards
  has_many :achievements, class_name: 'QuestAchievement', foreign_key: :child_id
  has_many :acquisitions, class_name: 'RewardAcquisition', foreign_key: :child_id
  has_many :grants, class_name: 'PointGrant', foreign_key: :child_id
end
