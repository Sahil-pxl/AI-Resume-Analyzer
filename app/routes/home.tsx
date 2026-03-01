import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Smart Feedback for your Dream Job" },
  ];
}

export default function Home() {
  return <main 
  className="bg-[url('/images/bg-main.svg)] bg-cover">
    <Navbar/>

    
    <section className="main-section">
    <h1>Track Your Application & Resume Ratings</h1>
    <h2>Review Your Submissions and  check AI-powered feedback.</h2>
    </section>

    {resumes.length > 0 &&(
      <div className="resumes-section">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} /> 
    
  ))}
  </div>
  )}
  </main>
}
