
let movieBox;
let sortPreInternet;
let listToSort;
let resetList;
let searchBar;
  let moviePosterContainer;

let imageArray = ["image01.png","image02.png","image03.png"];

window.addEventListener('DOMContentLoaded', function(){
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







  for (let i=0; i<movieDatabase.length; i++){
    displayJSON(movieDatabase[i]);
    console.log(i+","+movieDatabase[i]["Title"])
    console.log(i+","+movieDatabase[i]["splideName"])

    let splideName="#splideFor1984";
    new Splide( "#image-slider2", {
      'cover'      : true,
      'heightRatio': 0.5,
    } ).mount();

  }
  // movieBox.innerText="";

  let options = {
    valueNames: ['Title','Synopsis']
  };

  let values = movieDatabase;

     listToSort = new List('movieSection', options);



  console.log(showThisJSON["FocusCardName"]);

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
let appendToThis=document.getElementById("appendHere");
let slideShow2 = document.getElementById("image-slider2");

appendToThis.appendChild(slideShow2);
})


let movieDatabase = [
{
  "Title" : "1984",
  "splideName":"#splideFor1984",
  "Synopsis":"In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love. Longing for freedom, the lowly bureaucrat of the Ministry of Truth, Winston Smith, summons up the courage to write down his unspoken desires in his little secret diary.",
  "FocusCardName":"1984card"
},

{
  "Title" : "Captain America:\nThe Winter Soldier",
  "splideName":"#splideForCaptainAmerica",
  "Synopsis":"As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
  "FocusCardName":"CaptainAmericaCard"


},

{
  "Title":"Enemy of the State",
  "splideName":"#splideForEnemy",
  "Synopsis":"A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime."

},
{
  "Title":"Enemy of the State",
  "splideName":"#splideForEnemy",

  "Synopsis":"A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime."

},
{
  "Title":"Enemy of the State",
  "splideName":"#splideForEnemy",

  "Synopsis":"A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime."

}

]


function displayJSON(showThisJSON){

let movieList = document.createElement("LI");

  let movieFocus = document.createElement("DIV");
    movieFocus.classList.add('movieFocusStyle');

    // movieFocus.classList.add(organizeThisJSON['specificStyleSheet']);
    // movieFocus.innerText=showThisJSON["Title"];

    let movieTitleSection = document.createElement("DIV");
    movieTitleSection.classList.add('movieTitleSectionStyle');
    movieFocus.appendChild(movieTitleSection);

    let movieTitleText = document.createElement("DIV");

    movieTitleText.innerText=showThisJSON["Title"];
    movieTitleText.classList.add('movieTitleTextStyle');
    movieTitleText.classList.add('Title');

    movieTitleSection.appendChild(movieTitleText);



    let movieSynopsisSection = document.createElement("DIV");
    movieSynopsisSection.classList.add('movieSynopsisSectionStyle');
    movieSynopsisSection.innerText = showThisJSON["Synopsis"];
    movieSynopsisSection.classList.add('Synopsis');

    movieTitleSection.appendChild(movieSynopsisSection);




    let twoPartSection = document.createElement("DIV");
    twoPartSection.classList.add('twoPartSectionStyle');
    movieFocus.appendChild(twoPartSection);

     moviePosterContainer = document.createElement("DIV");
    moviePosterContainer.classList.add('moviePosterContainerStyle');
    twoPartSection.appendChild(moviePosterContainer);

    let movieTextSection = document.createElement("DIV");
    movieTextSection.classList.add('movieTextSectionStyle');


    let focusCard = document.createElement("DIV");
    focusCard.classList.add('card');

    let cardBody = document.createElement("DIV");
    cardBody.classList.add('card-body');


    let preClickText = document.createElement("p");
    preClickText.innerText="testing";

    let linkText = document.createElement("p");

    let linkToWhere = document.createElement("a");
    linkToWhere.classList.add("btn", "btn-primary");
    linkToWhere.setAttribute("data-fancybox","");
    linkToWhere.setAttribute("data-src", "#"+showThisJSON["FocusCardName"]);
    // switch this to a json thing
    linkToWhere.setAttribute("href", "javascript:;");
linkToWhere.innerText= "click";

let displayWindowContents = document.createElement("DIV");

displayWindowContents.id= showThisJSON["FocusCardName"];
displayWindowContents.classList.add("windowContentStyles");
// displayWindowContents.id = "windowContentStyles2";


let windowHeaderText = document.createElement("H2");
windowHeaderText.setAttribute("data-selectable","true");
windowHeaderText.innerText=(showThisJSON["Title"]);

displayWindowContents.appendChild(windowHeaderText);




linkText.appendChild(linkToWhere);
cardBody.appendChild(linkText);
    cardBody.appendChild(preClickText);
    cardBody.appendChild(displayWindowContents);

    focusCard.appendChild(cardBody);
    movieTextSection.appendChild(focusCard);
    twoPartSection.appendChild(movieTextSection);




    movieList.appendChild(movieFocus);
    movieBox.appendChild(movieList);


let cardName =showThisJSON["FocusCardName"];
createSlideshow(cardName);

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

  moviePosterContainer.innerText=cardName;

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
