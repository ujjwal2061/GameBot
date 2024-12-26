import React from 'react'

const  Error1=async ({message}) => {
 return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     <img src="Vodka.gif" alt="Error" className="w-52 h-auto mb-5 flex-row  rounded-lg  justify-center"/>
         <h1 className="text-3xl font-semibold mb-2">Oops! Something went wrong.</h1>
             <p className="text-lg text-gray-600 mb-4">{message}</p>
             <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">Try Again</button>
     </div>
 );
};
export default Error1;
