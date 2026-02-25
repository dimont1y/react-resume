export default function Education() {
    return (
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 rounded-full bg-slate-300"></span>
                Education
            </h2>
            <div className="space-y-4">
                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-base">Lviv Polytechnic National University</h3>
                    <p className="text-slate-600 mt-1">Bachelor in Cybersecurity</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-3">Expected 2027</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-base">MASC School</h3>
                    <p className="text-slate-600 mt-1 text-sm">Systems & Workflow Automation Specialization</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-3">08/2025</p>
                </div>
            </div>
        </div>
    );
}
