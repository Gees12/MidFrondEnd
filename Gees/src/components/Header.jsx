export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">G</span>
          <span className="text-red-500">e</span>
          <span className="text-yellow-500">e</span>
          <span className="text-blue-600">s</span>
          <span className="text-blue-600">s</span>
        </h1>

        {/* Navigation Tabs */}
        <nav className="flex space-x-6 text-gray-700 text-sm">
          <a
            href="#skills"
            className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            Experience
          </a>
          <a
            href="#studies"
            className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            Studies
          </a>
          <a
            href="#books"
            className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            Books
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
