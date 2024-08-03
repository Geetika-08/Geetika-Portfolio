
var tablink= document.getElementsByClassName("tab-link");
var tabcontent= document.getElementsByClassName("tab-content");

function opentab(tablinkname,event ){

    for(link of tablink){
        link.classList.remove("active-link");
    }

    for(content of tabcontent){
        content.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tablinkname).classList.add("active-tab");
}

for (let i = 0; i < tablink.length; i++) {
    tablink[i].addEventListener("click", function(event) {
        opentab(this.getAttribute("data-tab"), event);
    });
}


//POPOUT Transition
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
                observer.unobserve(aboutSection);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(aboutSection);
});


var sidemenu = document.getElementById("sidemenu");

function open_menu(){
    sidemenu.style.right="0";
}

function close_menu(){
    sidemenu.style.right="-200px";
}



const scriptURL = ' https://script.google.com/macros/s/AKfycbyxqADPfiNJWh7l8-pnPsRjgmEGWOOpSa7O6TUbe5yEwDYLjx4WTN8oDO5pkB3U5HhOiw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })





//   LOADING

document.addEventListener("DOMContentLoaded", function() {
    var loading = document.getElementById("loading");
    var content = document.getElementById("content");
    
    // Simulate loading delay
    setTimeout(function() {
        loading.style.display = "none";
        content.style.display = "block";
    }, 1000); // Adjust delay as needed
});
