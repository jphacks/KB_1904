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

  child = Child.create!(parent: parent, name: 'ほげの', sex: :female)
end

unless Quest.count.positive?
  Quest.create!(
    parent: parent,
    child: child,
    title: '宿題をしよう!',
    description: 'しような',
    point: 50
  )

  multiline_desc = <<-EOF
庭に突如発生した謎の怪物.
我等の計画を邪魔するものは直ちに排除せよ.
EOF

  quest = Quest.create!(
    parent: parent,
    child: child,
    title: 'やばいやつを倒して！',
    description: multiline_desc,
    quest_type: :weekly,
    point: 1000
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
        name: '飴ちゃん',
        description: '甘い',
        point: 50
      },
      {
        parent: parent,
        child: child,
        name: '聖剣エクスカリバー',
        description: 'It slashes all things.',
        point: 10_000
      }
    ]
  )
end
