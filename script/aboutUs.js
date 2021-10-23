const navDropdownToggle = document.getElementById('dropdown-toggle');
const navDropdownContent = document.getElementById('dropdown-content');

const langDropdown = document.getElementById('lang-dropdown');
const langDropdownContent = document.getElementById('lang-dropdown-content');

const displayedFlag = document.getElementById('displayed-flag');
const inaLang = document.getElementById('ina-lang');
const engLang = document.getElementById('eng-lang');

function toggleDropdown(){
  navDropdownContent.classList.toggle('display-on');
}

function toggleLanguageDropdown(){
  langDropdownContent.classList.toggle('language-on');
}

function inaLangClicked(){
  displayedFlag.innerHTML = 'INA<img src="./assets/img/Indonesia.png" alt="Indonesia">';
}
function engLangClicked(){
  displayedFlag.innerHTML = 'ENG<img src="./assets/img/United Kingdom.png" alt="English">';
}

navDropdownToggle.addEventListener('click' ,toggleDropdown);
langDropdown.addEventListener('click', toggleLanguageDropdown);
inaLang.addEventListener('click', inaLangClicked);
engLang.addEventListener('click', engLangClicked);

// language feature

const active = document.getElementById('active');
const homeAu = document.getElementById('homeAu');
const courseAu = document.getElementById('courseAu');
const loginAu = document.getElementById('loginAu');
const headerAu = document.getElementById('headerAu');
const headerDes = document.getElementById('headerDes');
const getStarted = document.getElementById('getStarted');
const why = document.getElementById('why');
const curriculum = document.getElementById('curriculum');
const learnAt = document.getElementById('learnAt');
const exTut = document.getElementById('exTut');
const ourProfile = document.getElementById('ourProfile');
const ourProfileDes = document.getElementById('ourProfileDes');
const student = document.getElementById('student');
const course = document.getElementById('course');
const instructors = document.getElementById('instructors');
const enterprise = document.getElementById('enterprise');
const footerDes = document.getElementById('footerDes');
const homeMob = document.getElementById('homeMob');
const courseMob = document.getElementById('courseMob');
const aboutUsMob = document.getElementById('aboutUsMob');
const loginMob = document.getElementById('loginMob');
const homeFot = document.getElementById('homeFot');
const courseFot = document.getElementById('courseFot');
const aboutUsFot = document.getElementById('aboutUsFot');
const loginFot = document.getElementById('loginFot');
const copyright = document.getElementById('copyright');

let language = {
  eng : {
    active : 'About Us', 
    homeAu : 'Home', 
    courseAu : 'Course',
    loginAu : 'Login',
    headerAu : 'We Create Video Course for Programming', 
    headerDes : 'We share knowledge with the world up to +10.000 tutorial videos.',
    getStarted : 'Get Started',
    why : 'Why <span>&lt;speed-runner&gt;</span> ?', 
    curriculum : 'High standard international curriculum',
    learnAt : 'Learn at your own pace',
    exTut : 'Learn from experienced tutor',
    ourProfile : 'Our Profile',
    ourProfileDes : 'We create the best programming education online.', 
    student : 'Students',
    course : 'Course',
    instructors : 'Instructors',
    enterprise : 'Enterprise Customers',
    homeMob :'Home',
    courseMob : 'Course',
    aboutUsMob : 'About Us',
    loginMob: 'Login',
    homeFot : 'Home',
    courseFot : 'Course',
    aboutUsFot : 'About Us',
    loginFot : 'Login',
    copyright : '©2021 Bisma Bendesa. All Rights Reserved',
    footerDes: '<span>&lt;speed-runner&gt;</span> is a platform contains course for those who want to be a developer or improve skills'
  }, 
  ina : {
    active : 'Tentang Kami',
    homeAu : 'Beranda',
    courseAu : 'Kursus',
    loginAu : 'Masuk', 
    headerAu : 'Kami membuat Video Kursus untuk Pemrograman',
    headerDes : 'Kami berbagi pengetahuan dengan dunia hingga +10.000 video tutorial.',
    getStarted : 'Mulai',
    why : 'Kenapa <span>&lt;speed-runner&gt;</span> ?',
    curriculum: 'Standar kurikulum internasional',
    learnAt : 'Belajar sesuai tempo anda', 
    exTut : 'Belajar dari tutor yang berpengalaman',
    ourProfile : 'Profil Kami',
    ourProfileDes : 'Kami membuat video edukasi programming terbaik',
    student : 'Murid',
    course: 'Kursus', 
    instructors : 'Instruktur',
    enterprise : 'Pelanggan wirausaha',
    homeMob:  'homeMob',
    courseMob : 'Kursus', 
    aboutUsMob : 'Tentang Kami',
    loginMob : "Masuk",
    homeFot : 'Beranda',
    courseFot : 'Kursus',
    aboutUsFot: 'Tentang Kami',
    loginFot : 'Masuk',
    copyright : '©2021 Bisma Bendesa. Seluruh Hak Cipta Dilindungi.',
    footerDes : '<span>&lt;speed-runner&gt;</span> adalah platform yang berisi kursus bagi orang-orang yang ingin meningkatkan skill programming',
  }
}

