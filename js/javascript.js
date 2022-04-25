// Bouton scroll
/*
const btn = document.querySelector('.boutonscroll');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
*/


const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .1
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible")
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".reveal").forEach(function (r){
  observer.observe(r)
})





const title = document.querySelector('.titreanim');

let txt = " Computer Science Student.";
let nbr = 0;


function effacer(){
    if(txt.length > 0){
        setTimeout(() => {
            txt = txt.substring(0, txt.length - 1);
            title.innerHTML = "" + `<span>${txt}</span>`

            effacer()

        }, 50);
    } else {
      if(nbr==0){
        nbr++;
        txt = " Front-End Developer.";
      } else if (nbr==1){
        nbr++;
        txt = " Back-End Developer.";
      } else if (nbr==2){
        nbr++;
        txt = " Unity Developer.";
      } else if (nbr==3){
        nbr++;
        txt = " Community Manager.";
      } else if (nbr==4){
        nbr++;
        txt = " Software Developer.";
      } else if (nbr==5){
        nbr=0;
        txt = " Computer Science Student.";
      }
      setTimeout(() => {
        typewriter(txt, 0)
      }, 200);
    }
}

function typewriter(word, index){

    if(index < word.length) {

        setTimeout(() => {

            title.innerHTML += `<span>${word[index]}</span>`

            typewriter(txt, index + 1)

        }, 50);

    } else {
        setTimeout(() => {
          effacer();
        }, 2000);
    }

}

setTimeout(() => {

    typewriter(txt, 0)

}, 500);














particlesJS("particles-js", {"particles":{"number":{"value":130,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7812684959397707,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":75,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

