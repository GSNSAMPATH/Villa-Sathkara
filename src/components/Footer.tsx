import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1B3A57] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">Villa Sathkara</h2>
          <p className="mt-4  leading-6 text-gray-200">
            Bodhi Mawatha,<br />
            Unakuruwa,<br />
            Tangalle,<br />
            82200, Sri Lanka
          </p>

          {/* Social Links */}
          <div className="hidden bottom-0 md:flex gap-4 mt-6">
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-x"></i>
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="md:text-center absolute md:relative md:flex justify-center w-[50%] md:w-[110%]  md:mx-auto mt-55 md:mt-20 left-2/5 md:left-0 ">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1759466793/Layer_1_rd0euk.png" // 🔹 place your logo inside public/
            alt="Villa Logo"
            width={460}
            height={460}
            className="opacity-50 "
          />
        </div>

        {/* Right Section */}
        <div className="md:text-right">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/amenities" className="hover:text-blue-400">
                Amenities
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>Copyright © {new Date().getFullYear()} Villa Sathkara</p>
        <p className="mt-2 md:mt-0">
          Built with <span className="text-white"><a href="http://www.thedigitalescapes.com">Digital Escapes</a></span> in Sri Lanka
        </p>
      </div>

        <div className=" md:hidden flex gap-4 mt-3 justify-center w-full">
        <div className="flex gap-4 text-[8px]">
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <i className="fab fa-x"></i>
            </Link>
            </div>
          </div>

    </footer>
  );
};

export default Footer;
