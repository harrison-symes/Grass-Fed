import Documentary from "../components/Documentary/Documentary";

const Documentaries = () => {
  return (
    <div className="container">
      <h1 className="is-size-3">Documentaries</h1>
      <div className="documentaries">
        <Documentary
          title="Earthlings"
          year="2019"
          text={
            <>
              <p>
                Earthlings is a powerful documentary film that explores the
                relationship between humans and animals, and the ways in which
                we use animals for food, clothing, experimentation, and
                entertainment. The film takes a global perspective, exposing the
                hidden realities of animal exploitation and cruelty across
                various regions of the world, including North America, Europe,
                Asia, and Australia.
              </p>
              <p className="mt3">
                Narrated by actor and animal rights activist Joaquin Phoenix,
                Earthlings is a deeply impactful and thought-provoking film that
                challenges viewers to consider their own attitudes and behaviors
                towards animals. The film is available for free on YouTube, and
                has been viewed by millions of people worldwide, inspiring many
                to adopt a more compassionate and ethical lifestyle.
              </p>
            </>
          }
          youtubeId="Hm7Babs_FJU"
          videoUrl="https://www.youtube.com/watch?v=8gqwpfEcBjI"
          watchService="Youtube"
        />
        <hr />
        <Documentary
          title="Dominion"
          year="2018"
          text={
            <>
              <p>
                Dominion is an Australian documentary that exposes the dark side
                of animal agriculture through hidden camera footage and
                testimonies from animal rights activists. The film highlights
                the abuse and cruelty inflicted on animals in the meat, dairy,
                egg, and other animal-based industries in Australia, the United
                States, and the United Kingdom, as well as New Zealand. Dominion
                exposes the horrific conditions and practices that animals
                endure, such as overcrowded living spaces, physical mutilation,
                and brutal slaughter. The documentary also delves into the
                environmental and health impacts of animal agriculture and the
                systemic issues that allow these atrocities to occur. Through
                powerful imagery and compelling storytelling, Dominion
                challenges viewers to confront their complicity in the
                exploitation of animals and consider the ethical implications of
                their food choices. The film has received critical acclaim and
                sparked important conversations about animal welfare and the
                need for systemic change in the way we produce and consume food.
              </p>
            </>
          }
          youtubeId="LpDJlEQsDoA"
          videoUrl="https://www.youtube.com/watch?v=LQRAfJyEsko"
          watchService="Youtube"
        />
        <hr />
        <Documentary
          title="Land of Hope and Glory"
          year="2017"
          text={
            <>
              <p>
                "Land of Hope and Glory" is a powerful and thought-provoking
                documentary film that exposes the hidden truths behind modern
                animal agriculture. Directed and produced by the UK-based animal
                welfare organization, Surge, the film takes an unflinching look
                at the cruelty and suffering that takes place within the walls
                of factory farms and slaughterhouses. Through powerful footage
                and expert testimony from veterinarians, animal welfare experts,
                and industry insiders, "Land of Hope and Glory" reveals the grim
                reality of animal agriculture and its impact on animals, the
                environment, and human health. The film also highlights the
                ethical and moral implications of our food choices, and
                challenges viewers to consider the impact of their daily
                decisions on the lives of animals and the planet. Despite its
                challenging subject matter, "Land of Hope and Glory" has been
                widely praised for its honesty, integrity, and impact, inspiring
                many viewers to make changes in their own lives and sparking a
                growing movement towards more compassionate and sustainable food
                choices.
              </p>
            </>
          }
          youtubeId="OqPflP_hXyY"
          videoUrl="https://www.youtube.com/watch?v=dvtVkNofcq8"
          watchService="Youtube"
        />
        <hr />
        <Documentary
          title="Cowspiracy"
          year="2014"
          text={
            <>
              <p>
                "Cowspiracy" is a 2014 documentary film produced and directed by
                Kip Andersen and Keegan Kuhn. The film explores the devastating
                impact of animal agriculture on the environment and the
                practices of the animal agriculture industry, while highlighting
                the environmental organizations' reluctance to address the
                issue. The film covers the impact of animal agriculture on
                various regions, including North America, South America, Asia,
                and Europe. The documentary has been praised for its informative
                approach to environmentalism and its exploration of a topic that
                is often overlooked in mainstream discussions about
                sustainability.
              </p>
            </>
          }
          youtubeId="nV04zyfLyN4"
          videoUrl="https://www.netflix.com/watch/80033772"
          watchService="Netflix"
        />
        <hr />
        <Documentary
          title="Forks Over Knives"
          year="2011"
          text={
            <>
              <p>
                Forks Over Knives is a documentary film that explores the
                benefits of a plant-based diet. The film advocates for the idea
                that many chronic illnesses, such as heart disease, cancer, and
                diabetes, can be prevented or reversed by adopting a whole-food,
                plant-based diet. The film features interviews with medical
                experts and follows the stories of several individuals who have
                improved their health through this diet. The film has been
                credited with sparking the plant-based movement and has inspired
                many individuals to adopt a healthier lifestyle.
              </p>
            </>
          }
          youtubeId="O7ijukNzlUg"
          videoUrl="https://www.forksoverknives.com/the-film/"
          watchService="forksoverknives.com"
        />
        <hr />
        <Documentary
          title="The Game Changers"
          year="2018"
          text={
            <>
              <p>
                "The Game Changers" is a 2018 documentary film directed by Louie
                Psihoyos and produced by James Cameron, Arnold Schwarzenegger,
                and Jackie Chan. The film explores the benefits of plant-based
                eating for athletes and features interviews with athletes,
                doctors, and nutrition experts from around the world. The
                documentary highlights how many of the world's top athletes,
                from Olympic medalists to professional football players, have
                switched to plant-based diets and seen significant improvements
                in their athletic performance and overall health. With a focus
                on dispelling common myths about plant-based diets and
                showcasing the benefits of plant-based eating for athletes, "The
                Game Changers" has inspired many viewers to consider making
                dietary changes to improve their own health and athletic
                performance.
              </p>
            </>
          }
          youtubeId="iSpglxHTJVM"
          videoUrl="https://www.netflix.com/watch/81157840"
          watchService="Netflix"
        />
      </div>
    </div>
  );
};

export default Documentaries;
