const Content = () => {
    return (
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        <article className="m-1 px-3 py-1 rounded-lg items-center shadow-sm hover:shadow-lg">
          <h1 className="m-1 text-black font-silkscreen flex justify-center text-xl">
            Ready To Become A Pro at Games With Help of GameRateBot!
          </h1>
          <span className="m-4 flex items-center justify-center underline underline-offset-2 rounded-md text-gray-900 font-mono">
            Dive into the world of gaming like never before.
          </span>
          <p className="text-base text-left flex items-center justify-center font-jetbrains">
            Unleash your potential and take your skills to the next level. Don't waste precious moments searching for the perfect game. 
            Simply ask our AI, and let GameRateBot deliver personalized game recommendations that align with your unique mood and preferences. Whether you're in the mood for a thrilling adventure or a relaxing puzzle, we've got you covered.
          </p>
        </article>
  
        <article className="m-1 relative rounded-md transition duration-700 ease-in-out hover:bg-slate-300 p-4 flex flex-col md:flex-row justify-center items-center">
          <img src="Game.jpg" className="w-full md:w-1/3 h-auto rounded" />
          <div className="md:ml-4 mt-4 md:mt-0">
            <h1 className="underline underline-offset-2 font-jetbrains flex  justify-center md:justify-start text-center md:text-left text-sm font-bold">
              **GAULEY**
            </h1>
            <p className="m-2 font-mono text-balance text-center md:text-left">
              Explore Nepal’s vibrant landscapes and culture in Gauley, an open-world adventure game by Ashim Shakya. Wander through cities and countryside, collect unique "Mantras", uncover hidden secrets, and experience community-driven development. Available in Early Access, join now and contribute to its growth.
            </p>
            <a href="https://ashimshakya.itch.io/gauley" target="_blank" className="flex justify-center md:justify-start">
              <button className="mt-2 md:mt-4 bg-black px-3 py-1 rounded-full hover:bg-gray-900 text-white cursor-pointer">
                Download
              </button>
            </a>
          </div>
        </article>
      </section>
    );
  }
  export default Content;
  