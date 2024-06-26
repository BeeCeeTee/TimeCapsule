
const cardContainer = $('#card-container')

// Colors and font selection
function renderStyles(year) {
  if (year >= 1950 && year < 1960) {
    $(':root').css({
      '--primary-color': '#3EADD2',
      '--secondary-color': '#031C26',
      '--accent-color': '#031C26',
      '--text-color': '#031C26',
      '--heading-font': 'Carter One',
      '--body-font': 'Truculenta',
      '--heading-size': '4.5vw',
      '--title-size': '8vw',
      '--body-size': '4vw',
      '--background-image': 'url("../images/1950sbg.svg")',
      '--spacing': '.25vw',
    });
  }

  if (year >= 1960 && year < 1970) {
    $(':root').css({
      '--primary-color': '#FFE101',
      '--secondary-color': '#310C0B',
      '--accent-color': '#310C0B',
      '--text-color': '#310C0B',
      '--heading-font': 'Spicy Rice',
      '--body-font': 'Life Savers',
      '--heading-size': '3.5vw',
      '--title-size': '8vw',
      '--body-size': '3vw',
      '--body-weight': 'bold',
      '--background-image': 'url("../images/1960sbg.svg")',
      '--spacing': '.25vw'
    });
  }

  if (year >= 1970 && year < 1980) {
    $(':root').css({
      '--primary-color': '#EF9F20',
      '--secondary-color': '#3C2000',
      '--accent-color': '#3C2000',
      '--text-color': '#3C2000',
      '--heading-font': 'Bungee Shade',
      '--body-font': 'Michroma',
      '--heading-size': '2.5vw',
      '--title-size': '7vw',
      '--body-size': '2vw',
      '--background-image': 'url("../images/1970sbg.svg")',
      '--stroke': '.25vw',
      '--spacing': '.25vw'
    });
  }

  if (year >= 1980 && year < 1990) {
    $(':root').css({
      '--primary-color': '#2B0D29',
      '--secondary-color': '#FA8057',
      '--accent-color': '#8CA9FD',
      '--text-color': '#8CA9FD',
      '--heading-font': 'Monoton',
      '--body-font': 'Orbitron',
      '--heading-size': '3vw',
      '--title-size': '8vw',
      '--body-size': '2.5vw',
      '--background-image': 'url("../images/1980sbg.svg")',
      '--spacing': '.3vw',
      '--stroke': '.15vw',
    });
  }

  if (year >= 1990 && year < 2000) {
    $(':root').css({
      '--primary-color': '#5ABFAD',
      '--secondary-color': '#5D3B8C',
      '--accent-color': '#161616',
      '--text-color': '#FDB64C',
      '--heading-font': 'Gluten',
      '--body-font': 'Comic Neue',
      '--heading-size': '3.5vw',
      '--title-size': '8vw',
      '--body-size': '3vw',
      '--background-image': 'url("../images/1990sbg.svg")',
      '--spacing': '.25vw'
    });
  }

  if (year >= 2000 && year < 2010) {
    $(':root').css({
      '--primary-color': '#B4CBE4',
      '--secondary-color': '#5E88BA',
      '--accent-color': '#112236',
      '--text-color': '#112236',
      '--heading-font': 'Cute Font',
      '--body-font': 'Jura',
      '--heading-size': '3.5vw',
      '--title-size': '8vw',
      '--body-size': '3vw',
      '--background-image': 'url("../images/2000sbg.svg")',
      '--spacing': '.25vw'
    });
  }

  if (year >= 2010 && year < 2020) {
    $(':root').css({
      '--primary-color': '#D3D4D9',
      '--secondary-color': '#D3D4D9',
      '--text-color': '#191919',
      '--heading-font': 'DM Sans',
      '--body-font': 'Lato',
      '--heading-size': '3.5vw',
      '--title-size': '8vw',
      '--body-size': '3vw',
      '--heading-weight': 'bold',
      '--box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      '--background-image': 'radial-gradient(#DBD2CB 40%, #CCBDB6 60%)'
    });
  }

  if (year >= 2020) {
    $(':root').css({
      '--primary-color': '#998A6B',
      '--secondary-color': '#998A6B',
      '--accent-color': '#33270F',
      '--text-color': '#CCC5B7',
      '--heading-font': 'Poppins',
      '--body-font': 'Montserrat',
      '--heading-size': '3.5vw',
      '--title-size': '8vw',
      '--body-size': '3vw',
      '--background-image': 'linear-gradient(#665533, #665533)'
    });
  }
};

function dynamicColors() { // Returns a date-based color scheme
  element.style.color = "";

}

//Movie API Key
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjYyNjI4N2M2ZGU3Yzk4ODUwNjVlNTBjN2MyNzY1NCIsInN1YiI6IjY2MDYxN2JmYTg5NGQ2MDE3YzYyNDkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B1Lq6M9BipX3yYlMkNkluP9ljFAU7rklKjW2B6_X0_A'
  }
};
//once birthday is submitted this function will run
async function birthdaySubmission() {
  const birthdates = JSON.parse(localStorage.getItem('birthdates'));

  let recentInput = birthdates.reverse()[0]

  const formatDate = dayjs(recentInput).format('YYYYDDMM');
  $('#3a').text(formatDate);

  const reformatDate = dayjs(recentInput).format('YYYY-DD-MM');
  $('#3a').text(reformatDate);

  const year = dayjs(recentInput).format('YYYY')

  const mediaChoice = document.getElementById("media").value

  //API URLs
  articleRequestURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${formatDate}&sort=oldest&api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3`
  bookRequestURL = `https://api.nytimes.com/svc/books/v3/lists/overview.json?list=hardcover-fiction&published_date=${reformatDate}&api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3`
  moviesRequestURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=revenue.desc`

  //Fetch Requests Based on the Type of Media Selected
  if (mediaChoice === 'news') {
    fetch(articleRequestURL)

      .then(response => response.json())
      .then(data => {
        const article = {
          headline: data.response.docs[0].headline.main,
          author: data.response.docs[0].byline.original,
          description: data.response.docs[0].snippet,
          image: data.response.docs[0].multimedia[0].url,
        }
        createArticleCard(article);
      });
  }
  else if (mediaChoice === 'movies') {
    fetch(moviesRequestURL, options)
      .then(response => response.json())
      .then(data => {
        const movie = {
          title: data.results[0].title,
          description: data.results[0].overview,
          poster: data.results[0].poster_path,
        };
        createMovieCard(movie);
      });
  }
  else if (mediaChoice === 'books') {

    fetch(bookRequestURL)
      .then(response => response.json())
      .then(data => {
        if (!Array.isArray (data.results)) {
          const book = {
            title: data.results?.lists[0].books[0].title,
            author: data.results?.lists[0].books[0].author,
            description: data.results?.lists[0].books[0].description,
            bookImage: data.results?.lists[0].books[0].book_image,
          };
          createBookCard(book);
        } else {
          console.log("There are no Bestseller book results for this year 😿 The NYT API we used only goes back to 2008")
          createEmptyResultsCard();
        }
      });
  }
  else {
    fetch(articleRequestURL)
      .then(response => response.json())
      .then(data => {
        const article = {
          headline: data.response?.docs[0].headline.main,
          author: data.response?.docs[0].byline.original,
          description: data.response?.docs[0].snippet,
          image: data.response?.docs[0].multimedia && data.response?.docs[0].multimedia.length > 0
            ? data.response?.docs[0].multimedia[0].url
            : null,
        }
        if (!article.image) {
          console.log('Hello! There is no corresponding image before 2008 for this API. Have a 404 cat instead!');
          createArticleNoImageCard(article);
        } else {
          console.log('Hi Michael');
          createArticleCard(article);
        }
      });

    fetch(moviesRequestURL, options)
      .then(response => response.json())
      .then(data => {
        const movie = {
          title: data.results[0].title,
          description: data.results[0].overview,
          poster: data.results[0].poster_path,
        };
        createMovieCard(movie);
      });

    fetch(bookRequestURL)
      .then(response => response.json())
      .then(data => {
        if (!Array.isArray (data.results)) {
          const book = {
            title: data.results?.lists[0].books[0].title,
            author: data.results?.lists[0].books[0].author,
            description: data.results?.lists[0].books[0].description,
            bookImage: data.results?.lists[0].books[0].book_image,
          };
          createBookCard(book);
        } else {
          console.log("There are no Bestseller book results for this year 😿 The NYT API we used only goes back to 2008")
          createEmptyResultsCard();
        }
      });

  }
  createDateCard(recentInput, year);
  renderStyles(year);
}

function createDateCard(recentInput, year) {
  let dayMonth = dayjs(recentInput).format('MMMM D,');

  const dateCard = $("<div>").addClass("dateCard");
  const dateCardBody = $("<div>").addClass("cardBody");
  const dateHeader = $("<div>").addClass("dateHeader").text(dayMonth);
  const dateTitle = $("<div>").addClass("dateTitle").text(year);

  dateCardBody.append(dateHeader, dateTitle);
  dateCard.append(dateCardBody);
  cardContainer.append(dateCard);
}

function createMovieCard(movie) {

  const movieCard = $("<div>").addClass("card").attr('id', 'movieCard');
  const movieCardBody = $("<div>").addClass("cardBody");
  const movieHeader = $("<h3>").addClass("movieHeader").text('Top Movie The Year You Were Born:');
  const movieTitle = $("<h4>").addClass("movieTitle").text(movie.title);
  const movieDescription = $("<p>").addClass("movieDesc").text(movie.description);
  const moviePoster = $("<img>").addClass("moviePoster").attr('src', 'https://media.themoviedb.org/t/p/w500/' + movie.poster, 'max-width', '100px', 'max-height', '100px');

  movieCardBody.append(movieHeader, movieTitle, movieDescription, moviePoster);

  movieCard.append(movieCardBody);
  cardContainer.append(movieCard);

  return movieCard;
}


function createBookCard(book) {

  const bookCard = $("<div>").addClass("card").attr('id', 'bookCard');
  const bookCardBody = $("<div>").addClass("cardBody");
  const bookHeader = $("<h3>").addClass("bookHeader").text('Top Book The Year You Were Born:');
  const bookTitle = $("<h4>").addClass("bookTitle").text(book.title);
  const bookAuthor = $("<p>").addClass("bookAuthor").text(book.author);
  const bookDescription = $("<p>").addClass("bookDesc").text(book.description);
  const bookImage = $("<img>").addClass("bookImage").attr('src', book.bookImage)

  bookCardBody.append(bookHeader, bookTitle, bookAuthor, bookDescription, bookImage);
  bookCard.append(bookCardBody);
  cardContainer.append(bookCard);

  return bookCard;
}

function createArticleCard(article) {
  const articleCard = $("<div>").addClass("card");
  const articleCardBody = $("<div>").addClass("cardBody");
  const articleHeader = $("<h3>").addClass("articleHeader").text('Top News From The Day You Were Born:');
  const articleTitle = $("<h4>").addClass("articleTitle").text(article.headline);
  const articleAuthor = $("<p>").addClass("articleAuthor").text(article.author);
  const articleDescription = $("<p>").addClass("articleDesc").text(article.description);
  const articleImage = $("<img>").addClass("articleImage").attr('src', 'https://static01.nyt.com/' + article.image);


  articleCardBody.append(articleHeader, articleTitle, articleAuthor, articleDescription, articleImage);
  articleCard.append(articleCardBody);
  cardContainer.append(articleCard);
  return articleCard;
}

// If image not found:
function createArticleNoImageCard(article) {
  const articleNoImageCard = $("<div>").addClass("card");
  const articleNoImageCardBody = $("<div>").addClass("cardBody");
  const articleNoImageHeader = $("<h3>").addClass("articleHeader").text('Top News From The Day You Were Born:');
  const articleNoImageTitle = $("<h4>").addClass("articleTitle").text(article.headline);
  const articleNoImageAuthor = $("<p>").addClass("articleAuthor").text(article.author);
  const articleNoImageDescription = $("<p>").addClass("articleDesc").text(article.description);
  const articleNoImage = $("<img>").addClass("articleImage").attr({'src': 'assets/images/404notfoundcat.jpg', 'alt': 'image of a cat hiding its head under scattered papers'});
  const articleNoImageCaption = $("<caption>").addClass("articleAuthor").text("Image Not Found");
  //re-used .articleAuthor here to keep styling/css easy and consistent
  articleNoImageCardBody.append(articleNoImageHeader, articleNoImageTitle, articleNoImageAuthor, articleNoImageDescription, articleNoImage, articleNoImageCaption);
  articleNoImageCard.append(articleNoImageCardBody);
  cardContainer.append(articleNoImageCard);
  return articleNoImageCard;
}


// If no Bestseller:
function createEmptyResultsCard() {
  const emptyResultsCard = $("<div>").addClass("card");
  const emptyResultsCardBody = $("<div>").addClass("cardBody");
  const emptyResultsCardHeader = $("<h4>").addClass("emptyResultsHeader").text("We're sorry!");
  const emptyResultsCardTitle = $("<h3>").addClass("emptyResultsTitle").text('The API we are using only shows Bestsellers back to 2008!');
  const emptyResultsCardImage = $("<img>").addClass("emptyResultsImage").attr({ 'src': 'assets/images/204-no-content.jpg', 'alt': 'two cats in front of an empty bowl with the caption "no content"'});
  //at one point I had my cat as a kitten here instead of the httpcats. the transparent is still in the images
  //her name is Daphne and we've only begun to scratch the surface of her vast intelligence
  emptyResultsCardBody.append(emptyResultsCardHeader, emptyResultsCardTitle, emptyResultsCardImage);
  emptyResultsCard.append(emptyResultsCardBody);
  cardContainer.append(emptyResultsCard);

  return emptyResultsCard;
}



//MODAL:
// Modal open
var modal = document.querySelector('#js-modal-trigger');
modal.addEventListener('click', function () {
  document.querySelector('.modal').classList.add('is-active');
});

const formEl = document.querySelector('#birthdate-form');
const dateInputEl = document.querySelector('#datepicker');
submitButton = document.querySelector('#submit-date');
const handleFormSubmit = function (event) {
  event.preventDefault();
  document.getElementById('card-container').innerHTML = "";

  var firstGetItem = JSON.parse(localStorage.getItem("birthdates"));
  if (!Array.isArray(firstGetItem)) {
    firstGetItem = [];
  }
  const dateInput = dateInputEl.value;
  firstGetItem.push(dateInput);
  localStorage.setItem('birthdates', JSON.stringify(firstGetItem));
  birthdaySubmission();
  document.getElementById('datepicker').value = "Select a date!";
};


formEl.addEventListener('submit', handleFormSubmit);
// Closes Modal on Submit
submitButton.addEventListener('click', function () {
  document.querySelector('.modal').classList.remove('is-active');
});


//Closes Modal on Cancel
const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', function () {
  event.preventDefault();
  document.querySelector('.modal').classList.remove('is-active');
});


$('#datepicker').datepicker({
  startDate: '1960-01-01',
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  yearRange: "-74:+0",
});

const birthdayhat = document.querySelector('#modal-hat');
birthdayhat.addEventListener('click', function () {
  console.log('Easter 🥚')
});