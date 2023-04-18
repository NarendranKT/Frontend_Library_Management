//> let au = document.querySelector('.author')
//> console.log(au.textContent);
//=======================================================================

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
    // if(window.scrollY>80){
    //     document.querySelector('.header .header-2').classList.add('active');
    // }else{
    //     document.querySelector('.header .header-2').classList.remove('active');
    // }
    fadeOut();
}

function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 1000);
}

//=======================================================================


let bookTitle = document.querySelectorAll(".container .box-container .box .content h3");
let authorTag = document.querySelectorAll(".author");
let genreTag = document.querySelectorAll(".genre");
let filterTag = document.querySelector(".select");
let boxes = document.querySelectorAll(".container .box-container .box");
let count = document.querySelector(".container .count");



count.innerHTML = `Book Count: ${boxes.length}`
/*
// let year = document.querySelectorAll(".container .box-container .box");
// console.log(boxes[0].dataset.year);
// let al = document.querySelectorAll('.container .box-container .box')
// al[1].dataset.title = "narendran";
// console.log(al[1].dataset.title);
// console.log(filterTag[1].value); 
*/

//=======================================================================
// AUTHOR
let authorsName = 'Seamus Heaney,Frank Miller,Harper Lee,David Sedaris,Laini Taylor,Victoria Aveyard,Charles Duhigg,John Berendt,Colleen Hoover,Frances Hodgson Burnett,Sarah Dessen,C.S. Lewis,Richelle Mead,Laura Ingalls Wilder,Margery Williams Bianco,Robert M. Pirsig,H.G. Wells,Sara Shepard,Don Freeman,Michael Pollan,Kate Atkinson,Nicholas Sparks,Stephen King,Diana Gabaldon,Kenneth Branagh,Jeffrey Eugenides,Charlaine Harris,Thomas Hardy,Gustave Flaubert,Norton Juster,Brandon Sanderson,Charlaine Harris,Ned Vizzini,Brandon Sanderson,Jojo Moyes,Vanessa Diffenbaugh,Frank Miller,James Patterson,Nick Hornby,Nicholas Sparks,Margaret Atwood,william Shakespeare,william Shakespeare,william Shakespeare,william Shakespeare,william Shakespeare, charles dickens, charles dickens, charles dickens, charles dickens, jane austen, jane austen, jane austen, jane austen, jane austen, kalki Krishnamurthy, kalki Krishnamurthy, kalki Krishnamurthy, ernest cline, ernest cline, ernest cline,paulo Coelho, paulo Coelho,paulo Coelho,paulo Coelho,paulo Coelho,paulo Coelho'
binder(authorsName, authorTag);

//=======================================================================
// TITLE
let titlesName = "Beowulf,Batman: Year One,Go Set a Watchman,When You Are Engulfed in Flames,Daughter of Smoke & Bone,Red Queen,The Power of Habit,Midnight in the Garden of Good and Evil,Hopeless,A Little Princess,The Truth About Forever,The horse and his boy,Last Sacrifice ,Little House on the Prairie,The Velveteen Rabbit,Zen and the Art of Motorcycle Maintenance,The War of the Worlds,Pretty Little Liars,Corduroy,The Omnivore's Dilemma,Life After Life,The Rescue,Needful Things,Voyager,Cujo,The Virgin Suicides,Dead to the World,Tess of the d'Urbervilles: A Pure Woman Faithfully Presented,Madame Bovary,The Phantom Tollbooth,The Way of Kings,Club Dead,It's Kind of a Funny Story,The way of kings,After You,The Language of Flowers,Batman: The Dark Knight Returns,The Angel Experiment,High Fidelity, Hamlet,Romeo and juliet,king lear,macbeth,twelfth night,the tempest,bleak house,oliver twist,A christmas carol,David copperfield,pride and prejudice,emma,sense and senibility,mansfield park,northanger abbey,ponniyin selvan,parthiban kanavu,alai osai,Ready player one,ready player two,armada,the alchemist,eleven minutes,the pilgrimage,the zahir,aleph,the supreme giftt"
binder(titlesName, bookTitle);

//=======================================================================
// Genre
let genreName = "fiction, fiction, fiction,fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction,fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction, fiction,nonfiction, fiction, fiction, fiction,nonfiction,nonfiction, fiction, fiction ,tradegy, tradegy, tradegy,comedy,romantic comedy, comedy, tragedy & comedy,novel, serial novel, Victorian literature, historical fiction, historical fiction, romance novel, comedy romance novel, comedy,gothic,historical fiction,historical,historiacal fiction,sci-fi fiction, sci-fi fiction, sci-fi fiction, romance fiction, romance fiction, romance fiction, romance fiction, romance fiction, romance fiction"
binder(genreName, genreTag);

