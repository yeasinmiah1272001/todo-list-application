import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaPinterest, FaDribbble } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className=" text-hovarColor text-center justify-between items-center">
        <div className="container mx-auto text-center">
          <h1 className="mb-2 text-xl text-hovarColor"><Link href={"/todopages"} >Add Todo Page</Link></h1>
          <p className="mb-2">© 2024 Yeasin Miah. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="hover:text-blue-500 duration-500"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="hover:text-blue-400 duration-500"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="hover:text-pink-500 duration-500"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="hover:text-blue-600 duration-500"><FaLinkedin size={24} /></a>
            <a href="https://github.com" className="hover:text-gray-500 duration-500"><FaGithub size={24} /></a>
            <a href="https://youtube.com" className="hover:text-red-600 duration-500"><FaYoutube size={24} /></a>
            <a href="https://pinterest.com" className="hover:text-red-400 duration-500"><FaPinterest size={24} /></a>
            <a href="https://dribbble.com" className="hover:text-pink-400 duration-500"><FaDribbble size={24} /></a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;