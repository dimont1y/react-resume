export default function Projects() {
    return (
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 rounded-full bg-slate-300"></span>
                Academic Projects
            </h2>
            <div className="space-y-4">
                <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-slate-900 transition-colors">Vulnerability & Risk Analysis (ISO 27001)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Performed structured gap analysis and qualitative risk assessment for enterprise environments; proposed mitigation strategies aligned with international standards.</p>
                </div>
                <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-slate-900 transition-colors">Network Security Laboratories</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Conducted traffic analysis and wireless security assessments (WPA2/WPA3 protocols) in controlled lab environments.</p>
                </div>
                <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-slate-900 transition-colors">Secure Web Development</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Developed a web application focused on preventing common vulnerabilities (XSS, SQL Injection) and implementing secure session management.</p>
                </div>
            </div>
        </div>
    );
}
