function showPage(pageId) {

    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === pageId) {
            pages[i].style.display = 'block';
        } else {
            pages[i].style.display = 'none';
        }
    }


}


// Show the home page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    greetingfunc();
    thisyear();

});


function greetingfunc() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
      greeting = "Good Morning and welcome to my personal portfolio!";
    } else if (hour < 18) {
      greeting = "Good Afternoon and welcome to my personal portfolio!";
    } else{
      greeting = "Good Evening and welcome to my personal portfolio!";
    }
    document.getElementById("greet").innerHTML = greeting;
    };

 
function thisyear() {
    var year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
    }


    function Disp(x){
        el = document.getElementById(x);
        if (el.style.display === 'none' ){
          var cls = document.getElementsByClassName("desc");
          var i;
          for (i = 0; i < cls.length; i++) {
            cls[i].style.display = "none";
          }
          el.style.display = 'block';
        }else{
          el.style.display = 'none';
        }
      }

