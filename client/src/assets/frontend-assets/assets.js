import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './vibey_logo.png'
import clock_icon from './clock_icon.png'
// --SONGS-COVER-IMAGES--
import blue_bird from './Songs/Blue Bird.jpg'
import guren_no_yumiya from './Songs/Guren no Yumiya.jpeg'
import mundhinam_parthene from './Songs/Mundhinam-Parthene.jpg'
import uyirin_uyire from './Songs/Uyirin-Uyire.jpeg'
import singam_singam from './Songs/Singam-Singam.jpeg'
import oo_antava from './Songs/Oo-Antava.jpg'
import the_next_episode from './Songs/The_Next_Episode.jpeg'
import nuthin_but_a_G_thang from './Songs/Nuthin But A G Thang.jpeg'
import one_dance from './Songs/One Dance.jpg'
import gods_plan from "./Songs/God's Plan.jpeg"
// --SONGS--
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
// --ALBUMS-IMAGES--
import top_50_global from './Albums/Top_50_Global.jpeg'
import anime_album from './Albums/Anime_Album.jpeg'
import harris_jayaraj from './Albums/Harris_Jayaraj_Album.jpg'
import snoop_dogg from './Albums/Snoop_Dogg_Album.jpg'
import DSP from './Albums/DSP_Album.jpg'
import drake from './Albums/Drake_Album.jpeg'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: top_50_global,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Anime",
        image: anime_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Harris Jayaraj",
        image: harris_jayaraj,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Snopp Dogg",
        image: snoop_dogg,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "DSP",
        image: DSP,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Drake",
        image: drake,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Blue Bird Naurto",
        image: blue_bird,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Guren no Yumiya",
        image: guren_no_yumiya,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Mundhinam Parthene",
        image: mundhinam_parthene,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Uyirin Uyire",
        image: uyirin_uyire,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Singam Singam",
        image: singam_singam,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Oo Antava",
        image: oo_antava    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "The Next Episode",
        image: the_next_episode,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Nuthin But A G Thang",
        image: nuthin_but_a_G_thang,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },
    {
        id:8,
        name: "One Dance",
        image: one_dance,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },
    {
        id:9,
        name: "God's Plan",
        image: gods_plan,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]