class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.integer :category_id
      t.string :name
      t.string :body_part
      t.string :description
      t.integer :minutes
      t.timestamps
    end
  end
end
