# frozen_string_literal: true

class ApproveQuestService
  attr_accessor :quest, :params

  def initialize(quest)
    @quest = quest
  end

  def execute!
    return false unless quest.status.finished?

    quest.update!(status: :approved)

    QuestAchievement.create!(
      parent: quest.parent,
      child: quest.child,
      quest_id: quest.id,
      title: quest.title,
      point: quest.point
    )
  end
end
