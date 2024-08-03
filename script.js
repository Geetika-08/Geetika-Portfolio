var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "prateeksha8177@gmail.com",
//         Password : "NottShyy@05",
//         To : 'prateekshapandey8177@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "This is the subject",
//         Body : + document.getElementById("text").value
//         +document.getElementById("email").value
     
//         + document.getElementById("message").value
//     }).then(
//       message => alert(message)
//     );
// }