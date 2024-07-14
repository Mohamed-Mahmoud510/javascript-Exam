

export class categoryData {
    constructor() {
        this.categoryBtn = $("#categries-btn").on("click",this.cateBtn.bind(this))
    }
    async cateBtn() {
       let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;
       let Api = `https://www.themealdb.com/api/json/v1/1/categories.php`
       let response = await fetch(Api)
       let finalResponse = await response.json() 
       let mainCateArray =  finalResponse.categories
       cartona = ``
       for (let i = 0; i < mainCateArray.length; i++) {
        cartona += ` 
      <div class="col-md-3">
        <figure class="position-relative overflow-hidden rounded-1 category-items" id="${mainCateArray[i].strCategory}">
          <img src="${mainCateArray[i].strCategoryThumb}" alt="" class="w-100">
          <figcaption class="position-absolute d-flex flex-column align-items-center">
            <h2 class="ms-2 fw-semibold">${mainCateArray[i].strCategory}</h2>
            <p class="text-center">${mainCateArray[i].strCategoryDescription}</p>
          </figcaption>
        </figure>
      </div>
    `}
       document.getElementById("main").innerHTML = cartona;

       $(".category-items").on("click",async function(e) {
        let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

        let Api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.currentTarget.id}`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let categoryMeals = finalResponse.meals
         cartona = ``
       for (let i = 0; i < categoryMeals.length; i++) {
        cartona += ` 
      <div class="col-md-3">
        <figure class="position-relative overflow-hidden rounded-1 allMeals" id="${categoryMeals[i].idMeal}">
          <img src="${categoryMeals[i].strMealThumb}" alt="" class="w-100">
          <figcaption class="position-absolute d-flex flex-column align-items-center ">
            <h2 class="ms-2 fw-semibold">${categoryMeals[i].strMeal}</h2>
          </figcaption>
        </figure>
      </div>
    `}
    document.getElementById("main").innerHTML = cartona;

     $(".allMeals").on("click",async function(e) {
        $("#categries").addClass("d-none")
        let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

        let Api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.currentTarget.id}`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let categoryMeals = finalResponse.meals
        let ingLoop = finalResponse.meals[0]
        let miniCartonna = ``
        for (let i = 1; i < 21; i++) {
          if (ingLoop[`strIngredient${i}`]) {
            miniCartonna += `
                            <li
                                class="alert alert-success m-2 p-1">${ingLoop[`strIngredient${i}`]}
                            </li>`
        }
        }

        cartona = `
      <div class="col-md-5 text-white">
        <img src="${categoryMeals[0].strMealThumb}" alt="" class="w-100">
        <h2>${categoryMeals[0].strArea}</h2>
      </div>
      <div class="col-md-7 text-white">
        <h2>Instructions</h2>
        <p>${categoryMeals[0].strInstructions}</p>
        <h3>Area : ${categoryMeals[0].strArea}</h3>
        <h3>Category : ${categoryMeals[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap" id="loopIng">
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-danger m-2 p-1">${categoryMeals[0].strArea}</li>
        </ul>
        <a target="_blank" href="${categoryMeals[0].strSource}"  class="btn btn-success">Source</a>
        <a target="_blank" href="${categoryMeals[0].strYoutube}" class="btn btn-danger">Youtube</a>
      </div>` 
    document.getElementById("main").innerHTML = cartona;
    document.getElementById("loopIng").innerHTML = miniCartonna;

        })
       }
       
    )
        
    }

}

