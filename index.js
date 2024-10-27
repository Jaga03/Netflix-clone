function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function changeLanguage(language) {
    document.querySelector(".lang-btn").innerHTML = '<img src="images/icon.png" src="lang-icon" class="lang-icon">' + language + ' <img src="images/down-icon.png" class="drop-icon" alt="Dropdown icon">';
    toggleDropdown();
  }
  
  window.onclick = function(event) 
  {
    if (!event.target.matches('.lang-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  let currentPosition = 0;
  const cardWidth = 200 + 30;
  const visibleCards = 5;
  const totalCards = 10;
  const track = document.getElementById('carousel-track');
  
  function moveLeft() {
      if (currentPosition > 0) {
          currentPosition--;
          track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
      }
  }
  
  function moveRight() {
      if (currentPosition < totalCards - visibleCards) {
          currentPosition++;
          track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
      }
  }

  const faqs=document.querySelectorAll(".faq");

  faqs.forEach((faq)=>{
       faq.addEventListener("click",()=>{
        if(faq.classList.contains("active")){
          faq.classList.remove("active")
        }
        else{
          faq.classList.add("active")
          faqs.forEach((otherfaq)=>{
             if(otherfaq != faq){
              otherfaq.classList.remove("active")
             }
          })
        }
       })
  })

  function SignIn(){
    window.location.href = 'SignIn.html';
  }