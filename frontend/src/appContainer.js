class AppContainer {
    static meals = []
    static categories = []
    url = "http://localhost:3000"
    static dailyLog = {}

    bindEventListeners() {
        const bttn = document.getElementById('createDailyFood')
        bttn.addEventListener("click", () => this.getRandomMeals())

        const NewMealFrom = document.getElementById('newMeal')
        NewMealFrom.addEventListener("submit", () => this.createMeal(event))
    }

    createMeal(event) {
        event.preventDefault()
        const data = event.target ;
        console.log(this)
        fetch(`${this.url}/meals`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.meal.value,
                category: data.children[2].value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const { id, name, category } = data
            new Meal(id, name, category)
            this.renderMeals()
        })
        .catch(error => console.log(error))
    }

    // getDailyLog() {
    //     this.getRandomMeals()
    //     this.renderDailyMeals()
    // }

    getRandomMeals() {
        let dailyMeals = []
        Category.all.forEach(category => {
            dailyMeals.push(Meal.byCategory(category.name)[Math.floor(Math.random()*Meal.byCategory(category.name).length)])
        })
        // for (let i = 0; i < 3; i++) {
        //     //change function to select a meal for each category, other than accross all categories
        //     dailyMeals.push(AppContainer.meals[Math.floor(Math.random()*AppContainer.meals.length)])
        // }
        // instantiate dailylog instance with these activities 
        new DailyLog(dailyMeals)
        //insert data into DOM
        const dailyFoodDiv = document.getElementById('dailyFood')
        dailyFoodDiv.innerHTML = ""
        AppContainer.dailyLog.meals.forEach(meal => {
            const foodDiv = document.createElement('div')
            foodDiv.innerText = meal.name
            dailyFoodDiv.appendChild(foodDiv)
        })

        // prevent db lock... use setTimout
        dailyMeals.forEach((meal, i) => {
            setTimeout(() => {
                fetch(`${this.url}/meals/${meal.id}`, {
                    method: 'DELETE',
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    Meal.delete(data.id)
                    this.renderMeals()
                })
                .catch(error => console.log(error))
            }, 500 * i);
            
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
                new Meal(meal.id, meal.name, meal.category)
                if (!Category.all.map(category => category.name).includes(meal.category.name)) {
                    new Category(meal.category.name)
                }
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
        breakfastSelect.innerHTML = ""
        lunchSelect.innerHTML = ""
        dinnerSelect.innerHTML = ""
        AppContainer.meals.forEach(meal => {
            const option = document.createElement('option');
            option.innerText = meal.name;
            // append will be conditional based on what category it belongs to
            // debugger
            switch(meal.category.name) {
                case "breakfast":
                    breakfastSelect.appendChild(option);
                  break;
                case "lunch":
                    lunchSelect.appendChild(option);
                  break;
                case "dinner":
                  dinnerSelect.appendChild(option);
                 break;
              }
        })
    }

}