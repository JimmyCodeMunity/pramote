import React from 'react';
import { logo } from '../assets';
import { footerLinks } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='flex sm:py-16 py-6 flex-col w-full '>



            <div class="mx-auto w-full max-w-screen-xl bg-blue-700">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-sm font-bold  uppercase text-white">Pramote Consultants</h2>
                        <img src={logo} className="object-fit h-32 w-32" alt="" />
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Main Pages</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <Link to="/blog" class="hover:underline">Blog</Link>
                            </li>
                            
                            <li class="mb-4">
                                <Link href="/about" class="hover:underline">About Us</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="/jobs" class="hover:underline">Job Board</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>

                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Instagram</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Linkedin</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>



        </section>
    );
}

export default Footer;
