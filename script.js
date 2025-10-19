const content = {
  en: {
    title: "My Resume - Professional Profile",
    sections: {
      personalInfo: "Personal Information",
      about: "About Me",
      workExperience: "Work Experience",
      education: "Education",
      publications: "Publications",
      skills: "Technical Skills",
    },
    personalInfo: {
      name: "Mobin Valadi",
      role: "Back-End Developer",
      email: "rojcode@gmail.com",
      location: "Sanandaj – Tehran",
      github: "github.com/rojcode",
      twitter: "@mobinValadidev",
    },
    // Rest of English content remains in HTML
  },
  fa: {
    title: "رزومه من - پروفایل حرفه‌ای",
    sections: {
      personalInfo: "اطلاعات شخصی",
      about: "درباره‌ی من",
      workExperience: "تجربیات کاری",
      education: "تحصیلات",
      publications: "انتشارات",
      skills: "مهارت‌های فنی",
    },
    personalInfo: {
      name: "مبین ولدی",
      role: "توسعه‌دهنده بک‌اند",
      email: "rojcode@gmail.com",
      location: "سنندج – تهران",
      github: "github.com/rojcode",
      twitter: "@mobinValadidev",
    },
    about: `من برنامه‌نویس Back-End هستم؛ کسی که عاشق ساختن سیستم‌های تمیز، امن و مقیاس‌پذیر است. چهار سال است در مسیر توسعه‌ی نرم‌افزار حرکت می‌کنم — از پروژه‌های کوچک محلی تا سیستم‌های ERP و پلتفرم‌های بین‌المللی. کارم را با Python آغاز کردم و امروز با Node.js و TypeScript در حال ساخت سیستم‌هایی هستم که نه‌فقط کار می‌کنند، بلکه به‌درستی طراحی شده‌اند.
من به فلسفه‌ی سادگی در کدنویسی باور دارم: نرم‌افزاری خوب، نرم‌افزاری است که توسعه‌دهنده‌اش کمتر بجنگد و کاربرش هیچ‌وقت متوجه پیچیدگی پشت صحنه نشود.`,
    experience: [
      {
        title: "خالق و توسعه‌دهنده‌ی سیستم ERP کرمانشاه آسان‌کار هوشمند",
        date: "۱۴۰۳ –  مهر ماە۱۴۰۴",
        achievements: [
          "ساخت معماری RESTful مقیاس‌پذیر با Node.js و Express",
          "افزایش امنیت با پیاده‌سازی JWT و SSL/TLS",
          "بهینه‌سازی ساختار دیتابیس برای بهبود چشمگیر عملکرد",
          "پیاده‌سازی ابزارهای مدرن مانیتورینگ و مکانیزم‌های پایداری سیستم",
        ],
      },
      {
        title: "توسعه‌دهنده - باهۆز پادکست",
        date: "دی ماە ١٤٠٢ تا فروردین ماە ١٤٠٣",
        achievements: [
          "طراحی و پیاده‌سازی معماری دیتابیس",
          "پیاده‌سازی احراز هویت چندمرحله‌ای (OAuth)",
          "بهینه‌سازی سرعت بارگذاری برای رقابت با پلتفرم‌های مشابه",
        ],
        link: {
          url: "https://bitbucket.org/rojcode/bahoz-cms/src/master/",
          text: "مشاهده سورس کد در Bitbucket →",
        },
      },
      {
        title: "توسعه‌دهنده - Erbil Blockchain",
        date: "۱۴۰۱ – آذر ماە ۱۴۰۲",
        achievements: [
          "توسعه سیستم نمایش قیمت رمزارزها و مدیریت تراکنش‌ها",
          "مهاجرت از دیتابیس رابطه‌ای به NoSQL",
          "حفظ یکپارچگی داده‌ها در طول انتقال سیستم",
        ],
        link: {
          url: "https://bitbucket.org/rojcode/eb/src/master/",
          text: "مشاهده سورس کد در Bitbucket →",
        },
      },
    ],
    education: [
      {
        degree: "دانشجوی ارشد فناوری اطلاعات و ارتباطات",
        major: "گرایش تجارت الکترونیک",
        status: "در حال تحصیل",
      },
      {
        degree: "کارشناسی مهندسی حرفه‌ای نرم‌افزار",
        school: "دانشگاه شهید شمسی‌پور",
        gpa: "۱۷.۵۶",
      },
    ],
    publications: {
      title: "کتاب‌های تألیف شده",
      books: [
        "Swift به زبان ساده – آموزش قدم‌به‌قدم برنامه‌نویسی Swift",
        "یک، دو، سه پایتون – راهنمایی ساده برای ورود به دنیای برنامه‌نویسی",
      ],
    },
    skills: {
      technical: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Sequelize",
        "Python",
        "Flask",
        "FastAPI",
        "Sketch",
      ],
      soft: ["تفکر تحلیلی", "ارتباط مؤثر", "مدیریت زمان", "یادگیری مداوم"],
    },
  },
};

