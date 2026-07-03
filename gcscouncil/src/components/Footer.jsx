function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            GCS Council
          </h2>

          <p className="mt-4 text-gray-400">
            Empowering professionals with world-class cybersecurity
            certifications and training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Courses</li>
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Certifications
          </h3>

          <ul className="mt-4 space-y-2">
            <li>Ethical Hacking</li>
            <li>Cloud Security</li>
            <li>Network Security</li>
            <li>AI Security</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <p className="mt-4">
            📧 info@gcscouncil.com
          </p>

          <p className="mt-2">
            📞 +91 9876543210
          </p>

          <p className="mt-2">
            🌍 India
          </p>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-gray-500">
        © 2026 GCS Council. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;