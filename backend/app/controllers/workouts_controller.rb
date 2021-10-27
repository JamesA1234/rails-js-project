class WorkoutsController < ApplicationController
    def index
        workouts = Workout.all
        render json: WorkoutSerializer.new(workouts)
    end
    
    def show
        workout = Workout.find(params[:id])
        render json:  WorkoutSerializer.new(workout)
    end
    
    def create
        workout = Workout.find_or_create_by(params[:id])
        render json:  WorkoutSerializer.new(workout)
    end
    
    def destroy
        @workout = Workout.find(params[:id])
        @workout.destroy
        render json:  WorkoutSerializer.new(workout)
    end
    
end
