class Meal {
    constructor(name, category) {
        this.name = name
        this.category = category
        AppContainer.meals.push(this)
    }

    static byCategory(categoryName) {
        return AppContainer.meals.filter(meal => meal.category.name === categoryName)
    }
}