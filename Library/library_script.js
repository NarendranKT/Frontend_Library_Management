const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    if(window.scrollY>80){
        searchForm.classList.remove('active');
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

window.onload = () =>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 2000);
}

// =============================================================================

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay : 9500,
        disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".trending-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay : 9500,
        disableOnInteraction: true,
    },navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });

  //=======================================================================

  let bookTitle = document.querySelectorAll(".container .box-container .box .content h3");
let authorTag = document.querySelectorAll(".author");
let genreTag = document.querySelectorAll(".genre");
let trend = document.querySelectorAll(".trending .trending-slider .swiper-wrapper .boxT .content1 h3");
let boxes = document.querySelectorAll(".container .box-container .box");
let trendBox = document.querySelectorAll(".trending .trending-slider .swiper-wrapper .boxT");

//========================================================================
// TITLE
let titlesName = "Beowulf,Batman: Year One,Go Set a Watchman,When You Are Engulfed in Flames,Daughter of Smoke & Bone,Red Queen,The Power of Habit,Midnight in the Garden of Good and Evil,Hopeless,A Little Princess,The Truth About Forever,The horse and his boy,Last Sacrifice ,Little House on the Prairie,The Velveteen Rabbit,The War of the Worlds,Pretty Little Liars,Corduroy,The Omnivore's Dilemma,Life After Life,The Rescue,Needful Things,Voyager,Cujo,The Virgin Suicides,Dead to the World,Tess of the d'Urbervilles: A Pure Woman Faithfully Presented,Madame Bovary,The Phantom Tollbooth,The Way of Kings,Club Dead,It's Kind of a Funny Story,The way of kings,After You,The Language of Flowers,Batman: The Dark Knight Returns,The Angel Experiment,High Fidelity, Hamlet,Romeo and juliet,king lear,macbeth,twelfth night,the tempest,bleak house,oliver twist,A christmas carol,David copperfield,pride and prejudice,emma,sense and senibility,mansfield park,northanger abbey,ponniyin selvan,parthiban kanavu,alai osai,Ready player one,ready player two,armada,the alchemist,eleven minutes,the pilgrimage,the zahir,aleph,the supreme giftt"
binder(titlesName, bookTitle);
binder(titlesName,trend);

//=======================================================================
// Genre
let genreName = "fiction, fiction, fiction,fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction,fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction,nonfiction,nonfiction, fiction, fiction ,tradegy, tradegy, tradegy,comedy,romantic comedy, comedy, tragedy & comedy,novel, serial novel, Victorian literature, historical fiction, historical fiction, romance novel, comedy romance novel, comedy,gothic,historical fiction,historical,historiacal fiction,sci-fi fiction, sci-fi fiction, sci-fi fiction, romance fiction, romance fiction, romance fiction, romance fiction, romance fiction, romance fiction"
binder(genreName, genreTag);

//=======================================================================
// AUTHOR
let authorsName = 'Seamus Heaney,Frank Miller,Harper Lee,David Sedaris,Laini Taylor,Victoria Aveyard,Charles Duhigg,John Berendt,Colleen Hoover,Frances Hodgson Burnett,Sarah Dessen,C.S. Lewis,Richelle Mead,Laura Ingalls Wilder,Margery Williams Bianco,Robert M. Pirsig,H.G. Wells,Sara Shepard,Don Freeman,Michael Pollan,Kate Atkinson,Nicholas Sparks,Stephen King,Diana Gabaldon,Kenneth Branagh,Jeffrey Eugenides,Charlaine Harris,Thomas Hardy,Gustave Flaubert,Norton Juster,Brandon Sanderson,Charlaine Harris,Ned Vizzini,Brandon Sanderson,Jojo Moyes,Vanessa Diffenbaugh,Frank Miller,James Patterson,Nick Hornby,Nicholas Sparks,Margaret Atwood,william Shakespeare,william Shakespeare,william Shakespeare,william Shakespeare,william Shakespeare, charles dickens, charles dickens, charles dickens, charles dickens, jane austen, jane austen, jane austen, jane austen, jane austen, kalki Krishnamurthy, kalki Krishnamurthy, kalki Krishnamurthy, ernest cline, ernest cline, ernest cline,paulo Coelho, paulo Coelho,paulo Coelho,paulo Coelho,paulo Coelho,paulo Coelho'
binder(authorsName, authorTag);

//===========================================================================


  function binder(sepArray, element){
    let arr = sepArray.split(",");
    let seperated =[];
    var i=0
    for(var x in arr){
        seperated[i] = arr[x];
        i++;
    }

    for(let x=0;x<boxes.length;x++){
        if (element[x].getAttribute("class") == "author") {

        element[x].innerHTML = "<i class='fas fa-user'></i>"+ seperated[x];
            boxes[x].dataset.author = seperated[x];

        }else if(element[x].getAttribute("class") == "genre"){
            
        element[x].innerHTML = "<i class='fas fa-book-open'></i>"+ seperated[x];
            boxes[x].dataset.genre = seperated[x];

        }else{
            element[x].innerHTML = seperated[x];
            boxes[x].dataset.title = seperated[x];
            element[x].innerHTML = seperated[x];
        }        
    }
}