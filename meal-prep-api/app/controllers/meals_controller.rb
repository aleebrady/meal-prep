class MealsController < ApplicationController

    def index
        @meals = Meal.all 
        render json: @meals, :include => :category
    end

    def destroy
        Meal.find(params[:id]).destroy
        render :json => {id: params[:id]}
    end

end
