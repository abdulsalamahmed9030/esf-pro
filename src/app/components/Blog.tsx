'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Top 5 Electrical Safety Tips for Homeowners',
    description:
      'Avoid common electrical hazards with these expert-approved tips that ensure your home remains safe and efficient.',
    buttonText: 'Read More',
    image: '/blog1.jpg',
    link: '/blogs/electrical-safety-tips-for-homeowners', // internal page route
  },
  {
    title: 'Fire Alarm Systems: What You Should Know',
    description:
      'Understand the different types of fire alarms, how they work, and why your building needs a professionally installed system.',
    buttonText: 'Read More',
    image: '/blog1.jpg',
    link: '/blogs/fire-alarm-systems-what-you-should-know', // internal page route
  },
  {
    title: 'How Security Cameras Deter Crime',
    description:
      'Explore how the strategic use of modern CCTV systems helps reduce criminal activity and improve safety in residential areas.',
    buttonText: 'Read More',
    image: '/blog1.jpg',
    link: '/blogs/how-security-cameras-deter-crime',
  },
];

export default function Blog() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-dosis text-3xl font-semibold mb-4">Our Latest Blog Posts</h2>
        <p className="font-dosis text-lg text-gray-300 mb-12">
          Stay updated with our recent insights and safety tips
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#111]">
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={post.image}
                  alt="Blog image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </div>
              <div className="p-6">
                <h3 className="font-dosis font-semibold text-2xl mb-2">{post.title}</h3>
                <p className="font-dosis text-md text-gray-300 mb-4">{post.description}</p>
                <Link href={post.link}>
                  <button className="font-dosis border border-white px-4 py-2 mt-4 text-sm hover:bg-white hover:text-black transition">
                    {post.buttonText.toUpperCase()}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
