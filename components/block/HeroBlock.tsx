const HeroBlock = () => {
  return (
    <div className="flex  items-center  bg-fixed bg-no-repeat bg-cover flex-col text-center  min-h-screen align-middle backdrop-blur-2xl justify-around">
      <div className="">
        <h1 className=" overflow-hidden p-2 uppercase  leading-none bg-clip-text bg-fixed bg-no-repeat font-antonsc  max-md:text-[10vw] text-[8vw]">
          Click on
          <span className=" text-green-600">
            {" "}
            SIGNUP.
            <br />
          </span>
          Update YOur
          <span className=" text-red-600">
            {" "}
            Details, <br />
          </span>
          choose the
          <span className=" text-orange-600"> Theme </span>And
          <br />
          press publish
          <span className=" text-amber-600">
            {" "}
            PUBLISH.
            <br />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroBlock;
