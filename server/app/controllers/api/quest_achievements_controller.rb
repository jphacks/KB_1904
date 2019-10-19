# frozen_string_literal: true

module Api
  class QuestAchievementsController < BaseController
    def index
      @achievements = QuestAchievement.all
      render json: ::Api::QuestAchievementSerializer.new(@achievements)
    end
  end
end
