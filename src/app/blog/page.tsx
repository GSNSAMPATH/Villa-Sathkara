import Image from "next/image";
import { client } from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { FaRegClock } from "react-icons/fa";
import { notFound } from "next/navigation";

// -------------------- Sanity Image Builder --------------------
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// -------------------- Blog Interface --------------------
interface Blog {
  slug: { current: string };
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  mainImage?: any;
}

// -------------------- Server Component --------------------
export default async function BlogPage() {
  // Fetch all blogs (latest first)
  const blogs: Blog[] = await client.fetch(`
    *[_type == "blog" && defined(slug.current)] | order(date desc){
      _id,
      title,
      excerpt,
      date,
      slug,
      mainImage
    }
  `);

  if (!blogs.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        No blogs found.
      </div>
    );
  }

  const hero = blogs[0];
  const recentPosts = blogs.slice(1, 7);

  return (
    <main className="bg-white min-h-screen px-4 sm:px-6 md:px-8">
      {/* -------------------- Hero Blog Section -------------------- */}
      <section className="mx-auto sm:px-6 md:px-8 lg:px-30 py-4 pb-14 md:pb-16 md:py-16 grid md:grid-cols-2 gap-10 items-center">
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

          <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[20px] text-[#1B3A57] mb-4">
            {hero.title}
          </h2>

          <p className="font-[Poppins] font-normal text-[14px] md:text-[18px] text-gray-600 leading-relaxed mb-8">
            {hero.excerpt}
          </p>

          <a
            href={`/blog/${hero.slug.current}`}
            className="border border-[#1B3A57] text-[#1B3A57] text-sm md:text-base w-full md:w-auto rounded-full px-6 py-2 font-medium hover:bg-[#1B3A57] hover:text-white transition"
          >
            Read More
          </a>
        </div>

        {hero.mainImage && (
          <div className="rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
            <Image
              src={urlFor(hero.mainImage).url()}
              alt={hero.title}
              width={800}
              height={500}
              className="object-cover md:w-full md:h-[400px]"
            />
          </div>
        )}
      </section>

      {/* -------------------- Recent Posts -------------------- */}
      <section className="sm:px-6 md:px-8 lg:px-30 pb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1B3A57] mb-10">
          Recent Posts
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {recentPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              {post.mainImage && (
                <div className="relative w-full h-[150px] md:h-[220px]">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover h-[20px] md:w-full md:h-full"
                  />
                </div>
              )}

              <div className=" py-1 md:py-4 px-4 md:p-5 h-[150px] md:h-[220px]">
                <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-[12px] md:text-[16px]  md:text-base">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-[10px] md:text-[14px] mb-3 leading-relaxed mobile-clamp">
                {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug.current}`}
                  className="text-[#1B3A57] font-semibold hover:underline text-[10px] md:text-[16px]"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
