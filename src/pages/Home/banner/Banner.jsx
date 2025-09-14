import bannerImg from "../../../assets/docimage/cover.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:` url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
      }}
    >
      <div className=" flex  gap-6 py-18 px-42">
        <div className="flex-1 space-y-4">
            <h1 className="text-white text-5xl font-bold">Your Best Medical Help Center</h1>
            <p className=" font-bold">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
            <button className="btn btn-secondary">All Services</button>
        </div>
        <div className="flex-1 p-5">
            <h1>image</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
