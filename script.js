
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

  // Get the image element by its ID
  var image = document.getElementById('modeIcon');

  // Get the current source of the image
  var currentSrc = image.src;

  // Check the current source and change it based on the mode
  if (currentSrc.includes('moon(dark)')) {
      // If it's in dark mode, switch to light mode image
      image.src = './assets/images/brightness-high.svg';
  } else {
      // If it's in light mode, switch to dark mode image
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
