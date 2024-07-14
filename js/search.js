export class getSearchInputs {
    constructor() {
        $("#search-btn").on("click",this.getSearch.bind(this))
    }
    getSearch() {
        // $("#search-btn").on("click",function() {
        // })
       let cartona=`
       <div class="col-md-6">
    <input type="text" class="form-control bg-black text-white" id="seach-word" placeholder="Seach by name">
    </div>    
       <div class="col-md-6">
          <input type="text" class="form-control bg-black text-white" id="seach-letter" placeholder="Seach by letter"  maxlength="1">
    </div>    
    `
        document.getElementById("main").innerHTML = cartona;

        $("#seach-word").on("input",sear)
        async function sear(e) {
          
    $("#searchResult").removeClass("d-none")
            if (e.target.value.length < 3) return
            let Api =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
            let response = await fetch(Api)
            let finalResponse = await response.json() 
            let mainCateArray =  finalResponse.meals
            console.log(mainCateArray[0]); 
           let cartona = ` 
            <div class="col-md-3">
              <figure class="position-relative overflow-hidden rounded-1 category-items" id="${mainCateArray[0].strCategory}">
                <img src="${mainCateArray[0].strMealThumb}" alt="" class="w-100">
                <figcaption class="position-absolute d-flex flex-column align-items-center">
                  <h2 class="ms-2 fw-semibold">${mainCateArray[0].strCategory}</h2>
                  <p>${mainCateArray[0].strInstructions}</p>
                </figcaption>
              </figure>
            </div>
          `      
       document.getElementById("searchResult").innerHTML = cartona;

        }

        $("#seach-letter").on("input",searLetter)
        async function searLetter(e) {
          
    $("#searchResult").removeClass("d-none")
        if (e.target.value.length < 1) return
            let Api =  `https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`
            let response = await fetch(Api)
            let finalResponse = await response.json() 
            let mainCateArray =  finalResponse.meals
           let cartona  = `` 
            for (let i = 0; i < mainCateArray.length; i++) {
                cartona += ` 
              <div class="col-md-3">
                <figure class="position-relative overflow-hidden rounded-1 category-items" id="${mainCateArray[i].strCategory}">
                  <img src="${mainCateArray[i].strMealThumb}" alt="" class="w-100">
                  <figcaption class="position-absolute d-flex flex-column align-items-center">
                    <h2 class="ms-2 fw-semibold">${mainCateArray[i].strCategory}</h2>
                    <p>${mainCateArray[i].strInstructions}</p>
                  </figcaption>
                </figure>
              </div>
            `}
              
            document.getElementById("searchResult").innerHTML = cartona;

        }


    }

}