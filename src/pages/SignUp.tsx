"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import { useNavigate } from 'react-router-dom';
import { Spotlight } from "../components/ui/spotlight";

const jobCategories = [
    "Software Development",
    "DevOps / Sysadmin", 
    "Sales / Business",
    "Customer Service",
    "Marketing",
    "Design",
    "Finance / Legal",
    "Data Analysis",
    "Product",
    "Project Management",
    "QA",
    "Writing",
    "Human Resources",
    "Back-End Programming",
    "Front-End Programming",
    "Full-Stack Programming",
    "Customer Support",
    "Management and Finance",
    "Sales and Marketing",
    "All Other Remote",
    "All others"
  ];

interface SignUpFormData {
  fullName: string;
  email: string;
  dateOfBirth: string;
  gender?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  currentJobTitle?: string;
  resume?: File | null;
  linkedInUrl?: string;
  coverLetter?: File | null;
  profilePicture?: File | null;
  jobTypePreferences?: string;
  availabilityStart?: string;
  willingToRelocate: boolean;
  education: Education[];
  workExperience: WorkExperience[];
  skills: string[];
  references: string[];
  intrestedCategories: string[];
}

interface Education {
  degree: string;
  fieldOfStudy?: string;
  institutionName?: string;
  startDate?: string;
  endDate?: string;
}

interface WorkExperience {
  companyName: string;
  position: string;
  startDate: string;
  endDate?: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const validateFileSize = (file: File | null) => {
  if (!file) return true;
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`File size cannot exceed ${MAX_FILE_SIZE / 1024 / 1024}MB`);
  }
  return true;
};

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    dateOfBirth: '',
    willingToRelocate: false,
    intrestedCategories: [],
    education: [],
    workExperience: [],
    skills: [],
    references: []
  });
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate file sizes
      if (formData.resume) validateFileSize(formData.resume);
      if (formData.coverLetter) validateFileSize(formData.coverLetter);
      if (formData.profilePicture) validateFileSize(formData.profilePicture);

      console.log("Form submitted:", formData);
      navigate('/landing');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="min-h-screen dark bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex items-center justify-center p-4 md:p-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/50 to-neutral-900/0" />
      
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black/95 backdrop-blur-3xl relative z-10 border border-white/10">
        <h2 className="font-bold text-xl text-neutral-200">
          Create Your Account
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2">
          Join us to find your perfect remote job match
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="fullName" className="text-white">Full Name</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="John Doe"
                  type="text"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  type="email"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-8">
                <Label htmlFor="dateOfBirth" className="text-white">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  type="date"
                />
              </LabelInputContainer>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              >
                Next &rarr;
                <BottomGradient />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-6">
                <Label className="text-white mb-4 block">Select Job Categories of Interest</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto scrollbar-none">
                  {jobCategories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={category}
                        checked={formData.intrestedCategories.includes(category)}
                        onChange={(e) => {
                          const updatedCategories = e.target.checked
                            ? [...formData.intrestedCategories, category]
                            : formData.intrestedCategories.filter(c => c !== category);
                          setFormData({...formData, intrestedCategories: updatedCategories});
                        }}
                        className="rounded border-neutral-800"
                      />
                      <Label htmlFor={category} className="text-white">{category}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gradient-to-br relative group/btn from-zinc-800 to-zinc-900 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                >
                  Back
                  <BottomGradient />
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                >
                  Next &rarr;
                  <BottomGradient />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phoneNumber" className="text-white">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber || ''}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="currentJobTitle" className="text-white">Current Job Title</Label>
                <Input
                  id="currentJobTitle"
                  value={formData.currentJobTitle || ''}
                  onChange={(e) => setFormData({...formData, currentJobTitle: e.target.value})}
                  placeholder="Software Engineer"
                  type="text"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="linkedInUrl" className="text-white">LinkedIn URL</Label>
                <Input
                  id="linkedInUrl"
                  value={formData.linkedInUrl || ''}
                  onChange={(e) => setFormData({...formData, linkedInUrl: e.target.value})}
                  placeholder="https://linkedin.com/in/username"
                  type="url"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="resume" className="text-white">Resume (PDF)</Label>
                <input
                  id="resume"
                  onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
                  type="file"
                  accept=".pdf"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 file:transition-colors"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="coverLetter" className="text-white">Cover Letter (PDF)</Label>
                <input
                  id="coverLetter"
                  onChange={(e) => setFormData({...formData, coverLetter: e.target.files?.[0] || null})}
                  type="file" 
                  accept=".pdf"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 file:transition-colors"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="profilePicture" className="text-white">Profile Picture</Label>
                <input
                  id="profilePicture"
                  onChange={(e) => setFormData({...formData, profilePicture: e.target.files?.[0] || null})}
                  type="file"
                  accept="image/*"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 file:transition-colors"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="jobType" className="text-white">Job Type Preferences</Label>
                <select
                  id="jobType"
                  value={formData.jobTypePreferences || ''}
                  onChange={(e) => setFormData({...formData, jobTypePreferences: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-neutral-800 bg-zinc-900 px-3 py-2 text-sm text-white"
                >
                  <option value="">Select preference</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </LabelInputContainer>

              <LabelInputContainer className="mb-8">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="relocate"
                    checked={formData.willingToRelocate}
                    onChange={(e) => setFormData({...formData, willingToRelocate: e.target.checked})}
                    className="rounded border-neutral-800"
                  />
                  <Label htmlFor="relocate" className="text-white">Willing to Relocate</Label>
                </div>
              </LabelInputContainer>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-br relative group/btn from-zinc-800 to-zinc-900 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                >
                  Back
                  <BottomGradient />
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                >
                  Create Account &rarr;
                  <BottomGradient />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </main>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignUp;