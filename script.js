
let movieBox;
let sortPreInternet;
let listToSort;
let resetList;
let searchBar;
let sortByYear;
let sortByName;
  let moviePosterContainer;

let imageArray = ["image01.png","image02.png","image03.png"];
let keywordArray = ["virtual reality","surveillance","GPS","social media","security"];


const cursor = document.querySelector('.cursor');

AOS.init();

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})





window.addEventListener('DOMContentLoaded', function(){

console.log("loaded");





  movieBox = document.getElementById("movieListForSort");
  sortPreInternet = document.getElementById("preInternet");
  resetList = document.getElementById("resetButton");
  searchBar=document.getElementById("searchBar");
  // focusCard=document.getElementById("buttonToOpenCard");
  sortPreInternet.addEventListener("click",showPreInternet);
  resetList.addEventListener("click",resetListToNormal);


  searchBar.addEventListener("click",resetListToNormal);


  // new Splide( '#image-slider', {
	// 	'cover'      : true,
	// 	'heightRatio': 0.5,
	// } ).mount();


let randomKeyword = keywordArray[Math.floor(Math.random()*keywordArray.length)];
let changeSearch = document.getElementById("searchBar");
changeSearch.setAttribute("placeholder","Ex: "+randomKeyword)



  for (let i=0; i<movieDatabase.length; i++){
    displayJSON(movieDatabase[i]);
    console.log(i+","+movieDatabase[i]["Title"])
    console.log(i+","+movieDatabase[i]["splideName"])

    new Splide( "#slideShow1984", {
      'cover'      : true,
      'next'  : 'splide__arrow--next arrowClass',


      "width":"20vw",
      "heightRatio":1.5,

  //   '  autoWidth': true,
	// 'focus'    : 'center',

    } ).mount();

    new Splide( "#slideShowFacialRecognition", {
      'cover'      : true,

      "width":"45vw",
      "heightRatio":0.5,

  //   '  autoWidth': true,
  // 'focus'    : 'center',

    } ).mount();

    new Splide( "#slideShowCaptainAmerica", {
      'cover'      : true,
      "width":"20vw",
      "heightRatio":1.5,
    } ).mount();


    new Splide( "#slideShowStrangeDays", {
      'cover'      : true,
      "width":"20vw",
      "heightRatio":1.5,
    } ).mount();

    new Splide( "#slideShowEnemy", {
      'cover'      : true,
      "width":"20vw",
      "heightRatio":1.5,
    } ).mount();

    new Splide( "#slideShowNerve", {
      'cover'      : true,
      "width":"20vw",
      "heightRatio":1.5,
    } ).mount();

    new Splide( "#slideShowTrumanShow", {
      'cover'      : true,
      "width":"20vw",
      "heightRatio":1.5,
    } ).mount();


    new Splide( "#slideShowNewNew", {
      'cover'      : true,
      "width":"45vw",
      "heightRatio":0.5,
    } ).mount();

    new Splide( "#PatriotActSlideshow", {
      'cover'      : true,
      "width":"45vw",
      "heightRatio":0.5,
    } ).mount();

    new Splide( "#PRISMSlideshow", {
      'cover'      : true,
      "width":"45vw",
      "heightRatio":0.5,
    } ).mount();

    new Splide( "#SocialMediaSlideshow", {
      'cover'      : true,
      "width":"45vw",
      "heightRatio":0.5,
    } ).mount();

    new Splide( "#TwitchSlideShow", {
      'cover'      : true,
      "width":"45vw",
      "heightRatio":0.5,
    } ).mount();


  }
  // movieBox.innerText="";

  let options = {
    valueNames: ['Title','Synopsis','ReleaseYear','TakesPlaceIn']
  };

  let values = movieDatabase;

     listToSort = new List('movieSection', options);



  // console.log(showThisJSON["FocusCardName"]);

  let slideShowSection = document.createElement("DIV");
  slideShowSection.id= "image-slider2";

  slideShowSection.classList.add("splide");

  let slideShowHolder = document.createElement("DIV");
  slideShowHolder.classList.add("splide__track");

  let listOfImages = document.createElement("UL");
  listOfImages.classList.add("splide__list");
  let newImageList;
  for (let i=0; i<imageArray.length;i++){

    console.log(imageArray[i]);
     newImageList = document.createElement("LI");
     newImageList.classList.add("splide__slide");

    // newImageList.appendChild(imageToShow);
    // imageInList.classList.add('ryanStyle');

    let imageName=imageArray[i];
    let imageToShow = document.createElement("IMG");
    imageToShow.src=imageName;
    console.log("list");


  newImageList.appendChild(imageToShow);

  console.log(newImageList);
  listOfImages.appendChild(newImageList);

  }




  console.log(listOfImages);
  slideShowHolder.appendChild(listOfImages);
  slideShowSection.appendChild(slideShowHolder);
  // moviePosterContainer.appendChild(slideShowSection);
  // console.log(slideShowSection);
// let appendToThis=document.getElementById("appendHere");
// let slideShow2 = document.getElementById("slideShow1984");
//
// appendToThis.appendChild(slideShow2);
})


