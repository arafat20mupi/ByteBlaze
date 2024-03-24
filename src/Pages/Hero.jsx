import { Link } from "react-router-dom";
import wave from "../assets/wave.svg"

const Hero = () => {
    return (
        <div className="relative min-h-[calc(100vh-116px)] flex flex-col text-center items-center justify-center">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">Welcome to {''}<span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span></h1>
                        <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                        <div className="flex gap-2 justify-center">
                            <Link to={'/blogs'} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Read Blogs</span>
                                <span className="relative invisible">Read Blogs</span>
                            </Link>
                            <Link to={'/bookmarks'} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Bookmarks</span>
                                <span className="relative invisible">Bookmarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Hero;