const Shimmer = () => {
  return (
    <>
      {/*  what on your mind */}
      <div className="w-screen md:w-[1100px] md:h-[312px] mx-auto  relative mt-24 ">
        <div className="h-6  w-10/12 mx-auto md:w-96 md:mx-0 bg-slate-200 animate-pulse rounded-lg mt-12"></div>
        {/*  rest cards */}
        <div className="py-12 flex gap-4 mx-2 md:mx-0  ">
          {/*  1st card */}
          <div>
            <div className="w-[180px] h-[125px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-32 mx-auto bg-slate-200 animate-pulse rounded-lg mt-4 "></div>
          </div>
          {/*  2nd card */}
          <div>
            <div className="w-[180px] h-[125px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-32 mx-auto bg-slate-200 animate-pulse rounded-lg mt-4 "></div>
          </div>
          {/*  3rd card */}
          <div className="hidden md:block">
            <div className="w-[180px] h-[125px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-32 mx-auto bg-slate-200 animate-pulse rounded-lg mt-4 "></div>
          </div>
          {/*  4th card */}
          <div className="hidden md:block">
            <div className="w-[180px] h-[125px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-32 mx-auto bg-slate-200 animate-pulse rounded-lg mt-4 "></div>
          </div>
          {/*  5th card */}
          <div className="hidden md:block">
            <div className="w-[180px] h-[125px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-32 mx-auto bg-slate-200 animate-pulse rounded-lg mt-4 "></div>
          </div>
          {/* 6th card */}
          <div className="hidden md:block">
            <div className="w-[180px] h-[125px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-32 mx-auto bg-slate-200 animate-pulse rounded-lg mt-4 "></div>
          </div>
        </div>
      </div>

      {/*  top restaurant */}
      <div className="w-screen h-screen  md:w-[1100px] md:h-[312px] mx-auto  relative -mt-2 mb-72 ">
        {/*  heading and search bar */}
        <div className="w-full flex justify-between">
          <div className="h-6 w-10/12 mx-auto md:w-[30rem] bg-slate-200 animate-pulse rounded-lg mt-12"></div>
          <div className="hidden md:flex h-6 w-96 border-4 border-slate-200 animate-pulse rounded-lg mt-12"></div>
        </div>
        {/*  rest cards */}
        <div className="py-12 flex flex-col md:flex-row items-center    gap-16 flex-wrap ">
          {/*  1st card */}
          <div>
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  2nd car */}
          <div>
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  3rd card */}
          <div>
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  4th car */}
          <div>
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  5th card */}
          <div className="hidden md:block">
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  6th car */}
          <div className="hidden md:block">
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  7th card */}
          <div className="hidden md:block">
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
          {/*  8th car */}
          <div className="hidden md:block">
            <div className="w-[220px] h-[130px] bg-slate-200 animate-pulse "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
            <div className="h-6 w-44 mx-auto bg-slate-200 animate-pulse rounded-lg mt-2 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shimmer;
