import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, ArrowRight, Mail, Compass, Clipboard } from 'lucide-react';

const CommandPalette = ({ isOpen, onClose, toggleTheme, isDark }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const actions = [
    { name: 'Go to Home', desc: 'Navigate to home page', icon: Compass, action: () => navigate('/') },
    { name: 'Go to Projects', desc: 'Navigate to project gallery', icon: Compass, action: () => navigate('/projects') },
    { name: 'Go to Experience', desc: 'Navigate to education & work history', icon: Compass, action: () => navigate('/experience') },
    { name: 'Go to Contact', desc: 'Navigate to contact section', icon: Compass, action: () => navigate('/contact') },
    { name: 'Toggle Theme', desc: `Switch to ${isDark ? 'Light' : 'Dark'} mode`, icon: isDark ? Sun : Moon, action: toggleTheme },
    { name: 'Copy Contact Email', desc: 'dandy@example.com', icon: Mail, action: () => {
      navigator.clipboard.writeText('dandy@example.com');
      alert('Email copied to clipboard!');
    }}
  ];

  const filtered = actions.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) || 
    a.desc.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-xl glassmorphism rounded-xl overflow-hidden shadow-2xl relative z-10 border border-border-custom dark:bg-slate-900/90 bg-white/90">
        <div className="flex items-center px-4 border-b border-border-custom">
          <Search className="w-5 h-5 text-text-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-4 bg-transparent outline-none text-text-main placeholder-text-muted text-base"
          />
          <kbd className="px-2 py-0.5 text-xs bg-text-muted/10 text-text-muted rounded border border-border-custom font-mono">ESC</kbd>
        </div>
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => { item.action(); onClose(); }}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-main">{item.name}</p>
                      <p className="text-xs text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })
          ) : (
            <p className="text-center py-8 text-sm text-text-muted">No commands found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
