const comment = document.querySelector('.ratings .container .commenttype .form-control');
const add = document.querySelector('.add-com');
const type = document.querySelector('.modal-body');
const add2 = document.querySelector('.add2');
const comments = document.querySelector('.comments');
const yourname = document.querySelector('.name');
add.addEventListener('click' , () =>{
    console.log(comment.value);
    type.innerHTML =`your comment :<br>
    ${comment.value}` ;
    console.log(type);
});
console.log(add2)
add2.addEventListener('click' , () =>{
    
        comments.innerHTML +=
            `
            <div class="card m-auto col-lg-3 w-25 border-0">
                    <div class="d-flex flex-column g-0">
                      <div class=" d-flex align-items-center p-2">
                        <img src="./assest/images/person.png" class="" alt="...">
                        <h5 class="card-title p-2">${yourname.value}</h5>
                      </div>
                      <div class="">
                        <div class="card-body">
                          <p class="card-text fs-6">${comment.value}</p>
                          <p class="card-text"><small class="text-body-secondary">2 m</small></p>
                         
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary dellet">Dellet</button>
                  </div>
            `;
            comment.value = "";
            yourname.value= "";
    
    
    // const card = document.createElement("div");
   
    const dellet = document.querySelector('.dellet');
    dellet.addEventListener("click", function (event) {
        event.srcElement.parentElement.remove();
});
});
    
function runDeleteButtons() {
    const deleteBtn = document.querySelectorAll(".delete");
    for (let index = 0; index < deleteBtn.length; index++) {
      deleteBtn[index].addEventListener("click", function (event) {
        event.srcElement.parentElement.remove();
      });
    }
  }