let currentLang = "en";

function updatePersonalInfo() {
  const info = content[currentLang].personalInfo;
  const infoItems = document.querySelectorAll(".info-item");
  const labels =
    currentLang === "fa"
      ? ["نام:", "سمت:", "ایمیل:", "موقعیت:", "گیت‌هاب:", "توییتر:"]
      : ["Name:", "Role:", "Email:", "Location:", "GitHub:", "Twitter:"];

  infoItems.forEach((item, index) => {
    const key = Object.keys(info)[index];
    item.innerHTML = `<strong>${labels[index]}</strong> ${info[key]}`;
  });
}

function updateContent() {
  // Update section titles
  Object.keys(content[currentLang].sections).forEach((section) => {
    const element = document.querySelector(`[data-section="${section}"]`);
    if (element) {
      element.textContent = content[currentLang].sections[section];
    }
  });

  // Update personal information
  updatePersonalInfo();

  // Update about section
  const aboutSection = document.querySelector(
    '[data-section="about"]'
  ).nextElementSibling;
  if (aboutSection) {
    aboutSection.textContent = content[currentLang].about;
  }

  // Update experience
  if (currentLang === "fa" && content[currentLang].experience) {
    const experienceSection = document.querySelector(
      '[data-section="workExperience"]'
    ).parentElement;
    let experienceHTML = "";
    content[currentLang].experience.forEach((exp) => {
      let achievementsHTML = exp.achievements
        .map((achievement) => `<li>${achievement}</li>`)
        .join("");
      if (exp.link) {
        achievementsHTML += `<li><a href="${exp.link.url}" target="_blank" class="project-link">${exp.link.text}</a></li>`;
      }

      experienceHTML += `
                <div class="experience-item">
                    <h3>${exp.title}</h3>
                    <p class="date">${exp.date}</p>
                    <ul>
                        ${achievementsHTML}
                    </ul>
                </div>
            `;
    });
    experienceSection.querySelector(".experience-items").innerHTML =
      experienceHTML;
  }

  // Update education
  if (currentLang === "fa" && content[currentLang].education) {
    const educationSection = document.querySelector(
      '[data-section="education"]'
    ).parentElement;
    let educationHTML = "";
    content[currentLang].education.forEach((edu) => {
      educationHTML += `
                <div class="education-item">
                    <h3>${edu.degree}</h3>
                    ${edu.school ? `<p>${edu.school}</p>` : ""}
                    ${edu.gpa ? `<p>معدل: ${edu.gpa}</p>` : ""}
                    ${edu.status ? `<p>${edu.status}</p>` : ""}
                </div>
            `;
    });
    educationSection.querySelector(".education-items").innerHTML =
      educationHTML;
  }

  // Update publications
  if (currentLang === "fa" && content[currentLang].publications) {
    const publicationsSection = document.querySelector(
      '[data-section="publications"]'
    ).parentElement;
    const booksHTML = content[currentLang].publications.books
      .map((book) => `<li>${book}</li>`)
      .join("");
    publicationsSection.querySelector("ul").innerHTML = booksHTML;
  }

  // Update skills
  if (currentLang === "fa" && content[currentLang].skills) {
    const skillsGrid = document.querySelector(".skills-grid");
    const skillsHTML = content[currentLang].skills.technical
      .map((skill) => `<div class="skill-item">${skill}</div>`)
      .join("");
    skillsGrid.innerHTML = skillsHTML;
  }
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "fa" : "en";

  if (currentLang === "en") {
    window.location.reload();
    return;
  }

  const direction = currentLang === "fa" ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", currentLang);
  document.body.setAttribute("dir", direction);
  document.querySelector(".xp-window").classList.toggle("fa");

  // Update title
  document.querySelector(".title-bar-text").innerHTML =
    content[currentLang].title;

  // Update all content
  updateContent();

  const langButton = document.querySelector(".lang-switch");
  langButton.textContent = currentLang === "en" ? "فارسی" : "English";
}
