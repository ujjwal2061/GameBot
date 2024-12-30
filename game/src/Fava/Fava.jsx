const Fava = ({onBack,setfavaGames,favaGames=[]}) => {         

const RemoveGames=(gameToRemove)=>{
  setfavaGames((prevgame)=>prevgame.filter(game=>game.id!==gameToRemove))
   } 
  return (     
<section className="min-h-screen">
  <div className="flex flex-row justify-center items-center rounded-lg m-2">
    <h1 className="text-2xl font-jetbrains  flex items-center  justify-centerfont-semibold dark:text-white text-center mb-4">Favorite Games</h1>
  </div>

 <div className='flex justify-start w-full'> 
    <button onClick={onBack} className='mb-14 ml-4 bg-black px-2 py-1 rounded-lg text-white font-special text-xl hover:bg-gray-900'> <i className="fa-solid fa-arrow-left m-2"></i>Back</button> 
 </div>

  <div className="grid grid-cols-1 dark:text-white  text-black  md:grid-cols-4 sm:grid-cols-3 ">
    {favaGames.length > 0 ? ( favaGames.map((el, i) => (
      <div key={i} className="p-2 bg-gray-800 gap-2 rounded-lg m-2 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer">
        <img src={el.background_image} alt={el.name} className="rounded-lg object-cover h-56" />
        <h2 className="mt-1 font-semibold">{el.name}</h2>
        <h3 className="text-sm m-1">❇️{el.rating} 🗯{el.reviews_count} 📛{el.rating_top}</h3>
        <button onClick={()=>RemoveGames(el.id)} className="px-2 py-1 rounded-md bg-red-500 hover:bg-red-700 transition duration-300 scale-90" >Remove Games</button>
      </div>
    ))
    ) : (
    <p className="font-jetbrains font-semibold">No Game Add Yet Fuck</p>
     )}
  </div>
 </section>
    );     
  };
 export default Fava ;