let movieDatabase = [
  {
    "Title" : "Strange Days",
    "splideName":"#splideForStrangeDays",
    "Synopsis":"Former policeman Lenny Nero (Ralph Fiennes) has moved into a more lucrative trade: the illegal sale of virtual reality-like recordings that allow users to experience the emotions and past experiences of others. While the bootlegs typically contain tawdry incidents, Nero is shocked when he receives one showing a murder. He enlists a friend, bodyguard Mace (Angela Bassett), to help find the killer -- and the two soon stumble upon a vast conspiracy involving the police force Nero once worked for.",
    "ReleaseYear":"1995",
    "TakesPlaceIn":"1999",
    "FocusCardName":"StrangeDaysCard",
    "beforeClickName":"beforeClickContentStrangeDaysCard",
    "AppendSign":"AppendStrangeDays",
    "SlideShowName":"slideShowStrangeDays"

  },

{
  "Title" : "Captain America:\nThe Winter Soldier",
  "splideName":"#splideForCaptainAmerica",
  "Synopsis":"As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
  "ReleaseYear":"2014",
  "TakesPlaceIn":"2014",
  "FocusCardName":"CaptainAmericaCard",
  "beforeClickName":"beforeClickContentCaptainAmerica",
  "AppendSign":"AppendCaptainAmerica",
  "SlideShowName":"slideShowCaptainAmerica"


},


{
  "Title" : "1984",
  "splideName":"#splideFor1984",
  "Synopsis":"A man loses his identity while living under a repressive regime. In a story based on George Orwell's classic novel, Winston Smith (John Hurt) is a government employee whose job involves the rewriting of history in a manner that casts his fictional country's leaders in a charitable light. His trysts with Julia (Suzanna Hamilton) provide his only measure of enjoyment, but lawmakers frown on the relationship -- and in this closely monitored society, there is no escape from Big Brother.",
  "ReleaseYear":"1984 (Based on George Orwell's novel from 1949)",
  "TakesPlaceIn":"1984",
  "FocusCardName":"card1984",
  "AppendSign":"Append1984",
  "beforeClickName":"beforeClickContent1984",
  "SlideShowName":"slideShow1984"
},

{
  "Title" : "Enemy of the State",
  "splideName":"#splideForEnemy",
  "Synopsis":"Corrupt National Security Agency official Thomas Reynolds (Jon Voight) has a congressman assassinated to assure the passage of expansive new surveillance legislation. When a videotape of the murder ends up in the hands of Robert Clayton Dean (Will Smith), a labor lawyer and dedicated family man, he is framed for murder. With the help of ex-intelligence agent Edward \"Brill\" Lyle (Gene Hackman), Dean attempts to throw Reynolds off his trail and prove his innocence.",
  "ReleaseYear":"1998",
  "TakesPlaceIn":"1998",
  "FocusCardName":"EnemyCard",
  "beforeClickName":"beforeClickContentEnemyCard",
  "AppendSign":"AppendEnemy",
  "SlideShowName":"slideShowEnemy"

},

{
  "Title" : "Nerve",
  "splideName":"#splideForNerve",
  "Synopsis":"Industrious high school senior Vee Delmonico (Emma Roberts) is tired of living life on the sidelines. Pressured by her friends, Vee decides to join Nerve, a popular online game that challenges players to accept a series of dares. It's not long before the adrenaline-fueled competition requires her to perform increasingly dangerous stunts. When Nerve begins to take a sinister turn, Vee finds herself in a high-stakes finale that will ultimately determine her entire future.",
  "ReleaseYear":"2016 (Based on Jeanne Ryan's novel from 2012)",
  "TakesPlaceIn":"2016",
  "FocusCardName":"NerveCard",
  "beforeClickName":"beforeClickContentNerveCard",
  "AppendSign":"AppendNerve",
  "SlideShowName":"slideShowNerve"

},
{
  "Title" : "The Truman Show",
  "splideName":"#splideForTrumanShow",
  "Synopsis":"He doesn't know it, but everything in Truman Burbank's (Jim Carrey) life is part of a massive TV set. Executive producer Christof (Ed Harris) orchestrates \"The Truman Show,\" a live broadcast of Truman's every move captured by hidden cameras. Cristof tries to control Truman's mind, even removing his true love, Sylvia (Natascha McElhone), from the show and replacing her with Meryl (Laura Linney). As Truman gradually discovers the truth, however, he must decide whether to act on it.",
  "ReleaseYear":"1998",
  "TakesPlaceIn":"2029",
  "FocusCardName":"TrumanShowCard",
  "beforeClickName":"beforeClickContentTrumanShowCard",
  "AppendSign":"AppendTruman",
  "SlideShowName":"slideShowTrumanShow"

}


//
// {
//   "Title":"Enemy of the State",
//   "splideName":"#splideForEnemy",
//   "Synopsis":"A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime."
//
// },
// {
//   "Title":"Enemy of the State",
//   "splideName":"#splideForEnemy",
//
//   "Synopsis":"A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime."
//
// },
// {
//   "Title":"Enemy of the State",
//   "splideName":"#splideForEnemy",
//
//   "Synopsis":"A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime."
//
// }

]


function displayJSON(showThisJSON){


let movieList = document.createElement("LI");
movieList.classList.add("listStyle");
// movieList.classList.add("animatedParent");

  let movieFocus = document.createElement("DIV");
    movieFocus.classList.add('movieFocusStyle');
    movieFocus.classList.add('border-gradient');
    movieFocus.classList.add('border-gradient-purple');
    // movieFocus.classList.add('animated');
    // movieFocus.classList.add('rollIn');
    // movieFocus.classList.add('box');




    // movieFocus.classList.add(organizeThisJSON['specificStyleSheet']);
    // movieFocus.innerText=showThisJSON["Title"];

    let movieTitleSection = document.createElement("DIV");
    // movieTitleSection.setAttribute("data-aos","zoom-out-up");
    movieTitleSection.classList.add('movieTitleSectionStyle');
    movieFocus.appendChild(movieTitleSection);

    let movieTitleText = document.createElement("DIV");

    movieTitleText.innerText=showThisJSON["Title"];
    movieTitleText.classList.add('movieTitleTextStyle');
    movieTitleText.classList.add('Title');

    movieTitleSection.appendChild(movieTitleText);


    let releaseYearSection = document.createElement("DIV");
    releaseYearSection.classList.add('releaseYearSectionStyle');
    releaseYearSection.innerText = "Released in " +showThisJSON["ReleaseYear"];
    releaseYearSection.classList.add('ReleaseYear');

    movieTitleSection.appendChild(releaseYearSection);


        let predictedYearSection = document.createElement("DIV");
        predictedYearSection.classList.add('predictedYearSectionStyle');
      predictedYearSection.innerText = "Set in " +showThisJSON["TakesPlaceIn"];
      predictedYearSection.classList.add('TakesPlaceIn');

        movieTitleSection.appendChild(predictedYearSection);


    let movieSynopsisSection = document.createElement("DIV");


    movieSynopsisSection.classList.add('movieSynopsisSectionStyle');
    movieSynopsisSection.innerText = showThisJSON["Synopsis"];
    movieSynopsisSection.classList.add('Synopsis');

    movieTitleSection.appendChild(movieSynopsisSection);




    let twoPartSection = document.createElement("DIV");
    twoPartSection.classList.add('twoPartSectionStyle');
    movieFocus.appendChild(twoPartSection);
      // movieFocus.setAttribute("data-aos","zoom-in-up");


     moviePosterContainer = document.createElement("DIV");
    moviePosterContainer.classList.add('moviePosterContainerStyle');
    moviePosterContainer.id=showThisJSON["AppendSign"];

    twoPartSection.appendChild(moviePosterContainer);


    let movieTextSection = document.createElement("DIV");
    movieTextSection.classList.add('movieTextSectionStyle');


    let focusCard = document.createElement("DIV");
    focusCard.classList.add('card');

    let cardBody = document.createElement("DIV");
    cardBody.classList.add('card-body');


    // let preClickText = document.createElement("p");
    let preClickText = document.getElementById(showThisJSON["beforeClickName"]);


    // preClickText.innerText="testing";

    let linkText = document.createElement("p");

    let linkToWhere = document.createElement("a");
    linkToWhere.classList.add("btn", "btn-primary","linkButton");
    linkToWhere.setAttribute("data-fancybox","");
    linkToWhere.setAttribute("data-src", "#"+showThisJSON["FocusCardName"]);
    // switch this to a json thing
    linkToWhere.setAttribute("href", "javascript:;");

linkToWhere.innerText= "Compare to Reality";

// let displayWindowContents = document.createElement("DIV");
 let displayWindowContents = document.getElementById(showThisJSON["FocusCardName"]);


displayWindowContents.id= showThisJSON["FocusCardName"];
displayWindowContents.classList.add("windowContentStyles");
displayWindowContents.setAttribute("data-selectable","true");

// displayWindowContents.id = "windowContentStyles2";


let windowHeaderText = document.createElement("H2");
windowHeaderText.setAttribute("data-selectable","true");
// windowHeaderText.innerText=(showThisJSON["Title"]);

displayWindowContents.appendChild(windowHeaderText);




linkText.appendChild(linkToWhere);
    cardBody.appendChild(preClickText);
    cardBody.appendChild(displayWindowContents);
    cardBody.appendChild(linkText);

    focusCard.appendChild(cardBody);
    movieTextSection.appendChild(focusCard);
    twoPartSection.appendChild(movieTextSection);



        let animateContainer = document.createElement("DIV");
animateContainer.appendChild(movieFocus);
animateContainer.classList.add("animatedParent");
    movieList.appendChild(animateContainer);
//     let animateContainer = document.createElement("DIV");
// animateContainer.appendChild(movieFocus);
// movielist.appendChiild(animateContainer);
    movieBox.appendChild(movieList);


let cardName =showThisJSON["FocusCardName"];

createSlideshow(cardName);


let appendToThis=document.getElementById(showThisJSON["AppendSign"]);
let slideShow2 = document.getElementById(showThisJSON["SlideShowName"]);

appendToThis.appendChild(slideShow2);

}



