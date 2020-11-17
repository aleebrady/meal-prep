class Meal {
    constructor(name) {
        this.name = name
        AppContainer.meals.push(this)
    }
}