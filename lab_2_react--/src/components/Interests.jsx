export default function Interests() {
    return (
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 rounded-full bg-slate-300"></span>
                Interests
            </h2>
            <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white text-slate-600 rounded-xl text-sm font-medium border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">AI in Cybersecurity</span>
                <span className="px-4 py-2 bg-white text-slate-600 rounded-xl text-sm font-medium border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">SOAR</span>
                <span className="px-4 py-2 bg-white text-slate-600 rounded-xl text-sm font-medium border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">Risk Management</span>
                <span className="px-4 py-2 bg-white text-slate-600 rounded-xl text-sm font-medium border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">Network Arch</span>
            </div>
        </div>
    );
}