function showPreInternet(){
  listToSort.filter(function(item) {
if (item.values().Title == "1984") {
 return true;
} else {
 return false;
}
});
// from https://listjs.com/api/#filter
}

function resetListToNormal(){
listToSort.filter();





}



function createSlideshow(cardName){

  console.log(cardName);

  // moviePosterContainer.innerText=cardName;

let slideShowSection = document.createElement("DIV");
slideShowSection.id= "image-slider";

slideShowSection.classList.add("splide");

let slideShowHolder = document.createElement("DIV");
slideShowHolder.classList.add("splide__track");

let listOfImages = document.createElement("UL");
listOfImages.classList.add("splide__list");
let newImageList;
for (let i=0; i<imageArray.length;i++){

  console.log(imageArray[i]);
   newImageList = document.createElement("LI");
   newImageList.classList.add("splide__slide");

  // newImageList.appendChild(imageToShow);
  // imageInList.classList.add('ryanStyle');

  let imageName=imageArray[i];
  let imageToShow = document.createElement("IMG");
  imageToShow.src=imageName;
  console.log("list");


newImageList.appendChild(imageToShow);

console.log(newImageList);
listOfImages.appendChild(newImageList);

}




console.log(listOfImages);
// slideShowHolder.appendChild(listOfImages);
// slideShowSection.appendChild(slideShowHolder);
// moviePosterContainer.appendChild(slideShowSection);
// console.log(slideShowSection);

}
