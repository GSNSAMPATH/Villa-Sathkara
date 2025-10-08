"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegClock } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanityClient";

// -------------------- Sanity Image Builder --------------------
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface Blog {
  slug: { current: string };
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  mainImage: any;
}

// -------------------- Main Page --------------------
export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "blog"] | order(date desc){
          _id,
          title,
          excerpt,
          date,
          slug,
          mainImage
        }`
      );
      setBlogs(data);
    };
    fetchData();
  }, []);

  if (!blogs.length) {
    return (
      <div className="text-center py-20 text-gray-500">Loading blogs...</div>
    );
  }

  const hero = blogs[0];
  const recentPosts = blogs.slice(1, 7);

  return (
    <main className="bg-white min-h-screen">
      {/* -------------------- Navigation -------------------- */}

      {/* -------------------- Hero Blog Section -------------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 text-gray-500 mb-3">
            <FaRegClock />
            <span className="text-sm">
              {new Date(hero.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[20px]  text-[#1B3A57] mb-4">
            {hero.title}
          </h2>

          <p className="font-[Poppins] font-normal text-[14px] md:text-[18px] text-gray-600 leading-relaxed mb-8">{hero.excerpt}</p>

          <button
            type="button"
            onClick={() => router.push(`/blog/${hero.slug.current}`)}
            className="border border-[#1B3A57] text-[#1B3A57] text-sm md:text-base w-full md:w-auto rounded-full px-6 py-2 font-medium hover:bg-[#1B3A57] hover:text-white transition"
          >
            Read More
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md oder-1 md:order-2">
          <Image
            src={urlFor(hero.mainImage).url()}
            alt={hero.title}
            width={800}
            height={500}
            className="object-cover md:w-full md:h-[400px]"
          />
        </div>
      </section>

      {/* -------------------- Recent Posts -------------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1B3A57] mb-10">
          Recent Posts
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <button
                  onClick={() => router.push(`/blog/${post.slug.current}`)}
                  className="text-[#1B3A57] font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
