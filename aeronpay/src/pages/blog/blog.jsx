import { Clock, User, Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

// All blog posts data
export const allBlogPosts = [
  {
    id: 1,
    title: "How B2B Payment Solutions Are Transforming Indian Businesses",
    excerpt: "Discover how modern payment infrastructure is enabling SMEs and enterprises to scale faster with streamlined transactions.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Rajesh Kumar",
    date: "2 days ago",
    readTime: "8 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    slug: "b2b-payments-india",
  },
  {
    id: 2,
    title: "Security Best Practices for Payment Gateways in 2024",
    excerpt: "Learn about the latest security protocols and compliance standards that modern payment platforms must implement.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Priya Singh",
    date: "5 days ago",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    slug: "payment-security-2024",
  },
  {
    id: 3,
    title: "Understanding API Integration: A Developer's Guide",
    excerpt: "Step-by-step tutorial on integrating AeronPay APIs into your application with code examples.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Amit Patel",
    date: "1 week ago",
    readTime: "10 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    slug: "api-integration-guide",
  },
  {
    id: 4,
    title: "Case Study: How TechStartup Scaled to 10M Transactions",
    excerpt: "Real-world example of how a growing startup leveraged AeronPay to handle explosive growth.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Deepak Sharma",
    date: "2 weeks ago",
    readTime: "7 min read",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    slug: "techstartup-case-study",
  },
  {
    id: 5,
    title: "Payment Trends to Watch in 2025",
    excerpt: "Exploring emerging payment technologies and consumer behavior shifts that will shape the fintech landscape.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Neha Gupta",
    date: "3 weeks ago",
    readTime: "9 min read",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    slug: "payment-trends-2025",
  },
  {
    id: 6,
    title: "Building Trust in Digital Payments: A Merchant's Perspective",
    excerpt: "How merchants can build customer trust and improve payment success rates with modern payment solutions.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Vikram Singh",
    date: "1 month ago",
    readTime: "5 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    slug: "merchant-trust",
  },
];

const categories = ["All", "Business", "Technology", "Security", "Trends", "Case Study"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = allBlogPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2f7]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1300px] px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[48px] font-bold tracking-[-0.03em] text-[#182b46] md:text-[62px] lg:text-[70px]">
              AeronPay Blog
            </h1>
            <p className="mt-6 text-[16px] leading-8 text-[#647286]">
              Insights, trends, and best practices in fintech, payments, and
              business growth. Stay updated with the latest from AeronPay.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-12 mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 bg-white text-[15px] transition focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-[14px] font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1300px] px-5 lg:px-8">
          {filteredBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 flex flex-col h-full"
                  >
                    {/* Blog Image */}
                    <div className="relative h-[250px] overflow-hidden bg-gray-200">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold tracking-wider text-white shadow-lg">
                        {blog.category}
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <h3 className="text-[20px] font-semibold leading-tight text-[#182b46] transition-colors duration-300 group-hover:text-blue-600">
                        {blog.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-6 text-[#647286] flex-grow">
                        {blog.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-100 pt-4 text-[12px] text-[#8294a4]">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span className="font-medium">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{blog.date}</span>
                        </div>
                        <div className="text-blue-600 font-medium text-[11px]">{blog.readTime}</div>
                      </div>

                      {/* Read More Button */}
                      <button className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-blue-600 transition-all duration-300 hover:gap-3">
                        Read Full Article →
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Results Count */}
              <div className="mt-10 text-center text-[14px] text-[#8294a4]">
                Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 text-center">
              <p className="text-[16px] font-semibold text-gray-600">No articles found</p>
              <p className="mt-2 text-[14px] text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-[1300px] px-5 lg:px-8 text-center">
          <h2 className="text-[32px] font-bold text-[#182b46]">
            Stay Updated with AeronPay
          </h2>
          <p className="mt-4 text-[15px] text-[#647286]">
            Subscribe to our newsletter for the latest payments insights and updates
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl border-2 border-gray-200 px-6 py-3 text-[14px] focus:border-blue-500 focus:outline-none"
            />
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-[14px] font-semibold text-white hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
