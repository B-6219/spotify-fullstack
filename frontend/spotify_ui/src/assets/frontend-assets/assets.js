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
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
//import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
//import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'

//artist images
import biggs from './biggs.jpeg'
import b_boyz from './b-boyz.jpeg'
import von from './von.jpeg'
import wakadinali from './wakadinali.jpeg'
import yb from './yb.jpeg'
import weekend from './weekend.jpeg'
import cee from './cee.jpeg'
import alice from './alice.jpeg'
import drake from './drake.jpeg'
import billie from './billie.jpeg'
import bruno from './bruno.jpeg'

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
        id: 0,
        name: "Top 50 Global",
        image: img8,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2a4365"
    },
    {
        id: 1,
        name: "Top 50 India",
        image: img9,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#22543d"
    },
    {
        id: 2,
        name: "Trending India",
        image: img10,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#742a2a"
    },
    {
        id: 3,
        name: "Trending Global",
        image: img16,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#44337a"
    },
    {
        id: 4,
        name: "Mega Hits",
        image: img11,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#234e52"
    },
    {
        id: 5,
        name: "Happy Favorites",
        image: img15,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#744210"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Song One",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
        artistId: 0
    },
    {
        id: 1,
        name: "Song Two",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
        artistId: 1
    },
    {
        id: 2,
        name: "Song Three",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
        artistId: 2
    },
    {
        id: 3,
        name: "Song Four",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
        artistId: 3
    },
    {
        id: 4,
        name: "Song Five",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
        artistId: 4
    },
    {
        id: 5,
        name: "Song Six",
        image: img14,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:45",
        artistId: 3
    },
    {
        id: 6,
        name: "Song Seven",
        image: img7,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:18",
        artistId: 6
    },
    {
        id: 7,
        name: "Song Eight",
        image: img12,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:35",
        artistId: 7
    }
]

export const artistsData = [
    {
        id: 0,
        name: "Bruno Mars",
        image: bruno,
        songs: [song1, song2, song3],
        about: "Bruno Mars is an American singer, songwriter, record producer, and performer known for his versatile musical style and energetic performances. He has won multiple Grammy Awards and is famous for hits like 'Just the Way You Are,' 'Uptown Funk,' and '24K Magic.'",
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 1,
        name: "The Weeknd",
        image: weekend,
        songs: [song1, song2, song3],
        about: "The Weeknd, born Abel Tesfaye, is a Canadian singer, songwriter, and record producer known for his unique blend of R&B, pop, and hip-hop. He has received numerous awards, including Grammys, and is famous for hits like 'Blinding Lights,' 'Starboy,' and 'Can't Feel My Face.'",
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 2,
        name: "NBA Youngboy",
        image: yb,
        songs: [song1, song2, song3],
        about: 'NBA YoungBoy, also known as YoungBoy Never Broke Again, is an American rapper, singer, and songwriter known for his raw and emotional style of music. He has gained a massive following with hits like Outside Today, AI YoungBoy, and 38 Baby.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 3,
        name: "Big Yasa",
        image: biggs,
        songs: [song1, song2, song3],
        about: 'Big Yasa is a Kenyan rapper and musician known for his impactful lyrics and unique style. He has made significant contributions to the Kenyan music scene with hits like "Mungu Pekee" and "Nataka Nikupe."',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 4,
        name: "Alice Kimanzi",
        image: alice,
        songs: [song1, song2, song3],
        about: 'Alice Kimanzi is a Kenyan singer and songwriter known for her soulful voice and heartfelt lyrics. She has captivated audiences with songs like "Nakucheka" and "Moyo Safi," establishing herself as a prominent figure in the East African music scene.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 5,
        name: "Wakadinali",
        image: wakadinali,
        songs: [song1, song2, song3],
        about: 'Wakadinali is a Kenyan music group known for their energetic performances and catchy tunes. They have gained popularity with hits like "Lamba Lolo" and "Cheza Kama Wewe," making them a favorite among fans of contemporary Kenyan music.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    }, {
        id: 6,
        name: "Central Cee",
        image: cee,
        songs: [song1, song2, song3],
        about: 'Central Cee is a British rapper and songwriter known for his distinctive style and lyrical prowess. He has risen to prominence with tracks like "Loading" and "Day in the Life," solidifying his position in the UK rap scene.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 7,
        name: "King Von",
        image: von,
        songs: [song1, song2, song3],
        about: 'King Von was an American rapper known for his storytelling ability and raw lyrical content. Hailing from Chicago, he gained recognition with tracks like "Crazy Story" and "Took Her to the O," leaving a lasting impact on the hip-hop community before his untimely passing in 2020.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 8,
        name: "Burukyln Boyz",
        image: b_boyz,
        songs: [song1, song2, song3],
        about: 'Buruklyn Boyz is a hip-hop duo known for their dynamic beats and engaging lyrics. They have made waves in the music scene with tracks like "Hood Stories" and "Street Dreams," showcasing their talent and unique sound.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    }, {
        id: 9,
        name: "Drake",
        image: drake,
        songs: [song1, song2, song3],
        about: 'Drake, born Aubrey Drake Graham, is a Canadian rapper, singer, songwriter, and actor. He first gained recognition for his role on the TV show "Degrassi: The Next Generation" before transitioning to music. Drake is known for his versatile style, blending rap and R&B, and has released numerous chart-topping hits such as "Hotline Bling," "God\'s Plan," and "In My Feelings." He has won multiple awards, including Grammys, and is one of the best-selling music artists of all time.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    },
    {
        id: 10,
        name: "Billie Eilish",
        image: billie,
        songs: [song1, song2, song3],
        about: 'Billie Eilish Pirate Baird O\'Connell, known professionally as Billie Eilish, is an American singer and songwriter. She gained fame with her debut single "Ocean Eyes" and has since become known for her unique musical style, which blends pop, electropop, and indie pop. Billie is recognized for her distinctive voice, dark and introspective lyrics, and innovative music videos. She has won multiple Grammy Awards, including Album of the Year for her debut album "When We All Fall Asleep, Where Do We Go?" and is considered one of the leading figures in contemporary pop music.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    }, {
        id: 11,
        name: "Dax",
        image: 'dax.jpeg',
        songs: [song1, song2, song3],
        about: 'Dax, whose real name is Daniel Nwosu Jr., is a Canadian rapper, singer, and songwriter known for his emotionally charged lyrics and dynamic flow. He gained popularity through his YouTube channel, where he posted freestyle raps and original songs. Dax is recognized for his introspective themes, often addressing personal struggles, mental health, and social issues in his music. Some of his notable tracks include "Dear God," "My Last Words," and "Joker." He has built a dedicated fanbase and continues to make waves in the hip-hop community.',
        followers: '13,352,560',
        monthlyListeners: '56,789,123'
    }

]