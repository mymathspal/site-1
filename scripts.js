const body = document.querySelector("body");
const pictures = document.querySelectorAll(".pic");

const modalTemplate = document.querySelector(".pic-modal-template");
const templateClone = modalTemplate.content.cloneNode(true);
document.body.appendChild(templateClone);

const picModal = document.querySelector(".pic-modal");
const modalImage = document.querySelector(".modal-image");

const closeBtn = document.querySelector(".close-btn");
const previousBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-links-box");

menuBtn.addEventListener("click", () => {
    console.log("clickedd")
    const menuOpen = menu.classList.toggle("openMenu");
    menuOpen ? menuBtn.textContent = "Close" : menuBtn.textContent = "Menu";
})




let currentImageIndex = 0;


pictures.forEach((picture, index) => {

        picture.addEventListener("click", () =>{
        modalImage.src = "";

        currentImageIndex = index;

        picModal.showModal();
        modalImage.src = picture.src;
        console.log("you clicked a picture");
    });
});


 // move to the next image
nextBtn?.addEventListener("click", () => {
    currentImageIndex++;

    if (currentImageIndex >= pictures.length)  { currentImageIndex =  0; }

     modalImage.src = pictures[currentImageIndex].src;
  
});





closeBtn?.addEventListener("click", (event) => { picModal.close(); })


    // move to the previous image
previousBtn?.addEventListener("click", () => {

    currentImageIndex --

    if (currentImageIndex < 0){ currentImageIndex = pictures.length - 1; }  
    
    modalImage.src = pictures[currentImageIndex].src;
})
