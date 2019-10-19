# frozen_string_literal: true

module Api
  class QuestSerializer < BaseSerializer
    attributes :title,
               :description,
               :point,
               :quest_type,
               :status
  end
end
