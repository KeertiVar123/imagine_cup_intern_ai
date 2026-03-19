// import { FileCheck, Briefcase, Route, Target, Award, Download, Home, TrendingUp, AlertCircle } from 'lucide-react';

// interface Internship {
//   id: number;
//   title: string;
//   company: string;
//   mode: string;
//   deadline: string;
//   duration: string;
//   location: string;
//   stipend: string;
//   category: string;
//   description: string;
//   applyUrl: string;
//   isNew: boolean;
//   postedDate: string;
//   icon: any;
//   domains: string[];
//   authenticityScore: number;
// }

// interface StudentDashboardProps {
//   matchedInternships: Internship[];
//   selectedDomains: string[];
//   onNavigate: (page: string) => void;
// }

// export const StudentDashboard = ({ matchedInternships, selectedDomains, onNavigate }: StudentDashboardProps) => {
  
//   // Calculate skill gaps
//   const allRequiredSkills = [
//     'Python Programming',
//     'JavaScript',
//     'Data Structures & Algorithms',
//     'Machine Learning',
//     'Web Development',
//     'SQL & Databases',
//     'Git & Version Control',
//     'Cloud Computing',
//     'Problem Solving',
//     'Communication Skills'
//   ];

//   const currentSkills = ['Python Programming', 'Data Structures & Algorithms', 'Git & Version Control'];
//   const skillGaps = allRequiredSkills.filter(skill => !currentSkills.includes(skill));

//   return (
//     <div className="min-h-screen px-4 py-20 relative">
//       {/* Background Image with Blur */}
//       <div className="fixed inset-0 z-0">
//         <img
//           src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
//           alt="Background"
//           className="w-full h-full object-cover blur-sm"
//         />
//         <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-8">
//           <h1 className="text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
//             Student Dashboard
//           </h1>
//           <p className="text-gray-700 text-center text-lg mb-4">Welcome back! Here's your personalized overview</p>
//           <button
//             onClick={() => window.history.back()}
//             className="px-6 py-3 bg-white/80 backdrop-blur-md text-gray-800 rounded-xl border border-gray-200 shadow-sm hover:bg-white hover:shadow-md transition-all font-medium flex items-center gap-2"
//           >
//             <Home className="size-5" />
//             <span>Back</span>
//           </button>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
//             <div className="flex items-center justify-between mb-3">
//               <Briefcase className="size-8" />
//               <TrendingUp className="size-6 opacity-70" />
//             </div>
//             <p className="text-3xl font-bold mb-1">{matchedInternships.length}</p>
//             <p className="text-blue-100 text-sm">Matched Internships</p>
//           </div>

//           <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
//             <div className="flex items-center justify-between mb-3">
//               <Target className="size-8" />
//               <TrendingUp className="size-6 opacity-70" />
//             </div>
//             <p className="text-3xl font-bold mb-1">{selectedDomains.length}</p>
//             <p className="text-purple-100 text-sm">Selected Domains</p>
//           </div>

//           <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
//             <div className="flex items-center justify-between mb-3">
//               <Award className="size-8" />
//               <TrendingUp className="size-6 opacity-70" />
//             </div>
//             <p className="text-3xl font-bold mb-1">{currentSkills.length}</p>
//             <p className="text-green-100 text-sm">Skills Acquired</p>
//           </div>

//           <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-xl">
//             <div className="flex items-center justify-between mb-3">
//               <AlertCircle className="size-8" />
//               <TrendingUp className="size-6 opacity-70" />
//             </div>
//             <p className="text-3xl font-bold mb-1">{skillGaps.length}</p>
//             <p className="text-orange-100 text-sm">Skill Gaps</p>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Resume Insights */}
//           <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 z-0 opacity-10">
//               <img
//                 src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
//                 alt="Background"
//                 className="w-full h-full object-cover blur-sm"
//               />
//             </div>
//             <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="size-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
//                 <FileCheck className="size-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">Resume Insights</h2>
//                 <p className="text-sm text-gray-600">AI-powered analysis</p>
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
//                 <div className="flex items-start gap-3">
//                   <div className="size-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-bold text-sm">✓</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-green-900 mb-1">Strong Points</p>
//                     <ul className="text-sm text-green-800 space-y-1">
//                       <li>• Well-structured education section</li>
//                       <li>• Relevant technical skills highlighted</li>
//                       <li>• Clean and professional formatting</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
//                 <div className="flex items-start gap-3">
//                   <div className="size-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-bold text-sm">!</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-orange-900 mb-1">Areas for Improvement</p>
//                     <ul className="text-sm text-orange-800 space-y-1">
//                       <li>• Add more quantified achievements</li>
//                       <li>• Include relevant project links</li>
//                       <li>• Expand work experience section</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-200">
//                 <p className="text-sm font-semibold text-indigo-900 mb-2">ATS Compatibility Score</p>
//                 <div className="flex items-center gap-3">
//                   <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
//                     <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full" style={{ width: '85%' }}></div>
//                   </div>
//                   <span className="text-2xl font-bold text-indigo-600">85%</span>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>

//           {/* Skill Gap Analysis */}
//           <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 z-0 opacity-10">
//               <img
//                 src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
//                 alt="Background"
//                 className="w-full h-full object-cover blur-sm"
//               />
//             </div>
//             <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="size-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
//                 <Target className="size-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">Skill Gap Analysis</h2>
//                 <p className="text-sm text-gray-600">Skills to learn</p>
//               </div>
//             </div>

