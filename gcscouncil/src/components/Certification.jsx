function Certification() {

  const courses = [
    {
      title: "Certified Ethical Hacker",
      duration: "6 Months",
      level: "Beginner"
    },
    {
      title: "Cloud Security",
      duration: "4 Months",
      level: "Intermediate"
    },
    {
      title: "Network Security",
      duration: "5 Months",
      level: "Advanced"
    },
    {
      title: "AI Security",
      duration: "3 Months",
      level: "Intermediate"
    }
  ];

  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Popular Certifications
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Choose from our industry-recognized certification programs.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
            >

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                alt="course"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-3">
                  Duration : {course.duration}
                </p>

                <p className="text-gray-500">
                  Level : {course.level}
                </p>

                <button className="mt-6 w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600">

                  Learn More

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certification;