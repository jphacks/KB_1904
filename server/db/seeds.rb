# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


unless Parent.count.positive? && Child.count.positive?
  parent = Parent.create!(name: 'お母さん',
                          email: 'mother@example.com',
                          password: 'password',
                          password_confirmation: 'password')

  child = Child.create!(parent: parent, name: 'たかし', sex: :male)
end

unless Quest.count.positive?
  Quest.create!(
    parent: parent,
    child: child,
    title: '宿題をしよう!',
    description: '毎日しっかり頑張ろう!',
    image: Rails.application.credentials.dig(:image, :study),
    point: 50
  )

  Quest.create!(
    title: '部屋の掃除をしよう!',
    description: '自分のお部屋はいつもきれいにしようね!',
    quest_type: :daily,
    image: Rails.application.credentials.dig(:image, :clean),
    point: 100
  )

  quest = Quest.create!(
    parent: parent,
    child: child,
    title: '塾に行こう！',
    description: '毎日頑張ってお勉強しよう!',
    image: Rails.application.credentials.dig(:image, :study),
    quest_type: :weekly,
    point: 100
  )

  quest.day_of_weeks.create!(
    [
      { quest: quest, code: 0 },
      { quest: quest, code: 2 },
      { quest: quest, code: 4 }
    ]
  )
end

unless Reward.count.positive?
  Reward.create!(
    [
      {
        parent: parent,
        child: child,
        name: 'あめちゃん',
        description: 'おいしい〜〜',
        point: 50
      },
      {
        parent: parent,
        child: child,
        name: 'ゲーム機',
        description: 'いつも欲しいって言ってたよね? 頑張ろう!',
        point: 10_000
      }
    ]
  )
end
