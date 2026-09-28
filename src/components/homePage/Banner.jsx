import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f0c29] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (গ্লাসমরফিজম লুক) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* বাম দিকের কন্টেন্ট (টেক্সট) */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">
                🚀 #1 Learning Platform
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Master Your Skills with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Interactive Courses
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Learn Web Development, Python, and more from industry experts. 
              Build real-world projects and advance your career today with our 
              modern learning app.
            </p>

            {/* CTA বাটনসমূহ */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.8)] hover:-translate-y-1 transition-all duration-300">
                Google Play
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2">
                App Store
              </button>
            </div>

            {/* স্ট্যাটস */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">200+</p>
                <p className="text-sm text-slate-400">Courses</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <p className="text-3xl font-bold text-white">50k+</p>
                <p className="text-sm text-slate-400">Students</p>
              </div>
            </div>
          </div>

          {/* ডান দিকের কন্টেন্ট (ইমেজ) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* ইমেজের পেছনের গ্লো */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-[3rem] blur-2xl opacity-20 transform scale-90"></div>
            
            {/* মোবাইল ফ্রেম মকআপ */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] animate-float">
              <div className="relative rounded-[2.5rem] border-[8px] border-[#1a1a2e] bg-[#1a1a2e] shadow-2xl overflow-hidden">
                {/* নচ (Notch) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1a1a2e] rounded-b-2xl z-20"></div>
                
                {/* আপনার ইমেজ */}
                <Image
                  src="/hero.png" // public ফোল্ডারে রাখা ইমেজের নাম
                  alt="Course App Interface"
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover rounded-[2rem]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}