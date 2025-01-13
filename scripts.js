function showPage(pageId) {
  var pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      if (page.id === pageId) {
          page.style.display = 'block';
          page.offsetHeight; // Force a reflow
          setTimeout(() => {
              page.style.opacity = '1';
          }, 250);
      } else {
          page.style.opacity = '0';
          setTimeout(() => {
              page.style.display = 'none';
          }, 250);
      }
  });
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
    var yearcalc = year-2016;
    document.getElementById("yearcalc").textContent = yearcalc;
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

      function togglePDF(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        var pdfEmbed = document.getElementById("pdfEmbed");
        if (pdfEmbed.style.display === "none") {
            pdfEmbed.style.display = "block";
        } else {
            pdfEmbed.style.display = "none";
        }
    }
