import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { client } from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

interface Blog {
  title: string;
  date: string;
  mainImage?: string;
  content: any[]; // PortableText value
}

// Sanity image builder
const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-6">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || "Blog Image"}
          width={800}
          height={500}
          className="rounded-xl shadow-md"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="font-[poppins] text-[24px] md:text-[32px] font-bold text-[#1B3A57] mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-[poppins] text-[20px] md:text-[28px] font-semibold text-[#234C6C] mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-[poppins] text-[18px] md:text-[24px] font-semibold text-[#2C5D80] mt-6 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-[poppins] text-[16px] md:text-[20px] font-semibold text-[#2C5D80] mt-6 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-[poppins] text-[14px] md:text-[18px] font-semibold text-[#2C5D80] mt-6 mb-2">
        {children}
      </h5>
    ),
    normal: ({ children }) => (
      <p className="font-[poppins] text-[12px] md:text-[16px] leading-relaxed text-justify text-gray-700 mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#1B3A57] pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#1B3A57]">{children}</strong>,
    em: ({ children }) => <em className="text-[#234C6C] italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1B3A57] underline hover:text-[#0D2234]"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog: Blog | null = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      date,
      mainImage,
      content
    }`,
    { slug: params.slug }
  );

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">
        Blog not found or unpublished.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-4 md:px-0 py-16">
        <h1 className="font-[poppins] text-[32px] md:text-[40px] font-semibold mb-3">
          {blog.title}
        </h1>
        <p className="text-gray-500 mb-6">
          {new Date(blog.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        {blog.mainImage && (
          <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={blog.content} components={portableTextComponents} />
        </div>
      </section>
    </main>
  );
}
