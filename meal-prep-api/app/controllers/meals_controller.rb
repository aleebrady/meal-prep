class MealsController < ApplicationController

    def index
        @meals = Meal.all 
        render json: @meals, :include => :category, :status => 200
    end

    def create
        category = Category.find_by(name: params[:category].downcase)
        meal = Meal.create(name: params[:name], category: category)
        render :json => meal, :status => 201
    end

    def destroy
        @meal = Meal.find(params[:id]).destroy
        render :json => {id: params[:id], message: "meal was deleted"}, :status => 200
        # sqlite3 errors
        # if @meal.destroy
        #     render :json => {id: params[:id], message: "meal was deleted"}
        # else
        #     render :json => {message: "Something went wrong"}
        # end
    end

end
