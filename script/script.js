const cardProject = document.getElementById('project');
const cardTutor = document.getElementById('tutor');
const cardLifetime = document.getElementById('lifetime');
const cardCommunity = document.getElementById('community');
const navDropdownToggle = document.getElementById('dropdown-toggle');
const navDropdownContent = document.getElementById('dropdown-content');
const header = document.getElementById('lp-header');
const langDropdown = document.getElementById('lang-dropdown');
const langDropdownContent = document.getElementById('lang-dropdown-content');
const displayedFlag = document.getElementById('displayed-flag');
const inaLang = document.getElementById('ina-lang');
const engLang = document.getElementById('eng-lang');
const temp = cardProject.innerHTML;
const temp1 = cardTutor.innerHTML;
const temp2 = cardLifetime.innerHTML;
const temp3 = cardCommunity.innerHTML;
console.log(temp);

// const onClick = (event) => {
//   console.log(event.srcElement.id);
// }
// window.addEventListener('click', onClick);

function cardProjectClicked(){
  cardProject.classList.add('card-clicked');
  setTimeout(() => {
    cardProject.innerHTML = `<h5 id="pb">Project-based Learning</h5>
                            <p id="pbp">You will learn based on real project to make sure you know what you're doing!</p>`;
  }, 40);
}
function cardTutorClicked(){
  cardTutor.classList.add('card-clicked');
  setTimeout(() => {
    cardTutor.innerHTML = `<h5>Professional Tutors</h5>
                            <p>There are 20.000+ instructors in our course, We always here to help you with your study.</p>`;
  }, 40);
}

function cardLifetimeClicked(){
  cardLifetime.classList.add('card-clicked');
  setTimeout(() => {
    cardLifetime.innerHTML = `<h5>Lifetime Tutorials</h5>
                            <p>Pay once, and enjoy your lifetime course videos. Your course will always on our database and cannot be expired.</p>`;
  }, 40);
}

function cardCommunityClicked(){
  cardCommunity.classList.add('card-clicked');
  setTimeout(() => {
    cardCommunity.innerHTML = `<h5>Community Group</h5>
                            <p>Having struggle? Don’t worry there are tons of community to help you!</p>`;
  }, 40);
}

function cardLeaved(){
  cardProject.innerHTML = temp;
  cardTutor.innerHTML = temp1;
  cardLifetime.innerHTML = temp2;
  cardCommunity.innerHTML = temp3;
}

cardProject.addEventListener('click', cardProjectClicked);
cardTutor.addEventListener('click',cardTutorClicked );
cardLifetime.addEventListener('click',cardLifetimeClicked );
cardCommunity.addEventListener('click',cardCommunityClicked );
cardProject.addEventListener('mouseleave', cardLeaved);
cardTutor.addEventListener('mouseleave', cardLeaved);
cardLifetime.addEventListener('mouseleave', cardLeaved);
cardCommunity.addEventListener('mouseleave', cardLeaved);



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


// language feature landing page

const active = document.getElementById('active');
const lpTitle = document.getElementById('lp-title');
const course = document.getElementById('course');
const aboutUs = document.getElementById('about-us');
const login = document.getElementById('login');
const homeMob = document.getElementById('homeMob');
const courseMob = document.getElementById('courseMob');
const aboutMob = document.getElementById('aboutMob');
const loginMob = document.getElementById('loginMob');
const headerP = document.getElementById('headerP');
const tryit = document.getElementById('try-it');
const signup = document.getElementById('sign-up');
const serviceTitle = document.getElementById('serviceTitle');
const projectBased = document.getElementById('projectBased');
const proTutors = document.getElementById('proTutors');
const lifeTutor = document.getElementById('lifeTutor');
const commGroup = document.getElementById('commGroup');
const averageSalary = document.getElementById('averageSalary');
const ezProg = document.getElementById('ezProg');
const ezProgValue = document.getElementById('ezProgValue');
const learn = document.getElementById('learn');
const learnVal = document.getElementById('learnVal');
const get = document.getElementById('get');
const explore = document.getElementById('explore');
const exploreVal = document.getElementById('exploreVal');
const exploreCta = document.getElementById('exploreCta');
const rStudents = document.getElementById('rStudents');
const alumni = document.getElementById('alumni');
const job = document.getElementById('job');
const jobDes = document.getElementById('jobDes');
const job1 = document.getElementById('job1');
const jobDesc1 = document.getElementById('jobDesc1');
const job2 = document.getElementById('job2');
const jobDesc2 = document.getElementById('jobDesc2');
const footerText = document.getElementById('footerText');
const homeFot = document.getElementById('homeFot');
const courseFot = document.getElementById('courseFot');
const aboutFot = document.getElementById('aboutFot');
const loginFot = document.getElementById('loginFot');
const copyrightFot = document.getElementById('copyrightFot');
const beStudents = document.getElementById('beStudents');
const qaStudents = document.getElementById('qaStudents');
const daStudents = document.getElementById('daStudents');


