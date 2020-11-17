class Meal {
    constructor(name, category) {
        this.name = name
        this.category = category
        AppContainer.meals.push(this)
    }
}