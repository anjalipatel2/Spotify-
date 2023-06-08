console.log("welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/b.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Barsat-ki-dhun",filePath: "songs/b.mp3",coverPath: "covers1.jpg"},
    {songName: "bewafa-tera-muskurana",filePath: "songs/be.mp3",coverPath: "covers8.jpg"},
    {songName: "Darshan-song",filePath: "songs/d.mp3",coverPath: "covers1.jpg"},
    {songName: "ishq-me-hum-tumhe",filePath: "songs/ishq.mp3",coverPath: "covers1.jpg"},
    {songName: "khushi-jab-v-teri",filePath: "songs/khushi.mp3",coverPath: "cover1.png"},
    {songName: "kuch-bathe-hai",filePath: "songs/kuch.mp3",coverPath: "covers5.jpg"},
    {songName: "Rim-jhim-ye-sawan",filePath: "songs/rim.mp3",coverPath: "covers1.jpg"},
    {songName: "mujhese-takra-gaye",filePath: "songs/be.mp3",coverPath: "covers8.jpg"},
    {songName: "barsat-ki-dhun",filePath: "songs/b.mp3",coverPath: "covers9.jpg"},
    {songName: "DEAF KEV - Barsat-ki-dhun",filePath: "songs/1.mp3",coverPath: "covers1.jpg"},

]

songItems.forEach((element,i)=>{
    console.log(element,i)
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})    
// audioElement.play();

// play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }
});

// Listen to EVents
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from (document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');


})
}
Array.from (document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0 ;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


    })
})