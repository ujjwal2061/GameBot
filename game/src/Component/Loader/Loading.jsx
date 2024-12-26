const Loading=()=>{
    return(
    <div className="flex flex-col justify-center items-center ">
      <img src='bike.gif' className="w-52 h-auto mb-5 flex-row  rounded-lg  justify-center" />
      <div className="loader">
        <p className="font-jetbrains">Loding....</p>
      </div>
    </div>
    )
}
export default Loading;