"use strict";

// 894821eed9a74a7a8f5e94d07da703a5
var finalResulte = [];

function getNews(country, category) {
  var Resulte, titleInfo;
  return regeneratorRuntime.async(function getNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://newsapi.org/v2/top-headlines?country=".concat(country, "&category=").concat(category, "&apiKey=894821eed9a74a7a8f5e94d07da703a5")));

        case 2:
          apiresponse = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(apiresponse.json());

        case 5:
          Resulte = _context.sent;
          finalResulte = Resulte.articles;
          console.log(finalResulte);
          category = category.toUpperCase();
          country = country.toUpperCase();
          titleInfo = "News about <b style=\"color: #1190cb;\">".concat(category, "</b> in <b style=\"color: #1190cb;\">").concat(country, "</b>");
          document.getElementById("news-title").innerHTML = titleInfo;
          showPosts();

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showPosts() {
  var cards = "";

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

    cards += "\n      <div class=\"card  px-0 text-white   \" id=\"c-".concat(i, "\"\n        style=\"width: 20rem; background: #222a3f; box-shadow: 0 0 20px #000000a1;transition:.8s;\"\n        onmouseover=\"this.style.transform='translatey(-12px)'\" onmouseout=\"this.style.transform='translatey(0)'\">\n        <img src=").concat(imageUrl, " class=\"card-img-top\" alt=\"news image\" style=\"height:200px\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(finalResulte[i].title, "</h5>\n          <p class=\"card-text text-white-50\">").concat(author, "</p>\n          <p class=\"btn btn-primary\" style=\"background: #843b97;\"\n            onclick=\"document.getElementsByClassName('c-").concat(i, "')[0].style.display='flex'\">").concat(finalResulte[i].source.name, "</p>\n        </div>\n      </div>\n        <div class=\"click-card c-").concat(i, "\">\n          <div class=\"main-card rounded-3 position-absolute overflow-hidden px-0 text-white \"\n            style=\"width: 50%; background: #222a3f; box-shadow: 0 0 20px #000000a1;transition:.8s; \">\n        <p class=\"close\" onclick=\"document.getElementsByClassName('c-").concat(i, "')[0].style.display='none';\">&times;</p>\n            <img src=").concat(imageUrl, " class=\"card-img-top\" alt=\"news image\" style=\"height:300px\">\n            <div class=\"card-body p-3\">\n              <h4 class=\"card-title\">").concat(finalResulte[i].title, "</h4>\n              <p class=\"pt-3\">").concat(finalResulte[i].description, "</p>\n              <p class=\"card-text text-white-50\">").concat(author, "</p>\n              <a class=\"btn btn-primary\" href=").concat(finalResulte[i].url, ">Source link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  document.getElementById("rowData").innerHTML = cards;
} // getNews(myApi); us  eg ua  ae , technology science sports


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
//# sourceMappingURL=main.dev.js.map
