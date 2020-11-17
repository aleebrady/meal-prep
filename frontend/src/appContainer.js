class AppContainer {
    static meals = []
    categories = []
    url = "http://localhost:3000"
    dailyLog = {}

    bindEventListeners() {
        const bttn = document.getElementById('createDailyFood')
        bttn.addEventListener("click", this.getRandomMeals)
    }

    getRandomMeals() {
        debugger
        let dailyMeals = []
        for (let i = 0; i < 4; i++) {
            debugger
            //change function to select a meal for each category, other than accross all categories
            dailyMeals.push(AppContainer.meals[Math.floor(Math.random()*AppContainer.meals.length)])
        }
        return dailyMeals
    }

    getMeals() {
        // fetch meals
        console.log("testing")
        fetch(this.url + '/meals')
        .then(resp => resp.json())
            // populate the activities and categories properties with the returned data
        .then(data => {
            data.forEach(meal => {
                new Meal(meal.name)
            })
        })
        // populate the activities and categories properties with the returned data
        //call rendermeals
        .catch(error => alert(error))
    }

    renderMeals() {
        // create DOM nodes and insert data into them to render in DOM

    }

}