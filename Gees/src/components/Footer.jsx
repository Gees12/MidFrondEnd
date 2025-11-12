export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Geraldo. All rights reserved.
        </p>

        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <a
            href="https://www.instagram.com/_geesss?igsh=Zm1lcXhwZGVyZ2pn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            Instagram
          </a>

          <a
            href="mailto:s22310188@student.unklab.ac.id"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
