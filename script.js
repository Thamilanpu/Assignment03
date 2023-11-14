
//navbar dark mood

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }
onclick="myFunction()"

// body{
//     padding: 3px;
//     background-color: white;
//     color: black;

//   }
  
//   .dark-mode {
//     background-color: black;
//     color: white;
//   }

// Dark mode

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var image = document.getElementById('mode');
  var currentSrc = image.src;
  if (currentSrc.includes('moon(dark)')) {

      image.src = './assets/images/brightness-high.svg';
  } else {

      image.src = './assets/images/moon.svg';
  }
  
}






//  faq start
// questions accordion

const accordionItems = document.querySelectorAll(".questions-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions-header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions-content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};
// faq end
