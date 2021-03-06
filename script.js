 function dogs(){                                      // fetching the details for the dogs and their details// 
    fetch("https://api.thedogapi.com/v1/breeds")
    .then(response =>{
        if(!response.ok){
            
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const html = data.map(user=>{
            return `
              <div class="Details">
                  <div class="user">
                      <p><img src="${user.image.url}" id="image" alt="${user.name}"></p>
                      <p>Character No: ${user.id}</p>
                      <p>Name: ${user.name}</p>
                      <p>Life Span: ${user.life_span}</p>
                      <p>Breed Group: ${user.breed_group} </p>
                      <p>Temperament: ${user.temperament} <P> 
                  </div>
              </div>`;
        })
        
        .join("");
        console.log(html);
        
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html); 
        
        
    })
    
    .catch(error=>{                       
        console.log(error);
    })
 
}
dogs()


var mybutton = document.getElementById("myBtn");   // Scripting for the Back to top button // 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}