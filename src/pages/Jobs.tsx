import { useState } from 'react';
import { Spotlight } from '../components/ui/spotlight';
import { HoverBorderGradient } from '../components/ui/hover-background-gradient';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

const mockJobs: Job[] = [
  {
    id: '314',
    title: 'Corporate Counsel',
    company: 'Nift',
    location: 'USA',
    salary: 'Competitive pay + Unlimited PTO',
    description: 'Nift is disrupting performance marketing, delivering millions of new customers to brands every month. We\'re actively looking for a Corporate Counsel to join our team...'
  },
  {
    id: '315',
    title: 'Full Stack Development Internship',
    company: 'Koders',
    location: 'Dehradun',
    salary: '₹ 25,000 lump sum + Incentives',
    description: 'Koders isn\'t your normal software development firm. Koders provides a platform where people can engage themselves in various tech-related activities, be it keeping themselves updated with the latest technology trends, learning a new topic, or maybe teaching one.'
  },
  {
    id: '316',
    title: 'Product Operations Manager',
    company: 'Decoded Limited',
    location: 'UK',
    salary: '£35,000 - £40,000',
    description: 'Manage operational processes, logistics, platforms and systems that underpin the delivery and development of our learning programmes...'
  },
  {
    id: '317',
    title: 'QA Engineer',
    company: 'bunny.net',
    location: 'UK',
    salary: 'Above-average industry salaries',
    description: 'Join our Backend team to ensure the quality and reliability of our globally distributed, high-performing video streaming and encoding platform...'
  },
  {
    id: '318',
    title: 'Senior Product Manager, Operate Tools',
    company: 'OpenZeppelin',
    location: 'USA',
    salary: 'Competitive',
    description: 'Define and execute a clear product roadmap for our Operate Tools that aligns with our vision to scale secure blockchain applications...'
  },
  {
    id: '319',
    title: 'Senior Android Engineer',
    company: 'Delivery Hero',
    location: 'Greece',
    salary: 'Competitive + Benefits',
    description: 'Join efood, the #1 delivery service in Greece, working with more than 21,000 stores in 100 cities...'
  },
  {
    id: '320',
    title: 'Freelance Senior In-App Content Editor',
    company: 'Paired',
    location: 'UK',
    salary: '£350 - £400 per day',
    description: 'Create engaging and research-backed relationship content for the Paired app that brings couples closer together...'
  },
  {
    id: '321',
    title: 'Head of Total Rewards',
    company: 'SeatGeek',
    location: 'USA',
    salary: '$167,000 - $283,000',
    description: 'Lead our Total Rewards program, owning the evaluation, improvement, and implementation of compensation, payroll, mobility, and benefits programming globally...'
  },
  {
    id: '322',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$120,000 - $180,000',
    description: 'Looking for an experienced frontend developer with React expertise to join our remote team building next-generation web applications...'
  },
  {
    id: '323',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    salary: '$130,000 - $190,000',
    description: 'Join our infrastructure team to build and maintain scalable cloud solutions using cutting-edge technologies...'
  },
  {
    id: '324',
    title: 'UI/UX Designer',
    company: 'DesignCo',
    location: 'Remote',
    salary: '$90,000 - $140,000',
    description: 'Create beautiful and intuitive user interfaces for our suite of products while maintaining a consistent design system...'
  },
  {
    id: '325',
    title: 'Data Scientist',
    company: 'DataWorks',
    location: 'Remote',
    salary: '$140,000 - $200,000',
    description: 'Apply machine learning and statistical analysis to solve complex business problems and drive data-driven decisions...'
  },
  {
    id: '326',
    title: 'Product Marketing Manager',
    company: 'MarketPro',
    location: 'Remote',
    salary: '$95,000 - $145,000',
    description: 'Drive product launches and marketing strategies for our B2B SaaS platform, working closely with product and sales teams...'
  },
  {
    id: '327',
    title: 'Backend Engineer',
    company: 'ServerPro',
    location: 'Remote',
    salary: '$130,000 - $190,000',
    description: 'Design and implement scalable backend services using Node.js and PostgreSQL to support our growing platform...'
  },
  {
    id: '328',
    title: 'Technical Writer',
    company: 'DocuTech',
    location: 'Remote',
    salary: '$85,000 - $120,000',
    description: 'Create clear and comprehensive technical documentation for our API and developer tools...'
  },
  {
    id: '329',
    title: 'Security Engineer',
    company: 'SecureNet',
    location: 'Remote',
    salary: '$140,000 - $200,000',
    description: 'Implement and maintain security measures to protect our infrastructure and customer data...'
  },
  {
    id: '330',
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'Remote',
    salary: '$110,000 - $170,000',
    description: 'Build and maintain cross-platform mobile applications using React Native and related technologies...'
  },
  {
    id: '331',
    title: 'Machine Learning Engineer',
    company: 'AITech',
    location: 'Remote',
    salary: '$150,000 - $220,000',
    description: 'Develop and deploy machine learning models to improve our product recommendations and user experience...'
  },
  {
    id: '332',
    title: 'Solutions Architect',
    company: 'ArchitectPro',
    location: 'Remote',
    salary: '$160,000 - $230,000',
    description: 'Design and oversee implementation of complex technical solutions for enterprise clients...'
  },
  {
    id: '333',
    title: 'Blockchain Developer',
    company: 'ChainTech',
    location: 'Remote',
    salary: '$140,000 - $210,000',
    description: 'Develop and maintain smart contracts and blockchain applications using Solidity and Web3 technologies...'
  }
];

const Jobs = () => {
  const [jobs] = useState<Job[]>(mockJobs);

  const handleAutoApply = (jobId: string) => {
    console.log(`Auto-applying to job ${jobId}`);
  };

  return (
    <main className="min-h-screen dark bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden p-4 md:p-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/50 to-neutral-900/0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-200 mb-8">Available Jobs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="rounded-2xl p-6 shadow-input bg-black/95 backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-neutral-200 mb-2">{job.title}</h3>
              <p className="text-neutral-400 mb-1">{job.company}</p>
              <p className="text-neutral-400 mb-1">{job.location}</p>
              <p className="text-neutral-400 mb-4">{job.salary}</p>
              <p className="text-neutral-300 text-sm mb-6 line-clamp-3">{job.description}</p>
              
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white px-6 py-2 w-full flex items-center justify-center space-x-2"
                onClick={() => handleAutoApply(job.id)}
              >
                <span>Auto Apply</span>
              </HoverBorderGradient>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Jobs;
