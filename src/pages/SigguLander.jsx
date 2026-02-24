import { useEffect } from 'react';

/**
 * Redirects to the standalone Signature Studio conversion lander (siggu.html).
 * The full experience lives in public/siggu.html so it can also be opened directly as a file.
 */
const SigguLander = () => {
  useEffect(() => {
    window.location.replace('/siggu.html');
  }, []);

  return (
    <div style={{ padding: 24, textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <p>Taking you to Signature Studio…</p>
      <p style={{ marginTop: 8, fontSize: 14, color: '#64748b' }}>
        <a href="/siggu.html">Click here</a> if you’re not redirected.
      </p>
    </div>
  );
};

export default SigguLander;
