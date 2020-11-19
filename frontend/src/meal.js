class Meal {
    constructor(id, name, category) {
        this.name = name
        this.category = category
        this.id = id
        AppContainer.meals.push(this)
    }

    static delete(mealId) {
        AppContainer.meals = AppContainer.meals.filter(meal => parseInt(mealId) !== meal.id)

    }

    static byCategory(categoryName) {
        return AppContainer.meals.filter(meal => meal.category.name === categoryName)
    }
}