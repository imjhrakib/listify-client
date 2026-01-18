import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1B3E75] text-[#D2C1B6] border-t border-[#234C6A]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-[#D2C1B6]">Listify</h3>
          <p className="text-sm leading-relaxed">
            Listify is a simple project to showcase items. Built with Next.js,
            Tailwind CSS, and Express API.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#D2C1B6]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="hover:text-white transition-colors duration-200"
              >
                Items
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-white transition-colors duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#D2C1B6]">Contact</h4>
          <p className="text-sm mb-1">email@example.com</p>
          <p className="text-sm mb-3">+880 1624 639 841</p>
          <div className="flex gap-4">
            <a
              href="https://x.com/imjhrakib"
              target="_blank"
              className="text-[#D2C1B6] hover:text-[#456882] transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/imjhrakib/"
              target="_blank"
              className="text-[#D2C1B6] hover:text-[#456882] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/imjhrakib"
              target="_blank"
              className="text-[#D2C1B6] hover:text-[#456882] transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#234C6A] text-center py-4 text-sm text-[#D2C1B6]">
        © 2026 Listify. All rights reserved.
      </div>
    </footer>
  );
}