//             <div className="space-y-3 mb-6">
//               <p className="text-sm text-gray-600 mb-4">Based on your matched internships, consider learning:</p>
//               {skillGaps.slice(0, 5).map((skill, index) => (
//                 <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border border-orange-100">
//                   <span className="font-medium text-gray-900 text-sm">{skill}</span>
//                   <span className="text-xs px-3 py-1 bg-orange-500 text-white rounded-full font-semibold">
//                     High Priority
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all font-medium">
//               View Learning Resources
//             </button>
//             </div>
//           </div>

//           {/* Career Roadmap Quick Access */}
//           <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 z-0 opacity-10">
//               <img
//                 src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
//                 alt="Background"
//                 className="w-full h-full object-cover blur-sm"
//               />
//             </div>
//             <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="size-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
//                 <Route className="size-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">Career Roadmap</h2>
//                 <p className="text-sm text-gray-600">Your personalized path</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
//                 <h3 className="font-semibold text-purple-900 mb-2">Selected Domains:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedDomains.map((domain, index) => (
//                     <span key={index} className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-medium">
//                       {domain}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm">
//                   <div className="size-2 bg-green-500 rounded-full"></div>
//                   <span className="text-gray-700">Foundation Skills (Weeks 1-4)</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <div className="size-2 bg-blue-500 rounded-full"></div>
//                   <span className="text-gray-700">Intermediate Level (Weeks 5-8)</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <div className="size-2 bg-purple-500 rounded-full"></div>
//                   <span className="text-gray-700">Advanced Projects (Weeks 9-12)</span>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button 
//                   onClick={() => onNavigate('career-roadmap')}
//                   className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
//                 >
//                   View Full Roadmap
//                 </button>
//                 <button className="px-4 py-3 bg-white border-2 border-purple-300 text-purple-600 rounded-xl hover:bg-purple-50 transition-all">
//                   <Download className="size-5" />
//                 </button>
//               </div>
//             </div>
//             </div>
//           </div>

//           {/* Skill Assessment */}
//           <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 z-0 opacity-10">
//               <img
//                 src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
//                 alt="Background"
//                 className="w-full h-full object-cover blur-sm"
//               />
//             </div>
//             <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="size-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
//                 <Award className="size-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">Skill Assessment</h2>
//                 <p className="text-sm text-gray-600">Test your knowledge</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
//                 <p className="text-sm text-green-900 mb-3">Your Current Skills:</p>
//                 <div className="space-y-2">
//                   {currentSkills.map((skill, index) => (
//                     <div key={index} className="flex items-center justify-between">
//                       <span className="text-sm font-medium text-gray-900">{skill}</span>
//                       <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-semibold">
//                         Verified
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
//                 <p className="text-sm font-semibold text-blue-900 mb-2">Ready to add more skills?</p>
//                 <p className="text-xs text-blue-800">Take skill assessments to verify your expertise and stand out to employers</p>
//               </div>

//               <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all font-medium">
//                 Take Skill Assessment
//               </button>
//             </div>
//             </div>
//           </div>
//         </div>

//         {/* Matched Internships Section */}
//         <div className="relative mt-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
//           <div className="absolute inset-0 z-0 opacity-10">
//             <img
//               src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
//               alt="Background"
//               className="w-full h-full object-cover blur-sm"
//             />
//           </div>
//           <div className="relative z-10">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <div className="size-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
//                 <Briefcase className="size-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">Matched Internships</h2>
//                 <p className="text-sm text-gray-600">{matchedInternships.length} opportunities waiting for you</p>
//               </div>
//             </div>
//             <button
//               onClick={() => onNavigate('matched-internships')}
//               className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
//             >
//               View All Opportunities
//             </button>
//           </div>

//           {matchedInternships.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {matchedInternships.slice(0, 3).map((internship) => (
//                 <div key={internship.id} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-200">
//                   <h3 className="font-semibold text-gray-900 mb-1">{internship.title}</h3>
//                   <p className="text-sm text-gray-600 mb-3">{internship.company}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs px-2 py-1 bg-indigo-500 text-white rounded-full font-medium">
//                       {internship.stipend}
//                     </span>
//                     <span className="text-xs text-gray-500">{internship.duration}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-8">
//               <p className="text-gray-600">No matched internships yet. Complete your profile to get personalized recommendations!</p>
//             </div>
//           )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState, useEffect } from 'react';
import {
  FileCheck, Briefcase, Route, Target, Award, Download, Home,
  TrendingUp, AlertCircle, ChevronRight, Star, Zap, BookOpen,
  Code, Database, Globe, Shield, Cloud, Cpu, BarChart3,
  CheckCircle2, Clock, MapPin, IndianRupee, ExternalLink,
  Sparkles, Brain, Rocket, Trophy, ArrowUp, Play,
  ChevronDown, ChevronUp, Bell, User, Search, Activity,
  FileText, Layers, GitBranch, Terminal, Wifi, Lock
} from 'lucide-react';

interface Internship {
  id: number;
  title: string;
  company: string;
  mode: string;
  deadline: string;
  duration: string;
  location: string;
  stipend: string;
  category: string;
  description: string;
  applyUrl: string;
  isNew: boolean;
  postedDate: string;
  icon: any;
  domains: string[];
  authenticityScore: number;
}

interface StudentDashboardProps {
  matchedInternships: Internship[];
  selectedDomains: string[];
  onNavigate: (page: string) => void;
}

const skillsData = [
  { name: 'Python', level: 85, color: '#00d4ff', icon: Terminal },
  { name: 'JavaScript', level: 60, color: '#ffd700', icon: Code },
  { name: 'DSA', level: 75, color: '#a855f7', icon: GitBranch },
  { name: 'Machine Learning', level: 40, color: '#ff6b9d', icon: Brain },
  { name: 'SQL', level: 65, color: '#00ffaa', icon: Database },
  { name: 'Cloud', level: 30, color: '#ff9500', icon: Cloud },
  { name: 'Git', level: 90, color: '#4ade80', icon: GitBranch },
  { name: 'Cybersecurity', level: 25, color: '#f43f5e', icon: Shield },
];

