const ShimmerRestaurantDetails = () => {
  return (
    <>
      {/*  top rest basic detail */}
      <div className="w-11/12 md:w-[1100px] md:h-[140px] rounded-lg border-4 border-slate-200 flex justify-between   mx-auto my-10  px-4 items-center">
        <div className="flex flex-col justify-center gap-4">
          <div className="h-6 w-40 bg-slate-200 animate-pulse"></div>
          <div className="h-6 w-36 bg-slate-200 animate-pulse"></div>
          <div className="h-6 w-32 bg-slate-200 animate-pulse"></div>
        </div>

        <div className="h-6 w-32 bg-slate-200 animate-pulse"></div>
      </div>

      {/*  menu items */}
      <div className=" md:w-[820px] mx-auto my-32 flex flex-col gap-12   ">
        {/*  1st card */}
        <div className="w-full h-44   px-4 flex justify-between ">
          {/*  menu details name , price , cuisine etc */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="h-6 w-40 md:w-56 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-52 md:w-[32rem] bg-slate-200 animate-pulse"></div>
          </div>
          {/*  menu image & btn */}
          <div className="mt-4">
            <div className="w-32 h-24 md:w-56 md:h-32 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="bg-slate-200 w-20 h-10 mt-2 rounded-lg  "></div>
          </div>
        </div>
        {/*  2nd card */}
        <div className="w-full h-44   px-4 flex justify-between ">
          {/*  menu details name , price , cuisine etc */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="h-6 w-40 md:w-56 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-52 md:w-[32rem] bg-slate-200 animate-pulse"></div>
          </div>
          {/*  menu image & btn */}
          <div className="mt-4">
            <div className="w-32 h-24 md:w-56 md:h-32 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="bg-slate-200 w-20 h-10 mt-2 rounded-lg  "></div>
          </div>
        </div>
        {/*  3rd card */}
        <div className="w-full h-44   px-4 flex justify-between ">
          {/*  menu details name , price , cuisine etc */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="h-6 w-40 md:w-56 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-slate-200 animate-pulse"></div>
            <div className="h-6 w-52 md:w-[32rem] bg-slate-200 animate-pulse"></div>
          </div>
          {/*  menu image & btn */}
          <div className="mt-4">
            <div className="w-32 h-24 md:w-56 md:h-32 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="bg-slate-200 w-20 h-10 mt-2 rounded-lg  "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerRestaurantDetails;
