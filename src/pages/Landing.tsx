import { HoverBorderGradient } from '../components/ui/hover-background-gradient';
import { Spotlight } from '../components/ui/spotlight'
import { FloatingNav } from '../components/ui/floating-navbar'
import { CompanyLogos } from '../components/ui/company-logos';
import '../index.css'
import { WobbleCard } from '../components/ui/wobble-card';
import { useNavigate } from 'react-router-dom';

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Features",
    link: "#features", 
  },
  {
    name: "How It Works",
    link: "#how-it-works",
  },
];

export const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <main className="min-h-screen dark bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" style={{height: '85px'}}>
            Find. Tailor. Apply.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Discover your dream remote job with AI-powered matching and automated applications. Let AccioJobs streamline your job search while you focus on what matters most.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full mt-8 mx-auto"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white px-8 py-3 flex items-center space-x-2"
            onClick={handleGetStarted}
          >
            <span>Get Started</span>
          </HoverBorderGradient>
          
          <div className="mt-20 text-center">
            <p className="text-neutral-400 text-sm mb-8">Trusted by teams at</p>
            <div className="w-full overflow-hidden">
              <CompanyLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="features" className="min-h-screen">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-9/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Access Thousands of Remote Jobs Daily
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Our AI-powered platform continuously scans and aggregates remote positions from top companies worldwide, ensuring you never miss your perfect opportunity.
                </p>
              </div>
              <img
                src="/image.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Apply with One Click
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Say goodbye to repetitive applications. Our intelligent automation handles the entire process, from form filling to submission, saving you countless hours.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  AI-Powered Resume Optimization
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Stand out from the crowd with tailored resumes. Our AI analyzes each job posting and customizes your resume to highlight relevant skills and experience, maximizing your chances of success.
                </p>
              </div>
              <img
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="min-h-screen relative">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-black/50 border border-white/[0.2] hover:border-white/[0.4] transition-all">
              <div className="text-4xl font-bold text-blue-500 mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Sign Up</h3>
              <p className="text-neutral-300 text-center">
                Create your profile and upload your base resume. Our AI will analyze your skills and experience.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-8 rounded-2xl bg-black/50 border border-white/[0.2] hover:border-white/[0.4] transition-all">
              <div className="text-4xl font-bold text-violet-500 mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">Browse Jobs</h3>
              <p className="text-neutral-300 text-center">
                Explore AI-curated remote positions that match your profile from multiple job boards.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-8 rounded-2xl bg-black/50 border border-white/[0.2] hover:border-white/[0.4] transition-all">
              <div className="text-4xl font-bold text-cyan-500 mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply Instantly</h3>
              <p className="text-neutral-300 text-center">
                One click to submit your tailored application. Our AI optimizes your resume for each position.
              </p>
            </div>
          </div>

          <HoverBorderGradient
            containerClassName="rounded-full mt-12"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white px-8 py-4 flex items-center space-x-2"
            onClick={handleGetStarted}
          >
            <span>Try It Now</span>
          </HoverBorderGradient>
        </div>
      </section>
    </main>
  );
}

export default Landing;
