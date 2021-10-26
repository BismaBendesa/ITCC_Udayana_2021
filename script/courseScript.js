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

//  language feature 

const active = document.getElementById('active');
const homeCor = document.getElementById('homeCor');
const aboutCor = document.getElementById('aboutCor');
const loginCor = document.getElementById('loginCor');
const homeCorMob = document.getElementById('homeCorMob');
const corseCorMob = document.getElementById('corseCorMob');
const aboutCorMob = document.getElementById('aboutCorMob');
const loginCorMob = document.getElementById('loginCorMob');
const getStarted = document.getElementById('getStarted');
const courseCategory = document.getElementById('courseCategory');
const categoryDes = document.getElementById('categoryDes');
const recentCourse = document.getElementById('recentCourse');
const recentCourseDes = document.getElementById('recentCourseDes');
const searchBar = document.getElementById('searchBar');
const programmingLang = document.getElementById('programmingLang');
const mostPop = document.getElementById('mostPop');
const mostPop1 = document.getElementById('mostPop1');
const mostPop2 = document.getElementById('mostPop2');
const newCourse = document.getElementById('new');
const footerText = document.getElementById('footerText');
const homeFot = document.getElementById('homeFot');
const courseFot = document.getElementById('courseFot');
const aboutUsFot = document.getElementById('aboutUsFot');
const copyright = document.getElementById('copyright');



let language = {
  eng : {
    active : 'Course',
    homeCor : 'Home', 
    aboutCor : 'About Us', 
    loginCor : 'Login',
    homeCorMob : 'Home',
    corseCorMob : 'Course',
    aboutCorMob : 'About Us',
    loginCorMob : 'Login',
    cHeaderP : 'What are you waiting for? Start your learning today!',
    getStarted : 'Get Started',
    courseCategory : 'Course Category', 
    categoryDes : 'Here’s the course category that available in <span>&lt;speed-runner&gt;</span>',
    recentCourse : 'Recent Course',
    recentCourseDes : 'Up to 100 new course video per month',
    searchBar : "Search course",
    programmingLang : "Programming Language",
    mostPop : 'Most Popular',
    newCourse : 'New',
    footerText : '<span>&lt;speed-runner&gt;</span> is a platform contains course for those who want to be a developer or improve skills',
    homeFot : 'Home',
    courseFot : 'Course',
    aboutUsFot : 'About Us',
    copyright : '©2021 Bisma Bendesa. All Rights Reserved', 
    
  }, 
  ina : {
    active : 'Kursus', 
    homeCor : 'Beranda',
    aboutCor : 'Tentang Kami',
    loginCor : "Masuk", 
    homeCorMob : 'Beranda',
    corseCorMob : 'Kursus',
    aboutCorMob : 'Tentang Kami',
    loginCorMob : 'Masuk',
    cHeaderP : 'Apa yang kamu tunggu? Mulailah pembelajaran Anda hari ini!',
    getStarted : 'Mulai', 
    courseCategory : "Kategori Kursus", 
    categoryDes : 'Berikut ini adalah kategori kursus yang tersedia di <span>&lt;speed-runner&gt;</span>', 
    recentCourse : 'Kursus Terbaru', 
    recentCourseDes : 'Hingga 100 video baru kursus per bulan',
    searchBar : 'Cari kursus',
    programmingLang :'Bahasa Pemrograman',
    mostPop : 'Terpopuler',
    newCourse : 'Terbaru',
    footerText : '<span>&lt;speed-runner&gt;</span> adalah sebuah platform penyedia kursus bagi mereka yang ingin meningkatkan skill programming',
    homeFot : 'Beranda',
    courseFot :'Kursus',
    aboutUsFot : 'Tentang Kami',
    copyright : '©2021 Bisma Bendesa. Seluruh Hak Cipta Dilindungi.',
  }
}

function changeLanguageIna(){
  active.innerHTML = language.ina.active;
  homeCor.innerHTML = language.ina.homeCor;
  aboutCor.innerHTML = language.ina.aboutCor;
  loginCor.innerHTML = language.ina.loginCor;
  homeCorMob.innerHTML = language.ina.homeCorMob;
  corseCorMob.innerHTML = language.ina.corseCorMob;
  aboutCorMob.innerHTML = language.ina.aboutCorMob;
  loginCorMob.innerHTML = language.ina.loginCorMob;
  cHeaderP.innerHTML = language.ina.cHeaderP;
  getStarted.innerHTML = language.ina.getStarted;
  courseCategory.innerHTML = language.ina.courseCategory;
  categoryDes.innerHTML = language.ina.categoryDes;
  recentCourse.innerHTML = language.ina.recentCourse;
  recentCourseDes.innerHTML = language.ina.recentCourseDes;
  searchBar.innerHTML = language.ina.searchBar;
  programmingLang.innerHTML = language.ina.programmingLang;
  mostPop.innerHTML = language.ina.mostPop;
  mostPop1.innerHTML = language.ina.mostPop;
  mostPop2.innerHTML = language.ina.mostPop;
  footerText.innerHTML = language.ina.footerText;
  homeFot.innerHTML = language.ina.homeFot;
  courseFot.innerHTML = language.ina.courseFot;
  aboutUsFot.innerHTML = language.ina.aboutUsFot;
  copyright.innerHTML = language.ina.copyright;
}
function changeLanguageEng(){
  active.innerHTML = language.eng.active;
  homeCor.innerHTML = language.eng.homeCor;
  aboutCor.innerHTML = language.eng.aboutCor;
  loginCor.innerHTML = language.eng.loginCor;
  homeCorMob.innerHTML = language.eng.homeCorMob;
  corseCorMob.innerHTML = language.eng.corseCorMob;
  aboutCorMob.innerHTML = language.eng.aboutCorMob;
  loginCorMob.innerHTML = language.eng.loginCorMob;
  cHeaderP.innerHTML = language.eng.cHeaderP;
  getStarted.innerHTML = language.eng.getStarted;
  courseCategory.innerHTML = language.eng.courseCategory;
  categoryDes.innerHTML = language.eng.categoryDes;
  recentCourse.innerHTML = language.eng.recentCourse;
  recentCourseDes.innerHTML = language.eng.recentCourseDes;
  searchBar.innerHTML = language.eng.searchBar;
  programmingLang.innerHTML = language.eng.programmingLang;
  mostPop.innerHTML = language.eng.mostPop;
  mostPop1.innerHTML = language.eng.mostPop;
  mostPop2.innerHTML = language.eng.mostPop;
  footerText.innerHTML = language.eng.footerText;
  homeFot.innerHTML = language.eng.homeFot;
  courseFot.innerHTML = language.eng.courseFot;
  aboutUsFot.innerHTML = language.eng.aboutUsFot;
  copyright.innerHTML = language.eng.copyright;
}

inaLang.addEventListener('click', changeLanguageIna);
engLang.addEventListener('click', changeLanguageEng);