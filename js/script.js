
const circles = document.querySelectorAll('.circles')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
   setInterval(() => {
      changelight();
   }, 1000)
})


let newLight = 0;
let changelight = () => {
   circles[newLight].classList = 'circles';
   newLight += 1
   if (newLight > 2) {
      newLight = 0
   }

   const correctlight = circles[newLight];
   correctlight.classList.add(correctlight.getAttribute
      ("color"));
}




