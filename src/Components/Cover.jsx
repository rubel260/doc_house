import cover from '../assets/docimage/cover.png'

const Cover = () => {
  return (
    <div
      className="hero min-h-[350px]"
      style={{
        backgroundImage:
          `url(${cover})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Medicine&Service</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary btn-outline text-xl font-bold border-1 border-b-3">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
