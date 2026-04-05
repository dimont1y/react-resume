import { useState, useEffect } from 'react';

/**
 * Footer component — Lab 4 Task 1: LocalStorage
 * Uses useEffect to collect system info on mount,
 * saves to localStorage, displays via useState.
 */
export default function Footer() {
  const [sysInfo, setSysInfo] = useState({
    browser: '—',
    platform: '—',
    language: '—',
    screen: '—',
  });

  useEffect(() => {
    // Try to load from localStorage first
    const saved = localStorage.getItem('sysInfo');
    if (saved) {
      setSysInfo(JSON.parse(saved));
      return;
    }

    // Collect system info
    const ua = navigator.userAgent;
    let browser = 'Unknown Browser';
    if (ua.includes('Firefox'))      browser = 'Mozilla Firefox';
    else if (ua.includes('Edg'))     browser = 'Microsoft Edge';
    else if (ua.includes('Chrome'))  browser = 'Google Chrome';
    else if (ua.includes('Safari'))  browser = 'Safari';
    else if (ua.includes('Opera'))   browser = 'Opera';

    const info = {
      browser,
      platform: navigator.platform || 'Unknown',
      language: navigator.language || 'Unknown',
      screen: `${screen.width}×${screen.height}`,
    };

    // Save to localStorage
    localStorage.setItem('sysInfo', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="sys-info">
          <span className="sys-info-row">
            <span className="sys-label">Browser:</span>
            <span>{sysInfo.browser}</span>
          </span>
          <span className="sys-info-row">
            <span className="sys-label">Platform:</span>
            <span>{sysInfo.platform}</span>
          </span>
          <span className="sys-info-row">
            <span className="sys-label">Language:</span>
            <span>{sysInfo.language}</span>
          </span>
          <span className="sys-info-row">
            <span className="sys-label">Screen:</span>
            <span>{sysInfo.screen}</span>
          </span>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <span className="footer-copy">© 2026 Dmytro Horbach. All rights reserved.</span>
        </div>
      </div>
      <div className="footer-hint">
        ℹ️ System info is saved in <code>localStorage</code> and loaded on component mount via <code>useEffect</code>.
      </div>
    </footer>
  );
}
