class Category {
    static all = []
    constructor(name) {
        this.name = name
        Category.all.push(this)
    }
}