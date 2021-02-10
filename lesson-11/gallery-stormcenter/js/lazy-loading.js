const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("currentyear").textContent = new Date().getFullYear();


// * Progressive image loading technique using IntersectionObserver()
// get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// set options
const imgOptions = {
  threshold: .4,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// check to see if IntersectionObserver() is supported
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });

  }, imgOptions); 

  // Loop through each img to check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
}
else { 
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}