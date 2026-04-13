import React from 'react';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { LuLinkedin } from 'react-icons/lu';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white mt-10'>
            
            <div className='container mx-auto px-4 py-10'>
                
                {/* Top Section */}
                <div className='space-y-5 text-center max-w-2xl mx-auto'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold'>
                        KeenKeeper
                    </h1>

                    <p className='text-gray-300'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <div className='flex flex-col items-center'>
                        <h2 className='font-semibold text-2xl'>Social Links:</h2>

                        <div className='flex gap-6 text-3xl mt-3'>
                            <CiFacebook className='cursor-pointer hover:scale-110 transition hover:text-blue-600' />
                            <FaInstagram className='cursor-pointer hover:scale-110 transition hover:text-pink-600' />
                            <CiTwitter className='cursor-pointer hover:scale-110 transition hover:text-black' />
                            <LuLinkedin className='cursor-pointer hover:scale-110 transition hover:text-amber-500' />
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className='border-t border-gray-500 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300'>
                    
                    <h2 className='text-center md:text-left'>
                        © 2026 KeenKeeper. All rights reserved.
                    </h2>

                    <ul className='flex gap-5'>
                        <li className='cursor-pointer hover:text-white transition hi'>Privacy Policy</li>
                        <li className='cursor-pointer hover:text-white transition'>Terms of Service</li>
                        <li className='cursor-pointer hover:text-white transition'>Cookies</li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Footer;