'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { Camera, MapPin, ChevronLeft, Plus, LogOut, Wind, Coffee, Wrench } from 'lucide-react';

export default function Home() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('manifesto');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  const ManifestoView = () => (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-center px-6 py-12">
      <div className="text-[#ff9500] text-xs font-mono tracking-[4px] uppercase mb-8">
        System Initializing
      </div>
      <h1 className="text-3xl font-light mb-6 leading-tight text-[#e8e6e1]">
        Seventy thousand kilometers teaches you that a Brompton is not a bicycle.
      </h1>
      <p className="text-[#888] text-lg mb-8 leading-relaxed">
        It is a <span className="text-[#e8e6e1] font-medium">folding philosophy</span>—a mechanical haiku against the chaos of cities.
      </p>
      <button 
        onClick={() => setCurrentView('main')}
        className="border border-[#2d2d2d] text-[#e8e6e1] px-8 py-4 font-mono text-sm tracking-widest uppercase hover:border-[#ff9500] hover:text-[#ff9500] transition-all"
      >
        Initialize
      </button>
    </div>
  );

  const MainView = () => (
    <div className="min-h-screen bg-[#050505]">
      <header className="flex justify-between items-center p-6 border-b border-[#1a1a1a]">
        <div className="text-[#ff9500] font-mono text-xs tracking-[3px]">FOLD//CRAFT</div>
        {user ? (
          <button onClick={() => signOut(auth)} className="text-[#888] hover:text-[#ff9500]">
            <LogOut size={20} />
          </button>
        ) : (
          <button 
            onClick={handleGoogleSignIn}
            className="text-xs font-mono text-[#888] hover:text-[#ff9500] border border-[#1a1a1a] px-4 py-2 rounded"
          >
            Access
          </button>
        )}
      </header>

      <div className="p-6 space-y-4">
        <div 
          onClick={() => setCurrentView('atelier')}
          className="bg-[#0f0f0f] border border-[#1a1a1a] p-6 cursor-pointer hover:border-[#ff9500] transition-all group"
        >
          <div className="text-[#ff9500] font-mono text-xs tracking-widest uppercase mb-2">Pathway A</div>
          <h2 className="text-xl text-[#e8e6e1] mb-2 group-hover:text-[#ff9500] transition-colors">The Atelier</h2>
          <p className="text-[#888] text-sm">For those seeking their first folding companion. AI-assisted matching.</p>
        </div>

        <div 
          onClick={() => user ? setCurrentView('archive') : handleGoogleSignIn()}
          className={`bg-[#0f0f0f] border border-[#1a1a1a] p-6 cursor-pointer transition-all group ${!user ? 'opacity-50' : 'hover:border-[#ff9500]'}`}
        >
          <div className="text-[#ff9500] font-mono text-xs tracking-widest uppercase mb-2">Pathway B</div>
          <h2 className="text-xl text-[#e8e6e1] mb-2 group-hover:text-[#ff9500] transition-colors">The Archive</h2>
          <p className="text-[#888] text-sm">For keepers of the fold. Digital provenance tracking.</p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-[#050505] min-h-screen text-[#e8e6e1]">
      {currentView === 'manifesto' && <ManifestoView />}
      {currentView === 'main' && <MainView />}
    </main>
  );
}
