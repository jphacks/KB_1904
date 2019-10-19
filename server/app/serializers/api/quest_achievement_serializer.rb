# frozen_string_literal: true

module Api
  class QuestAchievementSerializer < BaseSerializer
    attributes :title,
               :point,
               :quest_id
  end
end
