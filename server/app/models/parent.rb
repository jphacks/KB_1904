# frozen_string_literal: true

class Parent < ApplicationRecord
  has_one :child, dependent: :destroy

  has_many :quests
  has_many :rewards
  has_many :achievements, class_name: 'QuestAchievement', foreign_key: :parent_id
  has_many :acquisitions, class_name: 'RewardAcquisition', foreign_key: :parent_id
  has_many :grants, class_name: 'PointGrant', foreign_key: :parent_id
end
