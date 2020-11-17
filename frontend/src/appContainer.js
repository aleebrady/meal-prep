class AppContainer {
    meals = []
    categories = []
    url = "http://localhost:3000"
    dailyLog = {}

    getMeals() {
        // fetch meals
        console.log("testing")
        fetch(this.url + '/meals')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // populate the activities and categories properties with the returned data
        //call rendermeals
        .catch(error => alert(error))
    }

    renderMeals() {
        // create DOM nodes and insert data into them to render in DOM

    }

}