//=======================================================================
// Year
let year = "1975,1987,2015,2008,2011,2015,2011,1994,2012,1905,2004,1954,2010,1935,1922,1974,1897,2006,1948,2006,2013,2000,1991,1993,1996,1981,1993,2004,1891,1856,1961,2010,2003,2006,2007,2015,2011,1986,2005,1995,2003,2003,1998,2000,1999,1759,1975,1983,1960,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950,1950"

let arr = year.split(",");
let sep = [];
let i=0
for(let x in arr){
    sep[i] = arr[i];
    i++;
}

for(let i=0;i<boxes.length;i++){
    boxes[i].dataset.year = sep[i];
    // button[i].innerHTML = "Borrow";
}


//=======================================================================
function binder(sepArray, element){
    let arr = sepArray.split(",");
    let seperated =[];
    var i=0
    for(var x in arr){
        seperated[i] = arr[x];
        i++;
    }

    for(let x=0;x<bookTitle.length;x++){
        if (element[x].getAttribute("class") == "author") {

        element[x].innerHTML = "<i class='fas fa-user'></i>"+ seperated[x];
            boxes[x].dataset.author = seperated[x];

        }else if(element[x].getAttribute("class") == "genre"){
            
        element[x].innerHTML = "<i class='fas fa-book-open'></i>"+ seperated[x];
            boxes[x].dataset.genre = seperated[x];

        }else{
            element[x].innerHTML = seperated[x];
            boxes[x].dataset.title = seperated[x];
        }        
    }
}

//=======================================================================

// SELECTOR
// function populate(s1, s2){
//     var s11 = document.getElementById(s1);
//     var s22 = document.getElementById(s2);

//     s22.innerHTML = "";
//     if(s11.value == "author"){
//         let optArr = ['paulo coelho|paulo coelho', 'Ernest Cline|Ernest Cline', 'William Shakespeare|William Shakespeare', 'Charles Dickens|Charles Dickens', 'Jane Austen|Jane Austen', 'Kalki Krishnamurthy|Kalki Krishnamurthy']
//         selectVal(s22, optArr);

//     }else if(s11.value == 'title'){
//         let titles = "A Midsummer Night’s Dream,Hamlet,Romeo and Juliet,King lear,Macbeth,twelfth night,The Taming of the Shrew,The Tempest"
//         let arr = arrConv(titles);
//         selectVal(s22, arr);

//     }else if(s11.value == 'subject'){
//         let subject = "Comedy,tragedy,Novel,Serial Novel,Historical Fiction,Romance Novel,Historical,fiction"
//         let arr = arrConv(subject);
//         selectVal(s22, arr);
//     }

    
// }

//=======================================================================

function arrConv(str) {
    let arr = str.split(",");
    let optArr =[];
    var i=0
    for(var x in arr){
        optArr[i] = `${arr[x]}|${arr[x]}`
        i++;
    }
    return optArr;
}

//=======================================================================

function selectVal(s22, optArr){
    for(var option in optArr){
        let newopt = document.createElement("option");
        let pair = optArr[option].split("|");
        newopt.value = pair[0];
        newopt.innerHTML = pair[1];
        s22.options.add(newopt);
    }
}

//=======================================================================

// SEARCH BAR
let searchbox = document.getElementById("search-box")
let con = boxes.length;
searchbox.addEventListener('keyup', (e)=>{
    let h3 = document.querySelectorAll(".container .box-container .box .content h3");
    let stroke = e.target.value.toLowerCase().trim();

    boxes.forEach((box)=>{
        //This filter is used to select the correct option
            let filter = selected();
        //This ifelse is used to search based on filter
            if( filter == "filter"){    
                const data = box.dataset.title.toLowerCase().trim();
                if(data.includes(stroke)){
                    box.style.display= 'inline-block'
                }else{
                    box.style.display= 'none'
                    con--;
                }

            }else if(filter == "title"){
                
                count.innerHTML = `Book Count: ${con}`
                let title = box.dataset.title.toLowerCase().trim();
                if(title.includes(stroke)){
                    box.style.display= 'inline-block'
                }else{
                    con--;
                    box.style.display= 'none'
                }
            }else if(filter == "author"){
                
                let author = box.dataset.author.toLowerCase().trim();
                console.log(author);
                if(author.includes(stroke)){
                    box.style.display= 'inline-block'
                }else{
                    box.style.display= 'none'
                    con--;
                }
            }else if(filter == "subject"){
                let genre = box.dataset.genre.toLowerCase().trim();
                if(genre.includes(stroke)){
                    box.style.display= 'inline-block'
                }else{
                    box.style.display= 'none'
                }
            }else if( filter == "year"){
                let year = box.dataset.year.toLowerCase().trim();
                if(year.includes(stroke)){
                    box.style.display= 'inline-block'
                }else{
                    box.style.display= 'none'
                    con--;
                }
            }
            count.innerHTML = `Book Count: ${boxes.length}`
            
        }
    )
    
    
})


function selected(filter){
    filter = document.querySelector(".select");
    return filter.value;
}

//=======================================================================