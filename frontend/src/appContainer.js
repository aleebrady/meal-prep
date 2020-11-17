class AppContainer {
    static meals = []
    categories = []
    url = "http://localhost:3000"
    static dailyLog = {}

    bindEventListeners() {
        const bttn = document.getElementById('createDailyFood')
        bttn.addEventListener("click", this.getRandomMeals)
    }

    // getDailyLog() {
    //     this.getRandomMeals()
    //     this.renderDailyMeals()
    // }

    getRandomMeals() {
        let dailyMeals = []
        for (let i = 0; i < 3; i++) {
            //change function to select a meal for each category, other than accross all categories
            dailyMeals.push(AppContainer.meals[Math.floor(Math.random()*AppContainer.meals.length)])
        }
        // instantiate dailylog instance with these activities 
        new DailyLog(dailyMeals)
        //insert data into DOM
        const dailyFoodDiv = document.getElementById('dailyFood')
        AppContainer.dailyLog.meals.forEach(dailyLog => {
            const foodDiv = document.createElement('div')
            foodDiv.innerText = dailyLog.name
            dailyFoodDiv.appendChild(foodDiv)
        })
    }

    // renderDailyMeals() {
    //     const dailyFoodDiv = document.getElementById('dailyFood')
    //     debugger
    //     dailyFoodDiv.innerText = AppContainer.dailyLog
    // }

    getMeals() {
        // fetch meals
        fetch(this.url + '/meals')
        .then(resp => resp.json())
            // populate the activities and categories properties with the returned data
        .then(data => {
            console.log(data)
            data.forEach(meal => {
                new Meal(meal.name, meal.category)
            })
            //call rendermeals
            this.renderMeals()
        })
        // populate the activities and categories properties with the returned data
        .catch(error => alert(error))
    }

    renderMeals() {
        // create DOM nodes and insert data into them to render in DOM
        const breakfastSelect = document.getElementById('breakfast');
        const lunchSelect = document.getElementById('lunch');
        const dinnerSelect = document.getElementById('dinner');
        AppContainer.meals.forEach(meal => {
            const option = document.createElement('option');
            option.innerText = meal.name;
            // append will be conditional based on what category it belongs to
            // debugger
            switch(meal.category.name) {
                case "Breakfast":
                    breakfastSelect.appendChild(option);
                  break;
                case "Lunch":
                    lunchSelect.appendChild(option);
                  break;
                case "Dinner":
                  dinnerSelect.appendChild(option);
                 break;
              }
        })
    }

}