function changeLanguageIna(){
  active.innerHTML = language.ina.active;
  homeAu.innerHTML = language.ina.homeAu;
  courseAu.innerHTML = language.ina.courseAu;
  loginAu.innerHTML = language.ina.loginAu;
  headerAu.innerHTML = language.ina.headerAu;
  headerDes.innerHTML = language.ina.headerDes;
  getStarted.innerHTML = language.ina.getStarted;
  why.innerHTML = language.ina.why;
  curriculum.innerHTML = language.ina.curriculum;
  learnAt.innerHTML = language.ina.learnAt;
  exTut.innerHTML = language.ina.exTut;
  ourProfile.innerHTML = language.ina.ourProfile;
  ourProfileDes.innerHTML = language.ina.ourProfileDes;
  student.innerHTML = language.ina.student;
  course.innerHTML = language.ina.course;
  instructors.innerHTML = language.ina.instructors;
  enterprise.innerHTML = language.ina.enterprise;
  homeMob.innerHTML = language.ina.homeMob;
  courseMob.innerHTML = language.ina.courseMob;
  aboutUsMob.innerHTML = language.ina.aboutUsMob;
  homeFot.innerHTML = language.ina.homeFot;
  courseFot.innerHTML = language.ina.courseFot;
  aboutUsFot.innerHTML = language.ina.aboutUsFot;
  loginFot.innerHTML = language.ina.loginFot;
  copyright.innerHTML = language.ina.copyright;
  footerDes.innerHTML = language.ina.footerDes;
  
}
function changeLanguageEng(){
  active.innerHTML = language.eng.active;
  homeAu.innerHTML = language.eng.homeAu;
  courseAu.innerHTML = language.eng.courseAu;
  loginAu.innerHTML = language.eng.loginAu;
  headerAu.innerHTML = language.eng.headerAu;
  headerDes.innerHTML = language.eng.headerDes;
  getStarted.innerHTML = language.eng.getStarted;
  why.innerHTML = language.eng.why;
  curriculum.innerHTML = language.eng.curriculum;
  learnAt.innerHTML = language.eng.learnAt;
  exTut.innerHTML = language.eng.exTut;
  ourProfile.innerHTML = language.eng.ourProfile;
  ourProfileDes.innerHTML = language.eng.ourProfileDes;
  student.innerHTML = language.eng.student;
  course.innerHTML = language.eng.course;
  instructors.innerHTML = language.eng.instructors;
  enterprise.innerHTML = language.eng.enterprise;
  homeMob.innerHTML = language.eng.homeMob;
  courseMob.innerHTML = language.eng.courseMob;
  aboutUsMob.innerHTML = language.eng.aboutUsMob;
  homeFot.innerHTML = language.eng.homeFot;
  courseFot.innerHTML = language.eng.courseFot;
  aboutUsFot.innerHTML = language.eng.aboutUsFot;
  loginFot.innerHTML = language.eng.loginFot;
  copyright.innerHTML = language.eng.copyright;
  footerDes.innerHTML = language.eng.footerDes;
}


inaLang.addEventListener('click', changeLanguageIna);
engLang.addEventListener('click', changeLanguageEng);