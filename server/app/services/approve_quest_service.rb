# frozen_string_literal: true

class ApproveQuestService
  attr_accessor :quest, :parent, :child

  def initialize(quest)
    @quest = quest
    @parent = quest.parent
    @child = quest.child
  end

  def execute!
    return false unless quest.status.finished?

    AddPointService.new(child).execute!(quest.point)
    quest.update!(status: :approved)

    QuestAchievement.create!(
      parent: parent,
      child: child,
      quest_id: quest.id,
      title: quest.title,
      point: quest.point
    )
  end
end