const resumeSections = [
  { name: 'Education', score: 92, color: '#00d4ff' },
  { name: 'Skills', score: 78, color: '#a855f7' },
  { name: 'Projects', score: 65, color: '#ffd700' },
  { name: 'Experience', score: 55, color: '#ff6b9d' },
  { name: 'Certifications', score: 40, color: '#00ffaa' },
];

const quizData = [
  { q: 'What is a Python list comprehension?', opts: ['A loop structure', 'Concise list creation syntax', 'A class method', 'A built-in function'], ans: 1 },
  { q: 'What does Git commit do?', opts: ['Deletes branch', 'Saves snapshot of changes', 'Pushes to remote', 'Creates new repo'], ans: 1 },
  { q: 'What is Big O notation?', opts: ['A sorting method', 'Algorithm complexity measure', 'A data type', 'A design pattern'], ans: 1 },
];

// Animated Number
const AnimNum = ({ val, suffix = '' }: { val: number; suffix?: string }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += val / 40;
      if (start < val) { setN(Math.floor(start)); requestAnimationFrame(step); }
      else setN(val);
    };
    const t = setTimeout(() => requestAnimationFrame(step), 300);
    return () => clearTimeout(t);
  }, [val]);
  return <>{n}{suffix}</>;
};

// Circular progress ring
const CircularProg = ({ value, size = 72, color = '#6366f1', label }: { value: number; size?: number; color?: string; label: string }) => {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const [dash, setDash] = useState(circ);
  useEffect(() => { const t = setTimeout(() => setDash(circ * (1 - value / 100)), 500); return () => clearTimeout(t); }, [value, circ]);
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5"
            strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={dash}
            style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)', filter: `drop-shadow(0 0 5px ${color})` }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span style={{ color, fontSize: size * 0.2, fontWeight: 900, fontFamily: "'Orbitron', monospace" }}>{value}%</span>
        </div>
      </div>
      <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 9, textAlign: 'center', maxWidth: size }}>{label}</span>
    </div>
  );
};

// Radar SVG chart
const RadarChart = ({ data }: { data: typeof resumeSections }) => {
  const cx = 130, cy = 130, r = 95;
  const n = data.length;
  const pts = data.map((d, i) => {
    const a = (i * 2 * Math.PI) / n - Math.PI / 2;
    const p = d.score / 100;
    return { x: cx + r * p * Math.cos(a), y: cy + r * p * Math.sin(a), lx: cx + (r + 26) * Math.cos(a), ly: cy + (r + 26) * Math.sin(a) };
  });
  return (
    <svg viewBox="0 0 260 260" width="100%" height="220">
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((lvl, gi) => {
        const gp = data.map((_, i) => {
          const a = (i * 2 * Math.PI) / n - Math.PI / 2;
          return `${cx + r * lvl * Math.cos(a)},${cy + r * lvl * Math.sin(a)}`;
        }).join(' ');
        return <polygon key={gi} points={gp} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
      })}
      {data.map((_, i) => {
        const a = (i * 2 * Math.PI) / n - Math.PI / 2;
        return <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />;
      })}
      <polygon points={pts.map(p => `${p.x},${p.y}`).join(' ')} fill="url(#rg)" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill={data[i].color} style={{ filter: `drop-shadow(0 0 4px ${data[i].color})` }} />
          <text x={p.lx} y={p.ly} textAnchor="middle" dominantBaseline="middle" fill={data[i].color} fontSize="9" fontWeight="700" fontFamily="'Orbitron',monospace">{data[i].name}</text>
        </g>
      ))}
      <text x={cx} y={cy - 7} textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="15" fontWeight="900" fontFamily="'Orbitron',monospace">
        {Math.round(data.reduce((a, b) => a + b.score, 0) / data.length)}%
      </text>
      <text x={cx} y={cx + 9} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">Overall</text>
    </svg>
  );
};

