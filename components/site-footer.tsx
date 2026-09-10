import { ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return <footer><a href="/" className="brand"><span className="brand-mark"><span>LV</span></span><span className="brand-name">LakeView <b>German School</b></span></a><span className="footer-tag">Learn German. Open doors. Build your future.</span><span className="footer-place">Kisumu, Kenya · <a href="mailto:hello@lakeviewgerman.school">Say hello <ArrowUpRight size={12} /></a></span></footer>;
}