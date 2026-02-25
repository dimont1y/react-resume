export default function Skills() {
    return (
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 rounded-full bg-slate-300"></span>
                Skills
            </h2>
            <div className="flex flex-col gap-3">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Automation & Integrations</h4>
                    <p className="text-slate-500 text-sm">Make/Integromat, Zapier, APIs</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Cybersecurity Tools</h4>
                    <p className="text-slate-500 text-sm">Wireshark, Ettercap, GnuPG</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Standards</h4>
                    <p className="text-slate-500 text-sm">ISO/IEC 27001, PDCA, Risk assessment</p>
                </div>
            </div>
        </div>
    );
}