export const StudentDashboard = ({ matchedInternships, selectedDomains, onNavigate }: StudentDashboardProps) => {
  const [tab, setTab] = useState<'overview' | 'resume' | 'skills' | 'internships'>('overview');
  const [qIdx, setQIdx] = useState(0);
  const [quizActive, setQuizActive] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [searchQ, setSearchQ] = useState('');
  const [notifs, setNotifs] = useState(4);
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  const skillGaps = skillsData.filter(s => s.level < 60);
  const filtered = matchedInternships.filter(i =>
    i.title.toLowerCase().includes(searchQ.toLowerCase()) ||
    i.company.toLowerCase().includes(searchQ.toLowerCase())
  );

  const handleQuiz = (idx: number) => {
    const correct = idx === quizData[qIdx].ans;
    if (qIdx < quizData.length - 1) setQIdx(q => q + 1);
    else { setQuizScore(correct ? 92 : 68); setQuizActive(false); }
  };

  const tabs = [
    { id: 'overview', label: 'OVERVIEW', icon: Activity },
    { id: 'resume', label: 'RESUME INTEL', icon: FileText },
    { id: 'skills', label: 'SKILLS LAB', icon: Layers },
    { id: 'internships', label: 'MATCHES', icon: Briefcase },
  ];

  return (
    // changes made here <div style={{ minHeight: '100vh', fontFamily: "'Syne', sans-serif", background: '#04060f', position: 'relative' }}>
    style={{ minHeight: '100vh', fontFamily: 'inherit', background: '#04060f' }}
      {/*changes made here  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Orbitron:wght@400;500;700;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" /> */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes scanline{0%{top:-2px}100%{top:100vh}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes glowpulse{0%,100%{opacity:0.5}50%{opacity:1}}
        @keyframes fadeup{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slidein{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        .scanline{position:fixed;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,212,255,0.2),transparent);animation:scanline 10s linear infinite;pointer-events:none;z-index:9999}
        .tab-panel{animation:fadeup 0.3s ease both}
        .ic{animation:internship-card 0s none}
        .glow-dot{animation:glowpulse 2s ease-in-out infinite}
      `}</style>

      {/* scanline */}
      <div className="scanline" />

      {/* BG */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.025) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 15% 5%, rgba(0,212,255,0.04),transparent 60%),radial-gradient(ellipse 50% 70% at 85% 95%, rgba(99,102,241,0.06),transparent 60%)' }} />
        {/* Corner brackets */}
        {[['top:16px','left:16px','borderTop','borderLeft'],['top:16px','right:16px','borderTop','borderRight'],['bottom:16px','left:16px','borderBottom','borderLeft'],['bottom:16px','right:16px','borderBottom','borderRight']].map((c,i)=>(
          <div key={i} style={{ position:'absolute', [c[0].split(':')[0]]:c[0].split(':')[1], [c[1].split(':')[0]]:c[1].split(':')[1], width:48, height:48, [c[2]]:'1px solid rgba(0,212,255,0.25)', [c[3]]:'1px solid rgba(0,212,255,0.25)' }} />
        ))}
      </div>

      {/* NAV */}
      <nav style={{ position:'sticky',top:0,zIndex:50,background:'rgba(4,6,15,0.95)',backdropFilter:'blur(20px)',borderBottom:'1px solid rgba(0,212,255,0.1)' }}>
        <div style={{ maxWidth:1280,margin:'0 auto',padding:'0 24px',height:60,display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <div style={{ display:'flex',alignItems:'center',gap:16 }}>
            <button onClick={()=>onNavigate('home')} style={{ display:'flex',alignItems:'center',gap:6,padding:'6px 12px',borderRadius:8,background:'rgba(0,212,255,0.06)',border:'1px solid rgba(0,212,255,0.2)',color:'rgba(0,212,255,0.7)',fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:'pointer',letterSpacing:1 }}>
              <Home style={{ width:14,height:14 }} /> HOME
            </button>
            <div style={{ width:1,height:18,background:'rgba(0,212,255,0.12)' }} />
            <span style={{ fontFamily:"'Orbitron',monospace",fontWeight:700,fontSize:13,color:'#00d4ff',letterSpacing:2 }}>STUDENT DASHBOARD</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:'rgba(0,212,255,0.35)',background:'rgba(0,212,255,0.06)',padding:'2px 8px',borderRadius:4,border:'1px solid rgba(0,212,255,0.12)' }}>v2.4</span>
          </div>
          <div style={{ display:'flex',alignItems:'center',gap:12 }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:'rgba(0,212,255,0.35)' }}>{new Date().toLocaleDateString('en-US',{day:'2-digit',month:'short',year:'numeric'})}</span>
            <button onClick={()=>setNotifs(0)} style={{ position:'relative',padding:8,borderRadius:8,background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',cursor:'pointer' }}>
              <Bell style={{ width:15,height:15,color:notifs>0?'#ffd700':'rgba(255,255,255,0.3)' }} />
              {notifs>0&&<span style={{ position:'absolute',top:-4,right:-4,width:16,height:16,borderRadius:'50%',background:'#ef4444',color:'white',fontSize:9,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900 }}>{notifs}</span>}
            </button>
            <div style={{ display:'flex',alignItems:'center',gap:8,padding:'6px 12px',borderRadius:8,background:'rgba(0,212,255,0.06)',border:'1px solid rgba(0,212,255,0.18)' }}>
              <div style={{ width:24,height:24,borderRadius:'50%',background:'linear-gradient(135deg,#6366f1,#00d4ff)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:11,color:'white' }}>S</div>
              <span style={{ color:'rgba(255,255,255,0.75)',fontSize:12,fontWeight:600 }}>Student</span>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ position:'relative',zIndex:10,maxWidth:1280,margin:'0 auto',padding:'32px 24px' }}>

        {/* HERO */}
        <div style={{ marginBottom:28,borderRadius:20,padding:'24px 28px',background:'linear-gradient(135deg,rgba(0,212,255,0.04),rgba(99,102,241,0.07),rgba(168,85,247,0.04))',border:'1px solid rgba(0,212,255,0.12)',position:'relative',overflow:'hidden' }}>
          <div style={{ position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,#00d4ff,transparent)' }} />
          <div style={{ position:'absolute',bottom:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,#6366f1,transparent)' }} />
          <div style={{ display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:16 }}>
            <div>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:8 }}>
                <div className="glow-dot" style={{ width:8,height:8,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 8px #4ade80' }} />
                <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:'#4ade80',letterSpacing:1 }}>PROFILE ACTIVE</span>
                <span style={{ color:'rgba(255,255,255,0.15)',fontSize:12 }}>|</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:'rgba(255,255,255,0.25)',letterSpacing:0.5 }}>AI ANALYSIS COMPLETE</span>
              </div>
              <h1 style={{ fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:20,color:'white',letterSpacing:1,marginBottom:6 }}>
                WELCOME BACK, <span style={{ color:'#00d4ff' }}>STUDENT</span>
              </h1>
              <p style={{ color:'rgba(255,255,255,0.45)',fontSize:13 }}>
                <span style={{ color:'#00d4ff',fontWeight:700 }}>{matchedInternships.length}</span> matched &nbsp;·&nbsp;
                <span style={{ color:'#a855f7',fontWeight:700 }}>{selectedDomains.length}</span> domains &nbsp;·&nbsp;
                <span style={{ color:'#4ade80',fontWeight:700 }}>85%</span> resume score
              </p>
            </div>
            <div style={{ display:'flex',gap:10 }}>
              <button onClick={()=>onNavigate('matched-internships')} style={{ padding:'10px 20px',borderRadius:12,background:'linear-gradient(135deg,#6366f1,#00d4ff)',color:'white',fontWeight:700,fontSize:13,border:'none',cursor:'pointer',fontFamily:"'Syne',sans-serif",letterSpacing:0.3 }}>
                View Matches →
              </button>
              <button onClick={()=>onNavigate('career-roadmap')} style={{ padding:'10px 20px',borderRadius:12,background:'transparent',color:'#00d4ff',fontWeight:700,fontSize:13,border:'1px solid rgba(0,212,255,0.35)',cursor:'pointer',fontFamily:"'Syne',sans-serif" }}>
                Roadmap
              </button>
            </div>
          </div>
        </div>

        {/* STAT CARDS */}
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16,marginBottom:28 }}>
          {[
            { label:'MATCHES',val:matchedInternships.length,icon:Briefcase,color:'#00d4ff',suffix:'' },
            { label:'DOMAINS',val:selectedDomains.length,icon:Target,color:'#a855f7',suffix:'' },
            { label:'RESUME SCORE',val:85,icon:FileCheck,color:'#4ade80',suffix:'%' },
            { label:'SKILL GAPS',val:skillGaps.length,icon:AlertCircle,color:'#ffd700',suffix:'' },
          ].map((s,i)=>{
            const Icon = s.icon;
            return (
              <div key={i}
                style={{ position:'relative',borderRadius:16,padding:'20px',background:'rgba(255,255,255,0.02)',border:`1px solid ${s.color}20`,overflow:'hidden',cursor:'pointer',transition:'all 0.25s ease' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background=`${s.color}08`;(e.currentTarget as HTMLElement).style.borderColor=`${s.color}45`;(e.currentTarget as HTMLElement).style.transform='translateY(-2px)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.02)';(e.currentTarget as HTMLElement).style.borderColor=`${s.color}20`;(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}>
                <div style={{ position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 0%, ${s.color}08, transparent 60%)`,pointerEvents:'none' }} />
                <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12 }}>
                  <div style={{ width:36,height:36,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background:`${s.color}12`,border:`1px solid ${s.color}25` }}>
                    <Icon style={{ width:16,height:16,color:s.color }} />
                  </div>
                  <TrendingUp style={{ width:13,height:13,color:`${s.color}50` }} />
                </div>
                <div style={{ fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:28,color:'white',marginBottom:4 }}>
                  <AnimNum val={s.val} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:'rgba(255,255,255,0.3)',letterSpacing:1 }}>{s.label}</div>
                <div style={{ position:'absolute',bottom:0,left:0,right:0,height:2,borderRadius:'0 0 16px 16px',background:`linear-gradient(90deg,transparent,${s.color}50,transparent)` }} />
              </div>
            );
          })}
        </div>

        {/* TABS */}
        {/* changes made here <div style={{ display:'flex',gap:4,marginBottom:24,padding:4,borderRadius:14,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',width:'fit-content',overflowX:'auto' }}>
        style={{ display:'flex',gap:4,marginBottom:24,padding:4,borderRadius:14,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',width:'fit-content',overflowX:'auto',margin:'0 auto 24px auto' }}
          {tabs.map(t=>{ */}
            const Icon = t.icon;
            const active = tab===t.id;
            return (
              <button key={t.id} onClick={()=>setTab(t.id as any)}
                style={{ display:'flex',alignItems:'center',gap:8,padding:'10px 18px',borderRadius:10,fontSize:10,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap',transition:'all 0.2s',background:active?'linear-gradient(135deg,rgba(0,212,255,0.12),rgba(99,102,241,0.12))':'transparent',color:active?'#00d4ff':'rgba(255,255,255,0.3)',border:active?'1px solid rgba(0,212,255,0.28)':'1px solid transparent',fontFamily:"'Orbitron',monospace",letterSpacing:0.5 }}>
                <Icon style={{ width:13,height:13 }} />{t.label}
              </button>
            );
          })}
        </div>

        {/* ── OVERVIEW ── */}
        {tab==='overview' && (
          <div className="tab-panel" style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20 }}>

            {/* Radar */}
            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(0,212,255,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:4 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#00d4ff',boxShadow:'0 0 6px #00d4ff' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#00d4ff',letterSpacing:1 }}>RESUME RADAR</span>
              </div>
              <p style={{ color:'rgba(255,255,255,0.25)',fontSize:11,marginBottom:8 }}>AI scan of uploaded resume</p>
              <RadarChart data={resumeSections} />
              <div style={{ display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6,marginTop:8 }}>
                {resumeSections.map((s,i)=>(
                  <div key={i} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:3 }}>
                    <div style={{ width:6,height:6,borderRadius:'50%',background:s.color,boxShadow:`0 0 4px ${s.color}` }} />
                    <span style={{ color:'rgba(255,255,255,0.35)',fontSize:8,fontFamily:"'JetBrains Mono',monospace" }}>{s.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill circles */}
            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(168,85,247,0.12)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:16 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#a855f7',boxShadow:'0 0 6px #a855f7' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#a855f7',letterSpacing:1 }}>SKILL MATRIX</span>
              </div>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16 }}>
                {skillsData.slice(0,6).map((sk,i)=>(
                  <CircularProg key={i} value={sk.level} size={68} color={sk.color} label={sk.name} />
                ))}
              </div>
            </div>

            {/* Quiz */}
            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(74,222,128,0.12)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:16 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 6px #4ade80' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#4ade80',letterSpacing:1 }}>SKILL VERIFY</span>
              </div>

              {!quizActive && quizScore===null && (
                <div style={{ textAlign:'center',paddingTop:12 }}>
                  <div style={{ width:56,height:56,borderRadius:14,margin:'0 auto 12px',display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.25)' }}>
                    <Terminal style={{ width:26,height:26,color:'#4ade80' }} />
                  </div>
                  <p style={{ fontWeight:700,color:'white',fontSize:13,marginBottom:4 }}>Quick Assessment</p>
                  <p style={{ color:'rgba(255,255,255,0.3)',fontSize:11,marginBottom:16 }}>3 questions · ~2 min</p>
                  <button onClick={()=>{setQuizActive(true);setQIdx(0);}} style={{ width:'100%',padding:'10px',borderRadius:12,background:'linear-gradient(135deg,#4ade80,#10b981)',color:'#04060f',fontWeight:900,fontSize:11,border:'none',cursor:'pointer',fontFamily:"'Orbitron',monospace",letterSpacing:0.5 }}>
                    ▶ INITIATE TEST
                  </button>
                </div>
              )}

              {quizActive && (
                <div>
                  <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10 }}>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:'rgba(255,255,255,0.25)' }}>Q{qIdx+1}/{quizData.length}</span>
                    <div style={{ display:'flex',gap:4 }}>
                      {quizData.map((_,qi)=>(
                        <div key={qi} style={{ height:3,borderRadius:3,transition:'all 0.3s',width:qi<=qIdx?22:10,background:qi<qIdx?'#4ade80':qi===qIdx?'#00d4ff':'rgba(255,255,255,0.1)' }} />
                      ))}
                    </div>
                  </div>
                  <p style={{ color:'white',fontWeight:600,fontSize:13,lineHeight:1.5,marginBottom:12 }}>{quizData[qIdx].q}</p>
                  <div style={{ display:'flex',flexDirection:'column',gap:8 }}>
                    {quizData[qIdx].opts.map((opt,oi)=>(
                      <button key={oi} onClick={()=>handleQuiz(oi)} style={{ textAlign:'left',padding:'10px 12px',borderRadius:10,background:'rgba(0,212,255,0.04)',border:'1px solid rgba(0,212,255,0.12)',color:'rgba(255,255,255,0.75)',fontSize:11,cursor:'pointer',fontFamily:"'JetBrains Mono',monospace",transition:'all 0.15s' }}
                        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(0,212,255,0.1)';(e.currentTarget as HTMLElement).style.borderColor='rgba(0,212,255,0.35)';}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(0,212,255,0.04)';(e.currentTarget as HTMLElement).style.borderColor='rgba(0,212,255,0.12)';}}>
                        [{String.fromCharCode(65+oi)}] {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizScore!==null && (
                <div style={{ textAlign:'center',paddingTop:8 }}>
                  <div style={{ fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:44,color:quizScore>=80?'#4ade80':'#ffd700',marginBottom:4 }}>{quizScore}%</div>
                  <p style={{ fontWeight:700,color:'white',fontSize:13,marginBottom:4 }}>{quizScore>=80?'✦ VERIFIED':'◈ NEEDS WORK'}</p>
                  <p style={{ color:'rgba(255,255,255,0.3)',fontSize:10,marginBottom:14 }}>{quizScore>=80?'Skills confirmed!':'Review resources below'}</p>
                  <button onClick={()=>{setQuizScore(null);setQIdx(0);}} style={{ padding:'8px 20px',borderRadius:10,background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.4)',fontSize:10,cursor:'pointer',fontFamily:"'JetBrains Mono',monospace" }}>
                    RETRY
                  </button>
                </div>
              )}
            </div>

            {/* Domains */}
            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,215,0,0.1)',gridColumn:'1/-1' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:14 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#ffd700',boxShadow:'0 0 6px #ffd700' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#ffd700',letterSpacing:1 }}>ACTIVE DOMAINS</span>
              </div>
              {selectedDomains.length>0 ? (
                <div style={{ display:'flex',flexWrap:'wrap',gap:8 }}>
                  {selectedDomains.map((d,i)=>(
                    <span key={i} style={{ padding:'8px 14px',borderRadius:8,background:`hsl(${i*40+180},55%,11%)`,border:`1px solid hsl(${i*40+180},55%,28%)`,color:`hsl(${i*40+180},75%,68%)`,fontSize:11,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.3,transition:'transform 0.15s',cursor:'default' }}
                      onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='scale(1.06)'}
                      onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform='scale(1)'}>
                      ◈ {d}
                    </span>
                  ))}
                </div>
              ) : (
                <p style={{ color:'rgba(255,255,255,0.2)',fontSize:11,fontFamily:"'JetBrains Mono',monospace" }}>// no domains selected</p>
              )}
            </div>
          </div>
        )}

        {/* ── RESUME INTEL ── */}
        {tab==='resume' && (
          <div className="tab-panel" style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20 }}>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(0,212,255,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:16 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#00d4ff',boxShadow:'0 0 6px #00d4ff' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#00d4ff',letterSpacing:1 }}>ATS BREAKDOWN</span>
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:14 }}>
                {resumeSections.map((s,i)=>(
                  <div key={i}>
                    <div style={{ display:'flex',justifyContent:'space-between',marginBottom:5 }}>
                      <span style={{ color:'rgba(255,255,255,0.65)',fontSize:12,fontWeight:600 }}>{s.name}</span>
                      <span style={{ color:s.color,fontSize:11,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>{s.score}%</span>
                    </div>
                    <div style={{ height:6,borderRadius:6,background:'rgba(255,255,255,0.05)',overflow:'hidden' }}>
                      <div style={{ height:'100%',borderRadius:6,background:`linear-gradient(90deg,${s.color}60,${s.color})`,boxShadow:`0 0 8px ${s.color}35`,width:`${s.score}%`,transition:'width 1.2s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:20,padding:'14px 16px',borderRadius:14,background:'rgba(0,212,255,0.04)',border:'1px solid rgba(0,212,255,0.12)' }}>
                <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                  <span style={{ color:'rgba(255,255,255,0.5)',fontSize:11 }}>Overall ATS Score</span>
                  <span style={{ fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:24,color:'#00d4ff' }}>85%</span>
                </div>
                <div style={{ height:3,borderRadius:3,background:'rgba(255,255,255,0.05)',marginTop:8 }}>
                  <div style={{ height:'100%',borderRadius:3,width:'85%',background:'linear-gradient(90deg,#6366f1,#00d4ff)' }} />
                </div>
              </div>
            </div>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(168,85,247,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:8 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#a855f7',boxShadow:'0 0 6px #a855f7' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#a855f7',letterSpacing:1 }}>PROFILE RADAR</span>
              </div>
              <RadarChart data={resumeSections} />
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginTop:8 }}>
                {resumeSections.map((s,i)=>(
                  <div key={i} style={{ display:'flex',alignItems:'center',gap:6,padding:'6px 10px',borderRadius:8,background:`${s.color}07`,border:`1px solid ${s.color}18` }}>
                    <div style={{ width:6,height:6,borderRadius:'50%',background:s.color,boxShadow:`0 0 3px ${s.color}`,flexShrink:0 }} />
                    <span style={{ color:'rgba(255,255,255,0.5)',fontSize:10,flex:1 }}>{s.name}</span>
                    <span style={{ color:s.color,fontSize:10,fontWeight:700 }}>{s.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(74,222,128,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:14 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 6px #4ade80' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#4ade80',letterSpacing:1 }}>STRONG POINTS</span>
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                {['Well-structured education section','Relevant technical skills highlighted','Clean professional formatting','Good project descriptions'].map((pt,i)=>(
                  <div key={i} style={{ display:'flex',alignItems:'flex-start',gap:10,padding:'10px 12px',borderRadius:10,background:'rgba(74,222,128,0.04)',border:'1px solid rgba(74,222,128,0.1)' }}>
                    <CheckCircle2 style={{ width:15,height:15,color:'#4ade80',flexShrink:0,marginTop:1 }} />
                    <span style={{ color:'rgba(255,255,255,0.65)',fontSize:12 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,165,0,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:14 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#ffa500',boxShadow:'0 0 6px #ffa500' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#ffa500',letterSpacing:1 }}>IMPROVEMENTS</span>
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                {['Add quantified achievements (e.g. 40% improvement)','Include GitHub/portfolio links','Expand work experience section','Add relevant certifications'].map((pt,i)=>(
                  <div key={i} style={{ display:'flex',alignItems:'flex-start',gap:10,padding:'10px 12px',borderRadius:10,background:'rgba(255,165,0,0.04)',border:'1px solid rgba(255,165,0,0.1)' }}>
                    <AlertCircle style={{ width:15,height:15,color:'#ffa500',flexShrink:0,marginTop:1 }} />
                    <span style={{ color:'rgba(255,255,255,0.65)',fontSize:12 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SKILLS LAB ── */}
        {tab==='skills' && (
          <div className="tab-panel" style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20 }}>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(0,212,255,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:16 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#00d4ff',boxShadow:'0 0 6px #00d4ff' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#00d4ff',letterSpacing:1 }}>SKILL RINGS</span>
              </div>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12 }}>
                {skillsData.map((sk,i)=>(
                  <CircularProg key={i} value={sk.level} size={64} color={sk.color} label={sk.name} />
                ))}
              </div>
            </div>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(168,85,247,0.1)' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:16 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#a855f7',boxShadow:'0 0 6px #a855f7' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#a855f7',letterSpacing:1 }}>PROFICIENCY BARS</span>
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                {skillsData.map((sk,i)=>{
                  const Icon = sk.icon;
                  return (
                    <div key={i} style={{ display:'flex',alignItems:'center',gap:10 }}>
                      <div style={{ width:30,height:30,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',background:`${sk.color}12`,border:`1px solid ${sk.color}25`,flexShrink:0 }}>
                        <Icon style={{ width:13,height:13,color:sk.color }} />
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ display:'flex',justifyContent:'space-between',marginBottom:4 }}>
                          <span style={{ color:'rgba(255,255,255,0.6)',fontSize:11,fontWeight:600 }}>{sk.name}</span>
                          <span style={{ color:sk.color,fontSize:10,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>{sk.level}%</span>
                        </div>
                        <div style={{ height:5,borderRadius:5,background:'rgba(255,255,255,0.04)' }}>
                          <div style={{ height:'100%',borderRadius:5,background:`linear-gradient(90deg,${sk.color}55,${sk.color})`,boxShadow:`0 0 5px ${sk.color}35`,width:`${sk.level}%`,transition:'width 1s ease' }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ borderRadius:18,padding:24,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(244,63,94,0.1)',gridColumn:'1/-1' }}>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:14 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'#f43f5e',boxShadow:'0 0 6px #f43f5e' }} />
                <span style={{ fontFamily:"'Orbitron',monospace",fontSize:9,color:'#f43f5e',letterSpacing:1 }}>SKILL GAPS — PRIORITY QUEUE</span>
              </div>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:10 }}>
                {skillGaps.map((sk,i)=>{
                  const Icon = sk.icon;
                  const pLabel = i===0?'CRITICAL':i<3?'HIGH':'MEDIUM';
                  const pColor = i===0?'#f43f5e':i<3?'#ffd700':'#4ade80';
                  return (
                    <div key={i} style={{ padding:'14px',borderRadius:12,background:`${pColor}05`,border:`1px solid ${pColor}18`,display:'flex',alignItems:'center',gap:12,transition:'transform 0.15s',cursor:'pointer' }}
                      onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='scale(1.03)'}
                      onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform='scale(1)'}>
                      <div style={{ width:36,height:36,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background:`${sk.color}12`,border:`1px solid ${sk.color}22`,flexShrink:0 }}>
                        <Icon style={{ width:15,height:15,color:sk.color }} />
                      </div>
                      <div style={{ flex:1,minWidth:0 }}>
                        <p style={{ color:'rgba(255,255,255,0.82)',fontSize:12,fontWeight:700,marginBottom:2 }}>{sk.name}</p>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:pColor,letterSpacing:0.5 }}>{pLabel}</span>
                      </div>
                      <span style={{ fontFamily:"'Orbitron',monospace",fontSize:12,color:sk.color,fontWeight:700 }}>{sk.level}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── MATCHES ── */}
        {tab==='internships' && (
          <div className="tab-panel">
            <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:20 }}>
              <div style={{ position:'relative',flex:1,maxWidth:360 }}>
                <Search style={{ position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',width:14,height:14,color:'rgba(0,212,255,0.35)' }} />
                <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="search internships..."
                  style={{ width:'100%',paddingLeft:38,paddingRight:14,paddingTop:10,paddingBottom:10,borderRadius:12,background:'rgba(0,212,255,0.03)',border:'1px solid rgba(0,212,255,0.13)',color:'rgba(255,255,255,0.75)',fontSize:11,outline:'none',fontFamily:"'JetBrains Mono',monospace",boxSizing:'border-box' }} />
              </div>
              <button onClick={()=>onNavigate('matched-internships')} style={{ padding:'10px 18px',borderRadius:12,background:'linear-gradient(135deg,#6366f1,#00d4ff)',color:'white',fontWeight:700,fontSize:10,border:'none',cursor:'pointer',fontFamily:"'Orbitron',monospace",letterSpacing:0.5,display:'flex',alignItems:'center',gap:6 }}>
                ALL <ChevronRight style={{ width:13,height:13 }} />
              </button>
            </div>

            {filtered.length>0 ? (
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:14 }}>
                {filtered.map(intr=>{
                  const daysLeft = Math.ceil((new Date(intr.deadline).getTime()-Date.now())/86400000);
                  const aC = intr.authenticityScore>=90?'#4ade80':intr.authenticityScore>=70?'#ffd700':'#f43f5e';
                  return (
                    <div key={intr.id}
                      style={{ borderRadius:14,padding:18,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.06)',cursor:'pointer',transition:'all 0.22s ease' }}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(99,102,241,0.4)';(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.background='rgba(99,102,241,0.05)';}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.06)';(e.currentTarget as HTMLElement).style.transform='translateY(0)';(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.02)';}}>
                      <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:10 }}>
                        <div style={{ flex:1,minWidth:0 }}>
                          <h4 style={{ color:'white',fontSize:13,fontWeight:700,marginBottom:2,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{intr.title}</h4>
                          <p style={{ color:'rgba(255,255,255,0.35)',fontSize:11,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{intr.company}</p>
                        </div>
                        <span style={{ marginLeft:8,flexShrink:0,padding:'2px 8px',borderRadius:6,background:`${aC}12`,color:aC,border:`1px solid ${aC}28`,fontFamily:"'Orbitron',monospace",fontSize:10,fontWeight:700 }}>{intr.authenticityScore}%</span>
                      </div>
                      <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:12,color:'rgba(255,255,255,0.3)',fontSize:10,fontFamily:"'JetBrains Mono',monospace" }}>
                        <span style={{ display:'flex',alignItems:'center',gap:3 }}><IndianRupee style={{ width:10,height:10 }} />{intr.stipend.replace('₹','').replace('/month','')}/mo</span>
                        <span style={{ display:'flex',alignItems:'center',gap:3 }}><Clock style={{ width:10,height:10 }} />{daysLeft}d</span>
                        <span style={{ display:'flex',alignItems:'center',gap:3 }}><Wifi style={{ width:10,height:10 }} />{intr.mode}</span>
                      </div>
                      <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                        <span style={{ color:'rgba(255,255,255,0.2)',fontSize:10 }}>{intr.duration}</span>
                        <a href={intr.applyUrl} target="_blank" rel="noopener noreferrer"
                          style={{ display:'flex',alignItems:'center',gap:4,color:'#00d4ff',fontFamily:"'Orbitron',monospace",fontSize:9,fontWeight:700,textDecoration:'none',letterSpacing:0.5 }}
                          onClick={e=>e.stopPropagation()}>
                          APPLY <ExternalLink style={{ width:10,height:10 }} />
                        </a>
                      </div>
                      <div style={{ marginTop:12,height:1,background:`linear-gradient(90deg,transparent,${aC}35,transparent)` }} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign:'center',padding:'80px 20px',borderRadius:18,background:'rgba(255,255,255,0.01)',border:'1px solid rgba(255,255,255,0.04)' }}>
                <Briefcase style={{ width:40,height:40,color:'rgba(0,212,255,0.15)',margin:'0 auto 12px' }} />
                <p style={{ color:'rgba(255,255,255,0.25)',fontFamily:"'JetBrains Mono',monospace",fontSize:12 }}>// no matches found</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