export class areaData {
    constructor() {
        this.areaBtn = $("#area-btn").on("click",this.areas.bind(this))       
    }
    async areas() {
      let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

       let Api = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
       let response = await fetch(Api)
       let finalResponse = await response.json() 
       let mainAreaArray =  finalResponse.meals
        cartona = ``
       for (let i = 0; i < mainAreaArray.length; i++) {
        cartona += ` 
     <div class="col-md-3">
        <div class="d-flex flex-column justify-content-center align-items-center country" id="${mainAreaArray[i].strArea}">
          <i class="fa-solid fa-house-laptop fs-1 text-white"></i>
          <h2 class="ms-2 fw-semibold text-white">${mainAreaArray[i].strArea}</h2>
        </div>
      </div>
    `}
       document.getElementById("main").innerHTML = cartona;

       $(".country").on("click",async function(e) {
        let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

        let Api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.currentTarget.id}`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let categoryMeals = finalResponse.meals
        cartona = ``
       for (let i = 0; i < categoryMeals.length; i++) {
        cartona += ` 
      <div class="col-md-3">
        <figure class="position-relative overflow-hidden rounded-1 allMeals" id="${categoryMeals[i].idMeal}">
          <img src="${categoryMeals[i].strMealThumb}" alt="" class="w-100">
          <figcaption class="position-absolute d-flex flex-column align-items-center ">
            <h2 class="ms-2 fw-semibold">${categoryMeals[i].strMeal}</h2>
          </figcaption>
        </figure>
      </div>
    `}
    document.getElementById("main").innerHTML = cartona;

     $(".allMeals").on("click",async function(e) {
      let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

        let Api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.currentTarget.id}`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let categoryMeals = finalResponse.meals
        let ingLoop = finalResponse.meals[0]
        let miniCartonna = ``
        for (let i = 1; i < 21; i++) {
          if (ingLoop[`strIngredient${i}`]) {
            miniCartonna += `
                            <li
                                class="alert alert-success m-2 p-1">${ingLoop[`strIngredient${i}`]}
                            </li>`
        }
        }
        cartona = `
      <div class="col-md-5 text-white">
        <img src="${categoryMeals[0].strMealThumb}" alt="" class="w-100">
        <h2>${categoryMeals[0].strArea}</h2>
      </div>
      <div class="col-md-7 text-white">
        <h2>Instructions</h2>
        <p>${categoryMeals[0].strInstructions}</p>
        <h3>Area : ${categoryMeals[0].strArea}</h3>
        <h3>Category : ${categoryMeals[0].strCategory}</h3>
        <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap" id="loopIng">
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-danger m-2 p-1">${categoryMeals[0].strArea}</li>
        </ul>
        <a target="_blank" href="${categoryMeals[0].strSource}"  class="btn btn-success">Source</a>
        <a target="_blank" href="${categoryMeals[0].strYoutube}" class="btn btn-danger">Youtube</a>
      </div>` 
    document.getElementById("main").innerHTML = cartona;
    document.getElementById("loopIng").innerHTML = miniCartonna;

      

        })
        
       }
       
    )
        
    }

}
export class ingredMeal {
    constructor() {
        this.ingreBtn = $("#ingredints-btn").on("click",this.ingredints.bind(this))       
    }
    async ingredints() {
      let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

       let Api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
       let response = await fetch(Api)
       let finalResponse = await response.json() 
       let mainIngredArray =  finalResponse.meals
      cartona = ``
       for (let i = 0; i < mainIngredArray.length; i++) {
        cartona += ` 
     <div class="col-md-3">
        <div class="d-flex flex-column justify-content-center align-items-center ingred" id="${mainIngredArray[i].strIngredient}">
        <i class="fa-solid fa-egg fs-2 text-white"></i>
          <h2 class="ms-2 fw-semibold text-white">${mainIngredArray[i].strIngredient}</h2>
          <p class="text-white text-center">${mainIngredArray[0].strDescription.split(" ").slice(0,25).join(" ")}</p>
        </div>
      </div>
    `}
       document.getElementById("main").innerHTML = cartona;

       $(".ingred").on("click",async function(e) {
        let cartona =  `
      <span class="loader"></span>
       `
    document.getElementById("main").innerHTML = cartona;

        let Api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.currentTarget.id}`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let categoryMeals = finalResponse.meals
        cartona = ``
       for (let i = 0; i < categoryMeals.length; i++) {
        cartona += ` 
      <div class="col-md-3">
        <figure class="position-relative overflow-hidden rounded-1 allMeals" id="${categoryMeals[i].idMeal}">
          <img src="${categoryMeals[i].strMealThumb}" alt="" class="w-100">
          <figcaption class="position-absolute d-flex flex-column align-items-center ">
            <h2 class="ms-2 fw-semibold">${categoryMeals[i].strMeal}</h2>
          </figcaption>
        </figure>
      </div>
    `}
    document.getElementById("main").innerHTML = cartona;

     $(".allMeals").on("click",async function(e) {
      let cartona =  `
      <span class="loader"></span>
       ` 
    document.getElementById("main").innerHTML = cartona;

        let Api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.currentTarget.id}`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let categoryMeals = finalResponse.meals
        let ingLoop = finalResponse.meals[0]
        let miniCartonna = ``
        for (let i = 1; i < 21; i++) {
          if (ingLoop[`strIngredient${i}`]) {
            miniCartonna += `
                            <li
                                class="alert alert-success m-2 p-1">${ingLoop[`strIngredient${i}`]}
                            </li>`
        }
        }
        console.log(categoryMeals);
         cartona = `
      <div class="col-md-5 text-white">
        <img src="${categoryMeals[0].strMealThumb}" alt="" class="w-100">
        <h2>${categoryMeals[0].strArea}</h2>
      </div>
      <div class="col-md-7 text-white">
        <h2>Instructions</h2>
        <p>${categoryMeals[0].strInstructions}</p>
        <h3>Area : ${categoryMeals[0].strArea}</h3>
        <h3>Category : ${categoryMeals[0].strCategory}</h3>
        <h3>Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap" id="loopIng">
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-danger m-2 p-1">${categoryMeals[0].strArea}</li>
        </ul>
        <a target="_blank" href="${categoryMeals[0].strSource}"  class="btn btn-success">Source</a>
        <a target="_blank" href="${categoryMeals[0].strYoutube}" class="btn btn-danger">Youtube</a>
      </div>` 
    document.getElementById("main").innerHTML = cartona;
    document.getElementById("loopIng").innerHTML = miniCartonna;


        })
       }
       
    )
        
    }

}


