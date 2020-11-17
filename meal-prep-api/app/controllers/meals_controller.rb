class MealsController < ApplicationController

    def index
        @meals = Meal.all 
        render json: @meals, :include => :category
    end

end
