# frozen_string_literal: true

module Alexa
  class QuestsController < BaseController

    def index
      @quests = Quest.all
      render json: ::QuestSerializer.new(@quests)
    end
  end
end
