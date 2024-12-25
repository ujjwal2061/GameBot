const Footer =()=>{
    return(
      <footer className="w-full bg-white text-black">
    
      <section className="container mx-auto text-center py-4">
        <h1 className="font-jetbrains font-semibold text-lg">Why GameRateBot?</h1>
      </section>

      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-6">
        <article className="rounded-lg shadow-md   relative p-3 flex justify-start items-center transform transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-md ">
          <img src="gif1.gif" alt="GameRateBot Image" className="w-1/3 h-auto rounded" />
          <p className="text-black m-2 font-jetbrains ">Have  Multiple Games Source & Find games that resonate with your current mood..</p>
        </article>

        <article className="  relative rounded-md shadow-2xl p-4 flex-row justify-center items-center ml-2 transform transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-md">
          <h1 className="flex-row  flex justify-center items-center font-mono text-xl tracking-tight">Chat with AI.</h1>
          <p className=" font-jetbrains  text-sm  items-center justify-center  flex flex-row">To Get real-time recommendations from our advanced AISpend less time searching and more time playing.</p>
        </article>

        <article className="shadow-2xl rounded-md p-4 sm:col-span-2 lg:col-span-1 flex justify-center items-center transform transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-md"> 
          <img src="G-zen.jpg" className="w-1/4 h-auto rounded" />
          <p className="font-jetbrains  flex md:justify-center text-base text-center">Discover a your games tailored to your mood and chat with AI to get personalized game recommendations!</p> 
          </article>
       </section>

      <section className="px-7 py-4 flex justify-center gap-6 text-black">
        <a
          className="hover:bg-gray-700 hover:text-white hover:rounded-md px-4 py-2 transition" href="https://x.com/Ujjwal_2061" target="_blank" rel="noopener noreferrer">  <i className="fa-brands fa-x-twitter"></i></a>
        <a
          className="hover:bg-gray-700 hover:text-white hover:rounded-md px-4 py-2 transition"  href="https://github.com/ujjwal2061" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-github"></i>
        </a>
      </section>

      <section className="text-center text-sm font-itim  py-4">
        All rights reserved by <span className="font-semibold underline underline-offset-2">nejuj_11</span>
      </section>
    </footer>
   
    )
}
export default Footer;