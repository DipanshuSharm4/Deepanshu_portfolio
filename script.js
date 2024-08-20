/*-----FIREBASE CONFIG FOR THE CONTACT FORM ---------*/
const firebaseConfig = {
  apiKey: "",//Use your api key
  authDomain: "contactform-portfolio-ec835.firebaseapp.com",//Use your authDomain
  databaseURL: "https://contactform-portfolio-ec835-default-rtdb.firebaseio.com",//Use your  databaseURL
  projectId: "",//Use your api key
  storageBucket: "",//Use your  projectId
  messagingSenderId: "",//Use your messagingSenderId
  appId: ""//use your appId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var emailid = getElementVal('emailid');
  var msgContent = getElementVal('msgcontent'); // corrected ID here

  // Push data to Firebase
  saveFormData(name, emailid, msgContent);

  //enable alert
  document.querySelector(".alert").style.display = "block";

  //remove the alert 
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  },3000);

  //reset the form
  document.getElementById("contactForm").reset();
}

const getElementVal = (id) => {
  return document.getElementById(id).value; // corrected property here
}

function saveFormData(name, emailid, msgContent) {
  // Generate a unique key for the submission
  var newSubmissionRef = contactFormDB.push();

  // Set data to the unique key
  newSubmissionRef.set({
    name: name,
    email: emailid,
    message: msgContent
  }).then(function() {
    console.log("Data saved successfully!");
    console.log(name,emailid,msgContent);
    // You can add any success message or redirection here
  }).catch(function(error) {
    console.error("Error saving data: ", error);
    // You can handle errors here
  });
}


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Student","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

//For CV download code function

// Get the button element
const downloadButton = document.getElementById('downloadButton');

// Add click event listener
downloadButton.addEventListener('click', () => {
  // Create a new tab and open the CV file
  const newTab = window.open('https://drive.google.com/file/d/15fe6E91cJ6k5r1QtfxAA7jgDAdilaC4X/view?usp=sharing', '_blank'); // Specify the path to your CV file
  if (newTab) {
    newTab.focus();
  } else {
    alert('Please allow pop-ups to open the CV.');
  }
});
// second download button function
const downloadButton1 = document.getElementById('downloadButton1');

// Add click event listener
downloadButton1.addEventListener('click', () => {
  // Create a new tab and open the CV file
  const newTab = window.open('https://drive.google.com/file/d/15fe6E91cJ6k5r1QtfxAA7jgDAdilaC4X/view?usp=sharing', '_blank'); // Specify the path to your CV file
  if (newTab) {
    newTab.focus();
  } else {
    alert('Please allow pop-ups to open the CV.');
  }
});
// third download button function
const downloadButton2 = document.getElementById('downloadButton2');

// Add click event listener
downloadButton2.addEventListener('click', () => {
  // Create a new tab and open the CV file
  const newTab = window.open('https://drive.google.com/file/d/15fe6E91cJ6k5r1QtfxAA7jgDAdilaC4X/view?usp=sharing', '_blank'); // Specify the path to your CV file
  if (newTab) {
    newTab.focus();
  } else {
    alert('Please allow pop-ups to open the CV.');
  }
});