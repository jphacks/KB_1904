# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if !Parent.count
  parent = Parent.create!(name: 'お母さん')

  child = Child.create!(parent: parent, name: 'ほげの', sex: :female)

  multiline_desc = <<-EOF
  庭に突如発生した謎の怪物.
  我等の計画を邪魔するものは直ちに排除せよ.
  EOF

  Quest.create!(
    [
      {
        parent: parent,
        child: child,
        title: '宿題をしよう!',
        description: 'しような',
        point: 50
      },
      {
        parent: parent,
        child: child,
        title: 'やばいやつを倒して！',
        description: multiline_desc,
        point: 1000
      }
    ]
  )

  Reward.create!(
    [
      {
        parent: parent,
        child: child,
        name: '飴ちゃん',
        description: '甘い',
        point: 10
      },
      {
        parent: parent,
        child: child,
        name: '聖剣エクスカリバー',
        description: 'It slashes all things.',
        point: 10000
      }
    ]
  )
end
