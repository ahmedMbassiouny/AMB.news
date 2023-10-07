// 894821eed9a74a7a8f5e94d07da703a5

var finalResulte = [];
async function getNews(country, category) {
  apiresponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=894821eed9a74a7a8f5e94d07da703a5`
  );
  var Resulte = await apiresponse.json();
  finalResulte = Resulte.articles;
  console.log(finalResulte);
  category = category.toUpperCase();
  country = country.toUpperCase();
  var titleInfo = `News about <b style="color: #1190cb;">${category}</b> in <b style="color: #1190cb;">${country}</b>`;
  document.getElementById("news-title").innerHTML = titleInfo;

  showPosts();
}

function showPosts() {
  var cards = ``;
  for (var i = 0; i < finalResulte.length; i++) {
    if (finalResulte[i].urlToImage == null) {
      imageUrl = "images/no-img.png";
    } else {
      imageUrl = finalResulte[i].urlToImage;
    }
    if (finalResulte[i].author == null) {
      author = "Ahmed Bassiouny";
    } else {
      author = finalResulte[i].author;
    }
    cards += `
      <div class="card  px-0 text-white   " id="c-${i}"
        style="width: 20rem; background: #222a3f; box-shadow: 0 0 20px #000000a1;transition:.8s;"
        onmouseover="this.style.transform='translatey(-12px)'" onmouseout="this.style.transform='translatey(0)'">
        <img src=${imageUrl} class="card-img-top" alt="news image" style="height:200px">
        <div class="card-body">
          <h5 class="card-title">${finalResulte[i].title}</h5>
          <p class="card-text text-white-50">${author}</p>
          <p class="btn btn-primary" style="background: #843b97;"
            onclick="document.getElementsByClassName('c-${i}')[0].style.display='flex'">${finalResulte[i].source.name}</p>
        </div>
      </div>
        <div class="click-card c-${i}">
          <div class="main-card rounded-3 position-absolute overflow-hidden px-0 text-white "
            style="width: 50%; background: #222a3f; box-shadow: 0 0 20px #000000a1;transition:.8s; ">
        <p class="close" onclick="document.getElementsByClassName('c-${i}')[0].style.display='none';">&times;</p>
            <img src=${imageUrl} class="card-img-top" alt="news image" style="height:300px">
            <div class="card-body p-3">
              <h4 class="card-title">${finalResulte[i].title}</h4>
              <p class="pt-3">${finalResulte[i].description}</p>
              <p class="card-text text-white-50">${author}</p>
              <a class="btn btn-primary" href=${finalResulte[i].url}>Source link</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cards;
}

// getNews(myApi); us  eg ua  ae , technology science sports
country = "us";
category = "sports";

getNews(country, category);

function setCategory(x, y) {
  category = x;
  getNews(country, category);
  var current = document.getElementsByClassName("cate-ele active");
  current[0].className = current[0].className.replace("active", "");
  y.className += " active";
}
function setCountry(x, y) {
  country = x;
  getNews(country, category);
  var current = document.getElementsByClassName("coun-ele active");
  current[0].className = current[0].className.replace("active", "");
  y.className += " active";
}