let language = {
  eng: {
    lpTitle : 'Learn How To <span>Code</span> Less in One Month.',
    active : 'Home',
    course : 'Course', 
    aboutUs : 'About Us',
    login : 'Login', 
    headerP : 'Don’t Know where to start? We’re here to guide you and teach you how to code less than 1 month.',
    tryit : 'TRY IT FOR FREE',
    signup : 'SIGN UP NOW',
    serviceTitle : "What Will You Get?",
    projectBased : "Project-based Learning",
    proTutors : "Professionals Tutors",
    lifeTutor : 'Lifetime Tutorials',
    commGroup : 'Community Group',
    averageSalary : 'Programmer Average Salary',
    salaryVal : '<span>$86,550</span>/year',
    ezProg : 'Being Programmer is <span>Easier</span> Than You Think',
    ezProgValue : 'Being a programmer isn’t that hard. You just need a strong will and comitment in order to be a good programmer.', 
    learn : 'Learn Code, Build Project, Earn Certificate',
    learnVal : 'More than 10.000 <speed-runner> graduates have gotten jobs at tech companies.', 
    get : "Get Started", 
    explore : "Explore The Most Popular Category", 
    exploreVal : "We make all theses tutorial from scratch, step by step to guide you to master skills.", 
    exploreCta : 'Go To Category', 
    rStudents : '53.321 Students',
    alumni : 'What Alumni Say About <span>&lt;speed-runner&gt;</span>', 
    job : 'Software Engineer at Microsoft',
    jobDes : "“It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on <span>&lt;speed-runner&gt;</span>. Within a year I had a six-figure job as a Software Engineer. <span>&lt;speed-runner&gt;</span> changed my life.”</span>",
    job1 : 'Game Designer at Valorant', 
    jobDesc1 : '<span>&lt;speed-runner&gt;</span> was the gateway to my career as a Game Designer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."', 
    job2 : 'Software Engineer at Instagram',
    jobDesc2 : 'I\'ve always struggled with learning JavaScript. I\'ve taken many courses but <span>&lt;speed-runner&gt;</span> course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <span>&lt;speed-runner&gt;</span> gave me the skills and confidence I needed to land my dream job as a software engineer at Instagram.', 
    footerText : '<span>&lt;speed-runner&gt;</span> is a course for those who want to be a developer or improve skills',
    homeFot : 'Home', 
    courseFot : 'Course',
    aboutFot : 'About Us', 
    loginFot : 'Login', 
    copyrightFot : '©2021 Bisma Bendesa. All Rights Reserved', 
    beStudents : '42.869 Students', 
    qaStudents : '10.659 Students',
    daStudents : '5.893 Students',
  },
  ina :{
    lpTitle : 'Belajar Cara <span>Ngoding</span> Kurang Dari Satu Bulan.',
    active : 'Beranda',
    course : 'Kursus', 
    aboutUs : 'Tentang Kami',
    login : 'Masuk',
    headerP : 'Tidak tahu harus mulai dari mana? Kami di sini untuk memandu Anda dan mengajari Anda cara membuat kode kurang dari 1 bulan.',
    tryit : 'COBA GRATIS',
    signup : 'DAFTAR SEKARANG',
    serviceTitle : 'Apa Yang Akan Kamu Dapatkan?',
    projectBased : 'Belajar Dari Projek',
    proTutors : 'Tutor Professional',
    lifeTutor : 'Tutorial Seumur Hidup',
    commGroup : 'Komunitas Grup',
    averageSalary : 'Gaji rata-rata Programmer',
    salaryVal : '<span>$86,550</span>/tahun',
    ezProg : 'Menjadi Programmer Lebih <span>Mudah</span> Dari Yang Anda Pikirkan', 
    ezProgValue : 'Menjadi seorang programmer tidaklah sulit. Anda hanya perlu kemauan dan komitmen yang kuat untuk menjadi programmer yang baik.',
    learn : 'Pelajari Kode, Bangun Proyek, Dapatkan Sertifikat', 
    learnVal : 'Lebih dari 10.000 lulusan <speed-runner> mendapatkan pekerjaan di perusahaan teknologi.',
    get : 'Mulai',
    explore : 'Jelajahi Kategori Paling Populer', 
    exploreVal : 'Kami membuat semua tutorial dari awal, langkah demi langkah untuk memandu Anda menguasai materi.',
    exploreCta : 'Jelajahi Kategori', 
    rStudents : '53.321 Murid', 
    alumni : 'Apa yang alumni katakan terhadap <span>&lt;speed-runner&gt;</span>', 
    job : 'Software Engineer di Microsoft', 
    jobDes : "Menakutkan untuk mengubah karier.. Saya hanya mendapatkan keyakinan bahwa saya dapat membuat kode dengan mengerjakan ratusan jam pelajaran gratis di<span>&lt;speed-runner&gt;</span>. Dalam setahun saya memiliki pekerjaan enam digit sebagai Software Engineer. <span>&lt;speed-runner&gt;</span> mengubah hidup saya.”</span>", 
    job1 : 'Game Designer di Valorant', 
    jobDesc1 : '<span>&lt;speed-runner&gt;</span>adalah pintu gerbang karir saya sebagai Game Designer. Kurikulum yang terstruktur dengan baik membawa pengetahuan pengkodean saya dari tingkat pemula total ke tingkat yang sangat percaya diri. Itu semua yang saya butuhkan untuk mendapatkan pekerjaan dev pertama saya di perusahaan yang luar biasa.',
    job2 : 'Software Engineer di Instagram',
    jobDesc2 : 'Saya selalu kesulitan mempelajari JavaScript. Saya telah mengambil banyak kursus tetapi kursus<span>&lt;speed-runner&gt;</span> adalah yang macet. Mempelajari JavaScript serta struktur data dan algoritme di<span>&lt;speed-runner&gt;</span> memberi saya keterampilan dan kepercayaan diri yang saya butuhkan untuk mendapatkan pekerjaan impian saya sebagai insinyur perangkat lunak di Instagram.', 
    footerText : '<span>&lt;speed-runner&gt;</span> adalah kursus bagi mereka yang ingin menjadi pengembang atau meningkatkan keterampilan', 
    homeFot : 'Beranda', 
    courseFot : 'Kursus', 
    aboutFot : 'Tentang Kami', 
    loginFot : 'Masuk', 
    copyrightFot : '©2021 Bisma Bendesa. Seluruh hak dilindungi', 
    beStudents : '42.869 Murid', 
    qaStudents : '10.659 Murid', 
    daStudents : '5.893 Murid'
  }
}

