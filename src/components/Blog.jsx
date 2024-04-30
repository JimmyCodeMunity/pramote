import React, { useEffect, useState } from 'react';
import { blogs, faqs } from '../constants';
import { Link } from 'react-router-dom'
import { banner2 } from '../assets';
import { getBlogs } from '../api';
import { urlFor } from '../pages/sanity'


const MAX_LENGTH = 80; // Maximum length of the sentences
const MAX_LENGTHTITLE = 20; // Maximum length of the sentences


const BlogItem = ({ blog }) => {
    const [expanded, setExpanded] = useState(false);
    const truncatedContent = blog.body.slice(0, MAX_LENGTH);
    const content = expanded ? blog.body : truncatedContent + (blog.body.length > MAX_LENGTH ? "..." : "");
    const truncatedTitle = blog.title.slice(0, MAX_LENGTHTITLE);
    const title = expanded ? blog.title : truncatedTitle + (blog.title.length > MAX_LENGTHTITLE ? "..." : "");

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    console.log("body", blog.body)


    //convert time
    const formatDate = (time) => {
        const date = new Date(time);
        return date.toLocaleString();
    };






    return (
        <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img src={blog.imageUri} />
            </a>

            <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">{formatDate(blog.time)}</span>

                <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="transition duration-100 hover:text-blue-500 active:text-blue-600">{title}</a>
                </h2>

                <p class="text-gray-500">{content}</p>

                <div>
                    <a href={`/readblog/${blog.id}`} class="font-semibold text-blue-500 transition duration-100 hover:text-blue-600 active:text-blue-700">Read more</a>
                </div>
            </div>
        </article>
    );
};

const Blog = () => {
    const [myblogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogData = await getBlogs();
                setBlogs(blogData);
                // console.log('Blogs:', blogData);
                return;
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const blogsData = myblogs.map((myblogs) => ({
        title: myblogs.title, // Add title to data for rendering in the carousel
        imageUri: urlFor(myblogs.mainImage).url(),
        body: myblogs.body,
        id: myblogs._id,
        time: myblogs._updatedAt
    }));
    return (
        <section class="bg-white py-6 sm:py-8 lg:py-12 ">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>

                    <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Our most recent posts..</p>
                </div>
                <div className="w-full shadow-lg shadow-gray-500">

                </div>

                <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    {blogsData.map((blog) => (
                        <BlogItem blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Blog;