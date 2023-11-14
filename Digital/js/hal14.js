const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let availableKeywords = [
  "<a href=Halaman11.html>Mekanika fluida tekanan hidrostatik pada pintu yang terendam air</a>",
  "<a href=Halaman10.html>Aliran pada pipa yang memiliki ketinggian dan diameter berbeda</a>",
  "<a href=Halaman10.html>MEKANIKA FLUIDA HUKUM BERNOULLI</a>",
  "<a href=Halaman3.html>analisis struktur pada jembatan</a>",
  "<a href=Halaman7.html>analisis struktur KPTS</a>",
  "<a href=Halaman6.html>menghitung struktur jembatan sederhana</a>",
  "<a href=Halaman5.html>materi mekanika fluida mengalir</a>",
  "<a href=Halaman4.html>materi Analisis struktur KPTS</a>",
  "<a href=Halaman8.html>Trigonometri</a>",
  "Materi umum beberapa mata kuliah",
  "perhitungan mekanika",
  "memahami analisis struktur",
  "apa itu mekanika fluida",
  "Teknik Sipil merupakan ilmu terapan yang mencakup",
  "Para ahli Teknik Sipil, umumnya dikenal dengan sebutan insinyur Sipil",
  "air yang mengalir pada pipa",
];
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
};

function display(result) {
  const content = result.map((list) => {
    return "<li>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

const waitForImages = () => {
  const images = [...document.querySelectorAll("img")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;

        gsap.to(loaderEl, {
          duration: 1,
          scaleX: loadProgress,
          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
        });

        if (totalImages == loadedImages) {
          gsap
            .timeline()
            .to(".loading__wrapper", {
              duration: 1.8,
              opacity: 0,
              pointerEvents: "none",
            })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();
