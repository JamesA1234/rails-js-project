class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :category
end
