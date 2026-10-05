import { ArrowRight, Clock, User } from "lucide-react";

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "How B2B Payment Solutions Are Transforming Indian Businesses",
    excerpt: "Discover how modern payment infrastructure is enabling SMEs and enterprises to scale faster with streamlined transactions Discover how modern payment infrastructure is enabling SMEs and enterprises to scale faster with streamlined transactions.",
    author: "Rajesh Kumar",
    date: "2 days ago",
    readTime: "8 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
    slug: "b2b-payments-india",
  },
  {
    id: 2,
    title: "Security Best Practices for Payment Gateways in 2024",
    excerpt: "Learn about the latest security protocols and compliance standards that modern payment platforms must implement Discover how modern payment infrastructure is enabling SMEs and enterprises to scale faster with streamlined transactions.",
    author: "Priya Singh",
    date: "5 days ago",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop",
    slug: "payment-security-2024",
  },
];

export default function Blogs() {
  const recentBlogs = blogPosts.slice(0, 2);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#040b1f] py-24 lg:py-32">
      {/* Gradient Overlays - Similar to Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#6366f1]/8 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#a855f7]/6 blur-3xl" />
      </div>

      {/* Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_90%)]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a3d70] bg-[#0d1735]/90 px-5 py-2 shadow-[0_0_25px_rgba(99,102,241,0.15)] backdrop-blur-sm">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-[#6366f1] opacity-60 animate-pulse"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#6366f1]"></span>
            </span>
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#9ec3ff] uppercase">
              Latest Insights
            </span>
          </div>

          <h2 className="mt-6 text-[42px] font-bold leading-tight tracking-[-0.03em] text-[#dbeafe] md:text-[52px] lg:text-[62px]">
            <span className="block mb-2">AeronPay</span>
            <span className="block bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-7 text-[#9aaad1]">
            Stay updated with the latest trends, best practices, and insights in
            fintech, payments, and business growth.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="space-y-20">
          {recentBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`group relative flex flex-col gap-10 items-center lg:gap-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Container */}
              <div className="w-full flex-shrink-0 lg:w-[42%]">
                <div className="relative h-[240px] overflow-hidden rounded-2xl border border-[#2a3d70] shadow-[0_20px_60px_rgba(99,102,241,0.2)] md:h-[280px] lg:h-[300px]">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040b1f] via-transparent to-transparent z-10" />
                  
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute right-4 top-4 z-20 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-4 py-2 text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    {blog.category}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#6366f1]/20 to-[#8b5cf6]/20 z-10" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-[52%]">
                <h3 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#dbeafe] md:text-[36px] transition-all duration-300 group-hover:text-[#60a5fa]">
                  {blog.title}
                </h3>

                <p className="mt-6 text-[17px] leading-7 text-[#9aaad1]">
                  {blog.excerpt}
                </p>

                {/* Meta Information */}
                <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-[#6b7c9f]">
                  <div className="flex items-center gap-2">
                  
                   
                  </div>
                  <div className="flex items-center gap-2">
                    
                
                  </div>
                 
                </div>

                {/* CTA Button */}
                <button className="group/btn mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] hover:gap-4 hover:scale-105">
                  Read Full Article
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-xl border-2 border-[#6366f1] bg-[#0d1735]/50 px-8 py-4 text-[15px] font-semibold text-[#60a5fa] shadow-[0_0_25px_rgba(99,102,241,0.2)] backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)]">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
