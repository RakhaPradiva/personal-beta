const firebaseConfig = {
  apiKey: "AIzaSyCSiXvRt4Zu8VZPjc_Vdh44GWK-Le6r1kI",
  authDomain: "personal-website-c67c5.firebaseapp.com",
  databaseURL: "https://personal-website-c67c5-default-rtdb.firebaseio.com",
  projectId: "personal-website-c67c5",
  storageBucket: "personal-website-c67c5.appspot.com",
  messagingSenderId: "616489618169",
  appId: "1:616489618169:web:09ae78c4e59142372ff028",
  measurementId: "G-KWD4JSWD8F"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref('contact-form');

let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value
  let messages = document.getElementById('message').value
  // create element for error message below the input field
  let error = document.createElement('p')
  error.classList.add('error-message')

  if (name == '') {
    swal.fire({
      icon: 'warning',
      title: 'Name is required',
      text: 'Please enter your name!',
    })
  } else if (email == '') {
    swal.fire({
      icon: 'warning',
      title: 'Email is required',
      text: 'Please enter your email!',
    })
  } else if (phone == '') {
    swal.fire({
      icon: 'warning',
      title: 'Phone number is required',
      text: 'Please enter your phone number!',
    })
  } else if (!phone.startsWith('08')) {
    swal.fire({
      icon: 'error',
      title: 'Invalid phone number',
      text: 'Phone number must start with 08!',
    })
  } else if (phone.lenght >= 14) {
    swal.fire({
      icon: 'error',
      title: 'Invalid phone number',
      text: 'Phone number cannot be more than 14 digits!',
    })
  }
  // validate phone number only contain number
  else if (isNaN(phone)) {
    swal.fire({
      icon: 'error',
      title: 'Invalid phone number',
      text: 'Phone number cannot contains letter!',
    })
  }

  // else if(phone.lenght <= 10){
  //   swal.fire({
  //     icon: 'warning',
  //     title: 'Invalid phone number',
  //     text: 'Phone number cannot be less than 10 digits',
  //   })
  // }

  else if (messages == '') {
    swal.fire({
      icon: 'warning',
      title: 'Message is required',
      text: 'Please enter your message!',
    })
  }
  // validate message at least 2 words
  else if (messages.split(' ').length < 2) {
    swal.fire({
      icon: 'error',
      title: 'Invalid message',
      text: 'Message must be at least 2 words!',
    })
  } else if (messages.split(' ').length > 100) {
    swal.fire({
      icon: 'error',
      title: 'Invalid message',
      text: 'Message cannot be more than 100 words!',
    })
  } else {
    let data = { name, email, phone, messages }
    database.push(data)
    swal.fire({
      title: 'Thank You',
      text: 'Your message has been sent successfully',
      icon: 'success',
      confirmButtonText: 'Close',
      confirmButtonColor: '#2850a4'
    })
    form.reset()
  }
})

let videoSpeed = document.querySelector('.video-bg').playbackRate = 1.2

$('.logo a').typed({
  strings: [
    'Rakha',
    'Bintang',
    'Pradiva'
  ],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
  showCursor: false
})

$('.home-text h1').typed({
  strings: [
    'Hi, I\'m Rakha',
  ],
  typeSpeed: 150,
  showCursor: false
})


$('.home-text p').typed({
  strings: [
    'Student at BINUS University'
  ],
  typeSpeed: 75,
  startDelay: 3500,
  showCursor: false
})

let nav = document.querySelector('nav')
window.addEventListener('scroll', (e) => {
  if (window.scrollY > 150) {
    nav.style.background = '#2a5298'
    nav.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
    nav.style.transition = 'all 0.5s ease-in'
  } else {
    nav.style.background = 'transparent';
    nav.style.transition = 'all 0.5s ease-out'
    nav.style.boxShadow = 'none'
  }
})

let navToggle = document.querySelector('.navbar-toggle')
let menu = document.querySelector('ul')
navToggle.addEventListener('click', () => {
  menu.classList.toggle('active')
  navToggle.classList.toggle('active')
})

let navLink = document.querySelectorAll('ul li a')
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    navToggle.classList.remove('active')
  })
})

let videoBg = document.querySelector('.video-bg')
new simpleParallax(videoBg, {
  orientation: 'down',
  scale: 1.3,
  overflow: true,
  delay: 0,
  transition: 'cubic-bezier(0,0,0,1)',
  Animation: 'scale'
})




let profilePic = document.querySelector('.about-img img')
let profileText = document.querySelector('.about-text')
window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {
    profilePic.classList.add('animate__animated', 'animate__backInDown')
    profileText.classList.add('animate__animated', 'animate__backInUp')
  } else {
    profilePic.classList.remove('animate__animated', 'animate__backInDown')
    profileText.classList.remove('animate__animated', 'animate__backInUp')
    profilePic.style.opacity = '0'
    profileText.style.opacity = '0'
  }
})


