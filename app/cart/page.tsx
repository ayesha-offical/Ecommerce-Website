
const Cartpage = () => {
  return (
    <main className="flex flex-col bg-slate-800">
      
      <div className="cartsection gap-8  justify-center flex flex-col  tab:flex-row mt-10">
        {" "}
        <div className="ml-10  flex flex-col">
        
         


          <div className="justify-center items-center flex flex-wrap sm:flex-nowrap flex-row gap-4 sm:gap-6 rounded-md">    
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-500  flex flex-wrap h-80 w-96 max-w-full mx-auto sm:mx-0 flex-col justify-center items-center text-center p-4">
            <h6 className="font-semibold text-[24px] sm:text-[32px] items-center justify-center text-center flex -mt-4">
              Cart Totals
            </h6>
            <div className="flex flex-row gap-4 sm:gap-8 pt-6 sm:pt-12">
              <p className="font-medium text-base sm:text-lg">Subtotal</p>
              <p className="font-medium text-[#9F9F9F] text-base sm:text-lg">
               $400
              </p>
            </div>
            <div className="flex flex-row gap-4 sm:gap-8 pt-4 sm:pt-9">
              <p className="font-medium text-base sm:text-lg">Total</p>
              <p className="font-medium text-[#B88E2F] text-base sm:text-lg">
                $9000
              </p>
            </div>
            <button className="mt-8 sm:mt-10 flex justify-center items-center gap-2 bg-transparent w-[150px] h-[45px] border-[1.5px] border-black rounded-[10px] hover:bg-black hover:text-white transition-all duration-300">
              <span>Check Out</span>
            </button>
          </div>
        </div>
      </div>{" "}
     
    </main>
  );
};

export default Cartpage;