function changeLanguageIna(){
  console.log(inaLang.textContent);
  lpTitle.innerHTML = language.ina.lpTitle;
  active.innerHTML = language.ina.active;
  course.innerHTML = language.ina.course;
  aboutUs.innerHTML = language.ina.aboutUs;
  login.innerHTML = language.ina.login;
  homeMob.innerHTML = language.ina.active;
  courseMob.innerHTML = language.ina.course;
  aboutMob.innerHTML = language.ina.aboutUs;
  loginMob.innerHTML = language.ina.login;
  headerP.innerHTML = language.ina.headerP;
  tryit.innerHTML = language.ina.tryit;
  signup.innerHTML = language.ina.signup;
  serviceTitle.innerHTML = language.ina.serviceTitle;
  projectBased.innerHTML = language.ina.projectBased;
  proTutors.innerHTML = language.ina.proTutors;
  lifeTutor.innerHTML = language.ina.lifeTutor;
  commGroup.innerHTML = language.ina.commGroup;
  averageSalary.innerHTML = language.ina.averageSalary;
  salaryVal.innerHTML = language.ina.salaryVal;
  ezProg.innerHTML = language.ina.ezProg;
  ezProgValue.innerHTML = language.ina.ezProgValue;
  learn.innerHTML = language.ina.learn;
  learnVal.innerHTML = language.ina.learnVal;
  get.innerHTML = language.ina.get;
  explore.innerHTML = language.ina.explore;
  exploreVal.innerHTML = language.ina.exploreVal;
  exploreCta.innerHTML = language.ina.exploreCta;
  rStudents.innerHTML = language.ina.rStudents;
  alumni.innerHTML = language.ina.alumni;
  job.innerHTML = language.ina.job;
  jobDes.innerHTML = language.ina.jobDes;
  job1.innerHTML = language.ina.job1;
  jobDesc1.innerHTML = language.ina.jobDesc1;
  job2.innerHTML = language.ina.job2;
  jobDesc2.innerHTML = language.ina.jobDesc2;
  footerText.innerHTML = language.ina.footerText;
  homeFot.innerHTML = language.ina.homeFot;
  courseFot.innerHTML = language.ina.courseFot;
  aboutFot.innerHTML = language.ina.aboutFot;
  loginFot.innerHTML = language.ina.loginFot;
  copyrightFot.innerHTML = language.ina.copyrightFot;
  beStudents.innerHTML = language.ina.beStudents;
  qaStudents.innerHTML = language.ina.qaStudents;
  daStudents.innerHTML = language.ina.daStudents;
}
function changeLanguageEng(){
  console.log(engLang.textContent);
  lpTitle.innerHTML = language.eng.lpTitle;
  active.innerHTML = language.eng.active;
  course.innerHTML = language.eng.course;
  aboutUs.innerHTML = language.eng.aboutUs;
  login.innerHTML = language.eng.login;
  homeMob.innerHTML = language.eng.active;
  courseMob.innerHTML = language.eng.course;
  aboutMob.innerHTML = language.eng.aboutUs;
  loginMob.innerHTML = language.eng.login;
  headerP.innerHTML = language.eng.headerP;
  tryit.innerHTML = language.eng.tryit;
  signup.innerHTML = language.eng.signup;
  serviceTitle.innerHTML = language.eng.serviceTitle;
  projectBased.innerHTML = language.eng.projectBased;
  proTutors.innerHTML = language.eng.proTutors;
  lifeTutor.innerHTML = language.eng.lifeTutor;
  commGroup.innerHTML = language.eng.commGroup;
  averageSalary.innerHTML = language.eng.averageSalary;
  salaryVal.innerHTML = language.eng.salaryVal;
  ezProg.innerHTML = language.eng.ezProg;
  ezProgValue.innerHTML = language.eng.ezProgValue;
  learn.innerHTML = language.eng.learn;
  learnVal.innerHTML = language.eng.learnVal;
  get.innerHTML = language.eng.get;
  explore.innerHTML = language.eng.explore;
  exploreVal.innerHTML = language.eng.exploreVal;
  exploreCta.innerHTML = language.eng.exploreCta;
  rStudents.innerHTML = language.eng.rStudents;
  alumni.innerHTML = language.eng.alumni;
  job.innerHTML = language.eng.job;
  jobDes.innerHTML = language.eng.jobDes;
  job1.innerHTML = language.eng.job1;
  jobDesc1.innerHTML = language.eng.jobDesc1;
  job2.innerHTML = language.eng.job2;
  jobDesc2.innerHTML = language.eng.jobDesc2;
  footerText.innerHTML = language.eng.footerText;
  homeFot.innerHTML = language.eng.homeFot;
  courseFot.innerHTML = language.eng.courseFot;
  aboutFot.innerHTML = language.eng.aboutFot;
  loginFot.innerHTML = language.eng.loginFot;
  copyrightFot.innerHTML = language.eng.copyrightFot;
  beStudents.innerHTML = language.eng.beStudents;
  qaStudents.innerHTML = language.eng.qaStudents;
  daStudents.innerHTML = language.eng.daStudents;
}

inaLang.addEventListener('click', changeLanguageIna);
engLang.addEventListener('click', changeLanguageEng);


