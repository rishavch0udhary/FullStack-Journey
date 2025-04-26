
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const Next = document.getElementById("Next");

let progrss = document.getElementById('progress')
let total_duration = document.getElementById('duration')
let current_time = document.getElementById('current_time')
const progress_div = document.getElementById('progress_div')

const songs = [
{
        name:"rishav1",
        title:"Qaafirana",
        artist:"ArijitSingh",
    },
    {
        name:"rishav2",
        title: "Maidaan Fateh",
        artist:"Sukhwinder & Shreya"
    },
    {
        name:"rishav3",
        title:"Kabira",
        artist:"TOCHIRAINA",
    },
    {
        name:"rishav4",
        title:"Baarish",
        artist:"Asees Kaur",
    },
    {
        name:"rishav5",
        title:"Chahunga",
        artist:"Arijit Singh",
    },
    {
        name:"rishav6",
        title:"Humdard",
        artist:"Arijit Singh",
    },
    {
        name:"rishav7",
        title:"Jeene laga hoon",
        artist:"Atif Aslam",
    }
]

let isPlaying = false;
const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click",()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() : playMusic(); 
})

   const loadSong =(songs)=>{
       title.textContent = songs.title;
       artist.textContent = songs.artist;
       music.src = "/assets/music/" + songs.name + ".mp3";
       img.src = "/assets/images/" + songs.name + ".jpg";

   };

   songIndex = 2;
//    loadSong(songs[2]);

   const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   }
   const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   }

//    progress js work
music.addEventListener("timeupdate",(event)=>{
    const{currentTime, duration} = event.srcElement;
    let progress_time = (currentTime/duration)*100;
    progress.style.width=`${progress_time}%`;

    // music duration update

    let min_duration = Math.floor(duration/60);
    let sec_duration = Math.floor(duration%60);

    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        total_duration.textContent = `${tot_duration}`;
    }
    
     let min_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime%60);

    
    if(sec_currentTime<10){
        sec_currentTime = `0${sec_currentTime}`
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
        current_time.textContent = `${tot_currentTime}`;
    

});
// progress on click functionality
  progress_div.addEventListener('click',(event)=>{
    console.log(event);
    const{duration} = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;
    // console.log(duration);
    // console.log(move_progress);
    music.currentTime = move_progress;
  })

music.addEventListener("ended",nextSong);

   Next.addEventListener('click',nextSong);
   prev.addEventListener('click',prevSong);
