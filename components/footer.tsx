import Link from "next/link";
import Image from 'next/image';

import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
           <p className="text-gray-800 mb-6 max-w-md">
              Join our expert-led Integrative Oncology Series to advance your
              practice and support cancer survivors.
            </p>  
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://nfh.ca"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/nfh.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Nutritional-Fundamentals-for-Health-Inc-935117029962456/"
                    target="_blank"
                    className="text-gray-800 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nfh-inc"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/nfh.supplements/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              
            
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://vitazan.com"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/vitazan.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/vitazanpro/"
                    target="_blank"
                    className="text-gray-800 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vitazan-professional-36139514a/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/vitazanprofessional/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
             
           
          </div>

          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#webinars"
                  className="text-gray-800 hover:text-blue-400 transition-colors"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-800 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@vitazan.com"
                  className="hover:text-blue-400  transition-colors"
                >
                  info@vitazan.com
                </a>
              </li>
              <li className="flex items-center text-gray-800">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@vitazan.com"
                  className="hover:text-blue-400  transition-colors"
                >
                  info@nfh.com
                </a>
              </li>
              <li className="flex items-center text-gray-800">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href="tel:+18005000733"
                  className="hover:text-blue-400  transition-colors"
                >
                  1-888-863-9274
                </a>
              </li>
              {/* <li className="flex items-center text-gray-800"></li>
              <li>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://nfh.ca"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="nfh.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Nutritional-Fundamentals-for-Health-Inc-935117029962456/"
                    target="_blank"
                    className="text-gray-800 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nfh-inc"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/nfh.supplements/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://vitazan.com"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="vitazan.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/vitazanpro/"
                    target="_blank"
                    className="text-gray-800 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vitazan-professional-36139514a/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/vitazanprofessional/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} New Roots Herbal. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
