import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <h1 className="text-5xl font-bold leading-tight">

            Advance Your Career

            <span className="text-cyan-400">

              {" "}in Cyber Security

            </span>

          </h1>

          <p className="text-gray-300 mt-6 text-lg">

            Learn from industry experts, earn globally recognized
            certifications and build practical cybersecurity skills.

          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600">

              Explore Certifications

            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">

              Contact Us

            </button>

          </div>

        </div>

        {/* Right */}

        <div>

          <img
            src={heroImage}
            alt="Cyber Security"
            className="w-full"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;