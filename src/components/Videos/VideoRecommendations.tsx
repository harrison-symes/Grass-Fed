import VideoRecommendation from "./VideoRecommendation";
import "./videos.scss";

const VideoRecommendations = () => {
  return (
    <div className="mt4">
      <div className="is-size-4">Recommended Creators</div>
      <VideoRecommendation
        name="Joey Carbstrong"
        imageUrl="https://yt3.googleusercontent.com/ytc/AL5GRJWvLcdzci1gKHdJ__FV7x2LF3xEQBdX7mkWODsd9Q=s900-c-k-c0x00ffffff-no-rj"
        text="Joey Carbstrong is an Australian animal rights activist and vegan educator known for his passionate street activism and advocacy work. He frequently appears in media interviews, debates, and podcasts to promote veganism and challenge societal norms that perpetuate animal exploitation. Joey is a respected figure in the vegan community and an inspiration to many."
        videoId="Nfy_xQ75U0E"
        youtubeUrl="https://www.youtube.com/c/JoeyCarbstrong/videos"
        instagramUrl="https://www.instagram.com/joey_carbstrong"
      />
      <hr />
      <VideoRecommendation
        name="Earthling Ed"
        imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8xdaOYuDy6RlyUL6-vxqIzeNuDuEeVCQej2ly0hkKlctwd6km"
        text="Earthling Ed is a UK-based vegan activist and content creator known for his street activism and thought-provoking speeches. He is the founder of Surge, a grassroots animal rights organization, and hosts the 'Earthling Ed: Live' podcast. Ed is a prominent voice in the vegan community, inspiring many to adopt a plant-based lifestyle and work towards a more compassionate world."
        videoId="Z3u7hXpOm58"
        youtubeUrl="https://www.youtube.com/@ed.winters/videos"
        instagramUrl="https://www.instagram.com/earthlinged/?hl=en"
        isReverse
      />
      <hr />
      <VideoRecommendation
        name="Mic the Vegan"
        imageUrl="https://micthevegan.com/wp-content/uploads/2017/11/Mic3.jpg"
        text="Mic the Vegan is a science-based vegan advocate and popular YouTube personality who provides evidence-based information on the health benefits of a vegan diet and the environmental impact of animal agriculture. His engaging and accessible videos make him a trusted source of information for those interested in veganism."
        videoId="zKwnMCEp3HM"
        youtubeUrl="https://www.youtube.com/c/MictheVegan"
        instagramUrl="https://www.instagram.com/micthevegan/?hl=en"
      />
      <hr />
      <VideoRecommendation
        name="Gary Yourofsky"
        imageUrl="https://yt3.googleusercontent.com/ytc/AL5GRJXyA2nE7Go9Z59gUPC3J7zg0mMNJyxndn6GSGTWxg=s900-c-k-c0x00ffffff-no-rj"
        text="Gary Yourofsky is a passionate animal rights activist and public speaker who is known for his provocative speeches on animal liberation and veganism, including his widely viewed 'Best Speech You Will Ever Hear' presentation. He is also the founder of the animal rights organization ADAPTT and has been involved in various forms of animal rights activism for over two decades."
        videoId="U5hGQDLprA8"
        youtubeUrl="https://www.youtube.com/@GaryYourofskyAdaptt"
        websiteUrl="https://www.adaptt.org/"
      />
    </div>
  );
};

export default VideoRecommendations;