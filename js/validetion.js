export class validetion {
    constructor() {
        $("#contact-btn").on("click", this.valideInput.bind(this))
    }
    valideInput() {
       
        let cartona = `  <div class="col-md-6 mt-4">
        <input type="text" class="bg-white text-black form-control" placeholder="Enter Your Name" id="userName">
          <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">s
                    Special characters and numbers not allowed
                </div>
      </div>
      <div class="col-md-6 mt-4">
        <input type="email" class="bg-white text-black form-control" placeholder="Enter Your Email" id="userEmail">
        <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
      </div>
      <div class="col-md-6 mt-4">
        <input type="tel" class="bg-white text-black form-control" placeholder="Enter Your phone" id="userPhone">
      </div>
      <div class="col-md-6 mt-4">
        <input type="number" class="bg-white text-black form-control" placeholder="Enter Your Agre" id="userAge">
      </div>
      <div class="col-md-6 mt-4">
        <input type="password" class="bg-white text-black form-control" placeholder="Enter Your Password" id="userPasword">
      </div>
      <div class="col-md-6 mt-4">
        <input type="password" class="bg-white text-black form-control" placeholder="Repassword" id="userChPaswword">
      </div>
      <div class="col-md-12 mt-4 text-center">
      <button id="submitBtn" disabled="true" class="btn btn-outline-danger px-2 mt-3">Submit</button>
      </div>
      `
      document.getElementById("main").innerHTML = cartona
      $("input").on("input",function(e) {
        console.log(e.target.value,e.target.id);
        console.log($("#userPasword")[0].value);
        let regex = {
            userName: /^[a-z0-9_-]{3,15}$/,
            userEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            userPhone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            userAge:/^[1-9][[0-9]$/,
            userPasword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            userChPaswword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,

        }
        if(regex[e.target.id].test(e.target.value) == true ) {
            console.log("match");
            $(`#${e.target.id}`).removeClass("is-invalid").addClass("is-valid")
            $(`#${e.target.id}`).next().removeClass("d-block").addClass("d-none")
        }else {
            console.log("Not Match");
            $(`#${e.target.id}`).removeClass("is-valid").addClass("is-invalid")
            $(`#${e.target.id}`).next().removeClass("d-none").addClass("d-block")
        }
        if ($("#userName").hasClass("is-valid") && $("#userEmail").hasClass("is-valid") && $("#userPhone").hasClass("is-valid")
        && $("#userAge").hasClass("is-valid") && $("#userPasword").hasClass("is-valid") && $("#userChPaswword").hasClass("is-valid") && $("#userPasword")[0].value == $("#userChPaswword")[0].value) {
            $("#submitBtn").attr("disabled",false)
            $("#submitBtn").removeClass("btn-outline-danger").addClass("btn-outline-success")
        }
        else{
          $("#submitBtn").addClass("btn-outline-danger").removeClass("btn-outline-success")
          $("#userChPaswword").removeClass("is-valid").addClass("is-invalid")
        }
    })
    }
    
}
