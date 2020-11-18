class Meal {
    constructor(id, name, category) {
        this.name = name
        this.category = category
        this.id = id
        AppContainer.meals.push(this)
    }

    static byCategory(categoryName) {
        return AppContainer.meals.filter(meal => meal.category.name === categoryName)
    }
}