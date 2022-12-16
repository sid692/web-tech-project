import React from 'react';
import './App.css'

import im from './logo.png'
import vid from './bg_vid2.mp4'
import tile1 from './tile1.mp4'
import tile2 from './tile2.mp4'
import tile3 from './tile3.mp4'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import SignedNavBar from './signed_nav_bar';
import SignedWebBox from './signed_web_box';
import SignedAudBox from './signed_aud_box';
import SignedVidBox from './signed_vid_box';
import FeatureBlock from './features';
import ProBlock from './pro_version';
import FootBar from './foot_bar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home2 extends React.Component {

  render() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    return (
      <>
        <video src={vid} type="video/mp4" muted loop id="myVideo" height='700px' autoPlay style={{ position: "absolute" }}></video>

        <SignedNavBar />

        <img src={im} alt="Logo" height='290px' id='im' />

        <SearchBar />

        <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <WhiteBox />

        <div className='tile_choice'>
          <br /><br />
          <p style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black", WebkitTextStrokeColor: "black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popular professional services</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <a href='#web_div'><video autoPlay loop muted class='tile1' src={tile1} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='#aud_div'><video autoPlay loop muted class='tile2' src={tile2} /> </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='#vid_div'><video autoPlay loop muted class='tile3' src={tile3} /> </a>
          <br /><br /><br /><br /><br /><br />
        </div>

        <WhiteBox />

        <FeatureBlock />

        <WhiteBox />

        <ProBlock />

        <WhiteBox />

        <div id='web_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br /><br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Web Development</i></h1>
          <Carousel>
            <div>
              <SignedWebBox name="Manish Pandey" desc="I will create the best websites for you using MERN stack." cost="1499" rate="4.5" image="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg"  cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedWebBox name="Naren Srinivas" desc="I will make responsive webistes using ReactJS and Express." cost="990" rate="3" image="https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg" cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedWebBox name="Swathi Kumar" desc="I will do the backend for your website using MongoDB." cost="1299" rate="4" image="https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg" cat = "Web Dev" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <SignedWebBox name="Mark Edward" desc="I will design and develop a professional squarespace website." cost="1350" rate="2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNmKXqqou33G1KJFnG92U9mNOrIK-qD1ymg&usqp=CAU" cat = "Web Dev"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedWebBox name="Manoj Kumar" desc="I will fix wordpress errors and issues in your website." cost="799" rate="3.5" image="https://cdn-blog.novoresume.com/articles/web-developer-resume/bg.png" cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedWebBox name="Sheela Thapar" desc="I will fix Google Sites errors and issues in your website within Minutes." cost="699" rate="3.5" image="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826__340.jpg" cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <SignedWebBox name="Karthik Namboori" desc="Karthik is my name, Web Dev is my Fame!" cost="1999" rate="5" image = 'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317__340.png' cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedWebBox name="Amit Sharma" desc="I make simple and sweet website on a minor scale" cost="599" rate="3.5" image="https://cdn.pixabay.com/photo/2016/04/25/14/15/man-1352025__340.png" cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedWebBox name="Sridhar Reddy" desc="I will fix wordpress errors and issues in your website." cost="1499" rate="3.5" image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg" cat = "Web Dev" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Carousel>
          <br/>
        </div>

        <WhiteBox />

        <div id='aud_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br /><br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Music and Audio</i></h1>
          <Carousel>
            <div>
              <SignedAudBox name="Ben Robinson" desc="I will clean up, edit, enhance or fix and restore your audio or music." cost="1750" rate="5" image="https://brybed.com/storage/img/681/854/7iyphGK6zayb3r07wWaBoUcgmF0jH0gySFauzdNM.jpeg" cat = "Music & Audio" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedAudBox name="Matt Howard" desc="I will create a professional DJ mix or mashup in any genre." cost="900" rate="2.5" image="https://cdn.digitaldjtips.com/app/uploads/2019/05/08101601/fulltime-DJ-main.jpg" cat = "Music & Audio" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedAudBox name="Arun Lal" desc="I will produce accurate guitar transcriptions and create a sheet music." cost="799" rate="4"  image="https://rollingstoneindia.com/wp-content/uploads/2018/05/3-1.jpg" cat = "Music & Audio" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <SignedAudBox name="Joe Gatto" desc="I will produce custom beats based on the genre you choose." cost="850" rate="4"  image="https://www.headphonesty.com/wp-content/uploads/2020/08/Singer_Wearing_Headphones_During_Recording_Session-1200x675-cropped.jpg" cat = "Music & Audio"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedAudBox name="Vidant Gupta" desc="I will make relaxing music suitable for meditation." cost="1050" rate="3"  image="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/fj6xpxemfwbeufoknxrl/create-an-animated-music-video-for-you.png" cat = "Music & Audio" / > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedAudBox name="Rahul Rao" desc="I will Perform live keyboard sessions for commercial purposes." cost="1550" rate="3"  image="https://cdn.pixabay.com/photo/2019/09/27/07/57/music-4507817__340.jpg" cat = "Music & Audio" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <SignedAudBox name="Lokesh Kannan" desc="I will produce EDMs based on the genre you choose in less than 5 hours." cost="1850" rate="4"  image="https://cdn.pixabay.com/photo/2019/09/27/07/57/music-4507819__340.jpg" cat = "Music & Audio" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedAudBox name="Korey Varun" desc="I will Karaoke soul soothening music for various Background scores." cost="2050" rate="5"  image="https://cdn.pixabay.com/photo/2019/07/14/00/04/music-producer-4335953__340.jpg" cat = "Music & Audio" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedAudBox name="Shreya Goswami" desc="I will make soulful renditions to mimic Bollywood." cost="1599" rate="3"  image="https://cdn.pixabay.com/photo/2020/01/16/13/03/sound-engineer-4770483__340.jpg"  cat = "Music & Audio"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Carousel>
          <br />
        </div>

        <WhiteBox />

        <div id='vid_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br /><br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Video and Animation</i></h1>
          <Carousel>
            <div>
              <SignedVidBox name="Naman Kulkarni" desc="I will do professional video editing and motion graphics." cost="1999" rate="4"  image="https://www.reliablesoft.net/wp-content/uploads/2022/07/video-editing-courses.webp" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedVidBox name="Piyush Goyal" desc="I will make a professional 3D logo animation for your introductions." cost="999" rate="4.5"  image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f.jpg" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedVidBox name="Nitin Reddy" desc="I will design any animated GIFs for you in less than 6 hours." cost="850" rate="3.5"  image="https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/2:1/w_2399,h_1199,c_limit/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg" cat = "Video & Animation" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <SignedVidBox name="Mansi Gupta" desc="I will create any type of commercial or corporate video." cost="1299" rate="3.5" image="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/11201656/Animation-Courses.jpg" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedVidBox name="Rajat Sharma" desc="I will make a professional 4K cinematic commercial for your brand." cost="2499" rate="4" image="https://www.hubspot.com/hubfs/how-to-edit-youtube-videos.jpg" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedVidBox name="Mohit Thakur" desc="I will make a professional 4K cinematic Short film for your brand." cost="1499" rate="4.1" image="https://cdn.pixabay.com/photo/2020/10/08/14/39/man-5638146__340.jpg" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <SignedVidBox name="Vidvan Chaturvedi" desc="I will create any type of Advertisement or TikTok video." cost="1299" rate="3." image="https://cdn.pixabay.com/photo/2020/04/19/15/14/tiktok-5064078__340.jpg" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedVidBox name="Keerthi Subbanna" desc="I will make professional IG Reels  for your company in less than 5 hours." cost="2499" rate="4" image="https://media.istockphoto.com/id/1426152285/photo/teenage-girl-filming-video-of-herself-on-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=AMsfUdl-cjznZDOUlCDJObpQPfNgd24u6HLGDz0Igrs="  cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignedVidBox name="Muthuram Sudarshan" desc="I shoot professional 4K cinematic action commercials on GoPro for your brand." cost="2999" rate="3.5" image="https://cdn.pixabay.com/photo/2020/02/29/18/56/ski-4890842__340.jpg" cat = "Video & Animation" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Carousel>
          <br />
        </div>

        <div style={{backgroundColor:"rgb(208, 205, 205)", width: "1535px", height: "60px"}}></div>

        <FootBar />
      </>
    );
  }
}

export default Home2;
