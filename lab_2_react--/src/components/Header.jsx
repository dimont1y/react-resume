export default function Header() {
    return (
        <header className="px-8 lg:px-12 py-10 bg-white border-b border-slate-100 relative overflow-hidden">
            {/* Легкий декоративний елемент на фоні */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-slate-50 blur-3xl opacity-60 z-0 pointer-events-none"></div>

            <div className="relative z-10">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">Dmytro Horbach</h1>
                <p className="text-xl text-slate-500 font-medium mb-6">Cybersecurity & Automation Specialist</p>

                <div className="flex flex-wrap gap-y-3 gap-x-4 text-sm text-slate-600 font-medium">
                    <a href="tel:+380993235480" className="flex items-center gap-2 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        +380993235480
                    </a>
                    <a href="mailto:dima1990gor@gmail.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        dima1990gor@gmail.com
                    </a>
                    <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Lviv, Ukraine
                    </span>
                </div>
            </div>
        </header>
    );
}
