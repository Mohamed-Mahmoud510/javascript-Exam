import {categoryData,areaData,ingredMeal} from "./data.js"
import {getSearchInputs} from "./search.js"
import {validetion} from "./validetion.js"
const cateMeals = new categoryData()
const areaMeals = new areaData()
const ingreMeals = new ingredMeal()
const searchL = new getSearchInputs()
const valid = new validetion()
// const searchN = new seachName()


// & ----------------------- Elements from Html ---------------------
$("#side-navbar li").on("click",function() {
    $("#searchResult").addClass("d-none")
})
// * toggel side-Navbar
$("#slider").on("click", openNav)
function openNav() {
    let navegitor = $(".navegitor").innerWidth()
    if($("#side-navbar").css("left") == "0px") {
        $("#side-navbar").animate({left: `-${navegitor}px`},1000);
        $("#slider").removeClass("fa-xmark").addClass("open-close-icon")

        $("#search-btn").css({ top: 0, position: 'relative', opacity: 1 }).animate({ top: 100, opacity: 0 }, 1500)
        $("#categries-btn").css({ top: 0, position: 'relative', opacity: 1 }).animate({ top: 100, opacity: 0 }, 1200)
        $("#area-btn").css({ top: 0, position: 'relative', opacity: 1 }).animate({ top: 100, opacity: 0 }, 900)
        $("#ingredints-btn").css({ top: 0, position: 'relative', opacity: 1 }).animate({ top: 100, opacity: 0 }, 600)
        $("#contact-btn").css({ top: 0, position: 'relative', opacity: 1 }).animate({ top: 100, opacity: 0 }, 300)
    


        
    }else {
        $("#side-navbar").animate({left: `0px`},1000)
        $("#slider").removeClass("open-close-icon").addClass("fa-xmark")

        $("#search-btn").css({ top: 100, position: 'relative', opacity: 0 }).animate({ top: 0, opacity: 1 }, 1200)
        $("#categries-btn").css({ top: 100, position: 'relative', opacity: 0 }).animate({ top: 0, opacity: 1 }, 1500)
        $("#area-btn").css({ top: 100, position: 'relative', opacity: 0 }).animate({ top: 0, opacity: 1 }, 1800)
        $("#ingredints-btn").css({ top: 100, position: 'relative', opacity: 0 }).animate({ top: 0, opacity: 1 }, 2100)
        $("#contact-btn").css({ top: 100, position: 'relative', opacity: 0 }).animate({ top: 0, opacity: 1 }, 2400)
    
    }
}

async function first() {
    let dataArray = []
    for (let i = 0; i < 20; i++) {
        let Api = `https://www.themealdb.com/api/json/v1/1/random.php`
        let response = await fetch(Api)
        let finalResponse = await response.json() 
        let mainCateArray =  finalResponse.meals
        dataArray.push(mainCateArray[0])   
    }

    let cartona = ``
    for (let i = 0; i < dataArray.length; i++) {
        cartona += ` 
      <div class="col-md-3 text-center">
        <figure class="position-relative overflow-hidden rounded-1 random-items" id="${dataArray[i].idMeal}">
          <img src="${dataArray[i].strMealThumb}" alt="" class="w-100">
          <figcaption class="position-absolute d-flex flex-column align-items-center">
            <h2 class="ms-2 fw-semibold">${dataArray[i].strCategory}</h2>
            <p>${dataArray[i].strInstructions.split(" ").slice(0,10).join(" ")}</p>
          </figcaption>
        </figure>
      </div>
    `}
       document.getElementById("main").innerHTML = cartona;
  
        $(".random-items").on("click",async function(e) {
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
            let cartona = `
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

first()