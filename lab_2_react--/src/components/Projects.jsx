export default function Projects() {
    return (
        <div className="space-y-4 font-sans text-sm pb-8">
            <div>
                <p className="font-bold">Vulnerability & Risk Analysis (ISO 27001)</p>
                <ul className="list-disc leading-snug ml-4 space-y-1 mt-1">
                    <li>Performed structured gap analysis and qualitative risk assessment for enterprise environments</li>
                </ul>
            </div>
            <div>
                <p className="font-bold">Network Security Laboratories</p>
                <ul className="list-disc leading-snug ml-4 space-y-1 mt-1">
                    <li>Conducted traffic analysis and wireless security assessments in controlled lab environments</li>
                </ul>
            </div>
            <div>
                <p className="font-bold">Secure Web Development</p>
                <ul className="list-disc leading-snug ml-4 space-y-1 mt-1">
                    <li>Developed a web application focused on preventing common vulnerabilities (XSS, SQL Injection)</li>
                </ul>
            </div>
        </div>
    );
}
