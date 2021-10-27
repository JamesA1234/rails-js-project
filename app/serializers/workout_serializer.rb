class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :body_part, :description, :minutes
  belongs_to :category
end
