export default function Experience() {
    return (
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 rounded-full bg-slate-300"></span>
                Experience
            </h2>
            <div className="space-y-6">
                <div className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-1">
                        <h3 className="font-bold text-slate-800 text-lg group-hover:text-slate-900 transition-colors">Systems Automation Specialist (Freelance)</h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 xl:mt-0 whitespace-nowrap uppercase tracking-wider">Aug 2025 – Nov 2025</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-4 font-medium">UK & Denmark (Remote)</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start">
                            <span className="text-slate-300 mr-2 mt-0.5 min-w-[12px]">•</span>
                            <span>Designed and maintained mission-critical automated workflows, ensuring stable cross-platform data synchronization.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-slate-300 mr-2 mt-0.5 min-w-[12px]">•</span>
                            <span>Implemented structured error-handling logic and secure data flows for CRM systems.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-slate-300 mr-2 mt-0.5 min-w-[12px]">•</span>
                            <span>Managed end-to-end technical delivery and direct communication with international stakeholders in English.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-slate-300 mr-2 mt-0.5 min-w-[12px]">•</span>
                            <span>Optimized operational efficiency through custom integration designs and API management.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
