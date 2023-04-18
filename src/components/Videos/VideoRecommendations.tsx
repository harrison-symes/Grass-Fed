import VideoRecommendation from "./VideoRecommendation";

const VideoRecommendations = () => {
  return (
    <div className="mt4">
      <div className="is-size-4">Recommended Vegan Activists and Creators</div>
      <VideoRecommendation
        name="Gary Yourofsky"
        imageUrl="/images/gary_yourofsky.jpg"
        text="Gary Yourofsky is a passionate animal rights activist and public speaker who is known for his provocative speeches on animal liberation and veganism, including his widely viewed 'Best Speech You Will Ever Hear' presentation. He is also the founder of the animal rights organization ADAPTT and has been involved in various forms of animal rights activism for over two decades. The first video here is age restricted, but you should watch it. It really is the best speech you will ever hear."
        videoId="U5hGQDLprA8"
        videoId2="GPHPVvKoZDI"
        youtubeUrl="https://www.youtube.com/@GaryYourofskyAdaptt"
        websiteUrl="https://www.adaptt.org/"
        isReverse
      />
      <hr className="mb5-m" />
      <VideoRecommendation
        name="Joey Carbstrong"
        imageUrl="/images/joey.jpg"
        text="Joey Carbstrong is an Australian animal rights activist and vegan educator known for his passionate street activism and advocacy work. He frequently appears in media interviews, debates, and podcasts to promote veganism and challenge societal norms that perpetuate animal exploitation. Joey is a respected figure in the vegan community and an inspiration to many."
        videoId="x4-XPYlE5lE"
        videoId2="hdVpts39C88"
        youtubeUrl="https://www.youtube.com/c/JoeyCarbstrong/videos"
        instagramUrl="https://www.instagram.com/joey_carbstrong"
        websiteUrl="https://www.joeycarbstrong.com/"
        twitterUrl="https://twitter.com/joeycarbstron"
      />
      <hr className="mb5-m" />
      <VideoRecommendation
        name="Earthling Ed"
        imageUrl="/images/earthling_ed.jfif"
        text="Earthling Ed is a UK-based vegan activist and content creator known for his street activism and thought-provoking speeches. He is the founder of Surge, a grassroots animal rights organization, and hosts the 'Earthling Ed: Live' podcast. Ed is a prominent voice in the vegan community, inspiring many to adopt a plant-based lifestyle and work towards a more compassionate world."
        videoId="Z3u7hXpOm58"
        videoId2="ScbeMdYkKDc"
        youtubeUrl="https://www.youtube.com/@ed.winters/videos"
        instagramUrl="https://www.instagram.com/earthlinged/?hl=en"
        websiteUrl="https://earthlinged.org/"
        twitterUrl="https://twitter.com/earthling_ed"
        isReverse
      />
      <hr className="mb5-m" />
      <VideoRecommendation
        name="Mic the Vegan"
        imageUrl="/images/mic_the_vegan.jpg"
        text="Mic the Vegan is a science-based vegan advocate and popular YouTube personality who provides evidence-based information on the health benefits of a vegan diet and the environmental impact of animal agriculture. His engaging and accessible videos make him a trusted source of information for those interested in veganism."
        videoId="zKwnMCEp3HM"
        videoId2="wJIY-8sBOn4"
        youtubeUrl="https://www.youtube.com/c/MictheVegan"
        instagramUrl="https://www.instagram.com/micthevegan/?hl=en"
        websiteUrl="https://micthevegan.com/"
      />
      <hr className="mb5-m" />
      <VideoRecommendation
        name="Cliff Grant"
        imageUrl="/images/cliff_grant.jpg"
        text="Cliff has a small youtube channel but he is worth checking out. He has videos of calm, rational conversations about veganism with people on the street, alongside other videos talking about general vegan topics. He also has a lovely Irish accent. "
        videoId="2w5AWKDdV9g"
        videoId2="q2nGotgD4Co"
        youtubeUrl="https://www.youtube.com/@clifgrant"
        instagramUrl="https://www.instagram.com/clif_grant"
        twitterUrl="https://twitter.com/CliffGrant15"
      />
      <hr className="mb5-m" />
      <VideoRecommendation
        name="Natalie Fulton"
        imageUrl="/images/natalie_fulton.jpg"
        text="Natalie is also a small, upcoming youtuber who creates a lot of high quality content around veganism. Her friendly, rational approach to debates and conversations is effective, and she is an extremely eloquent speaker."
        videoId="yFeh8zubAzU"
        videoId2="t7rEJdBvt14"
        youtubeUrl="https://www.youtube.com/@natalie.fulton"
        instagramUrl="https://www.instagram.com/nataliefultonofficial/"
      />
    </div>
  );
};

export default VideoRecommendations;
