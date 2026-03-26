/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Music,
  Pause,
  Play,
  ChevronRight,
  X,
  Info,
  Coffee,
  Cat,
  ArrowLeft,
  ChevronDown,
  User as UserIcon,
  ChevronLeft
} from 'lucide-react';
import { FAMILY_MEMBERS } from './constants';
import { FamilyMember, Drink, Menu } from './types';

const DrinkDetail = ({ drink, onClose }: { drink: Drink; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <img
            src={drink.image}
            alt={drink.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto max-h-[60vh] no-scrollbar">
          <div className="flex flex-wrap gap-2 mb-4">
            {drink.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-3xl font-serif mb-2">{drink.name}</h2>
          <p className="text-stone-500 mb-8 italic">{drink.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {drink.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700">
                    <div className="w-1 h-1 bg-stone-300 rounded-full" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Preparation</h3>
              <ol className="space-y-4">
                {drink.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-serif text-stone-300 text-xl leading-none">{i + 1}</span>
                    <p className="text-sm text-stone-600 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MemberSection = ({
  member,
  isActive,
  onClick,
  isPlaying,
  setIsPlaying
}: {
  member: FamilyMember;
  isActive: boolean;
  onClick: () => void;
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
  key?: string;
}) => {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  // Sort menus by release date (descending)
  const sortedMenus = [...member.drinkLine.menus].sort((a, b) =>
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );

  // Reset selected menu when switching members
  useEffect(() => {
    if (!isActive) setSelectedMenu(null);
  }, [isActive]);

  return (
    <motion.section
      layout
      className={`relative transition-all duration-700 ease-in-out ${isActive ? 'flex-[4] sm:flex-[5]' : 'flex-1 cursor-pointer hover:opacity-80 overflow-hidden'
        } ${member.drinkLine.themeColor}`}
      style={isActive ? { overflowY: 'auto', WebkitOverflowScrolling: 'touch' } : {}}
      onClick={() => {
        if (!isActive) {
          onClick();
          setIsPlaying(true);
        }
      }}
    >
      {/* Background Text Decor */}
      <div className="absolute top-10 -left-10 opacity-[0.05] pointer-events-none select-none">
        <h1 className="text-[20vw] font-serif whitespace-nowrap uppercase">{member.name}</h1>
      </div>

      <div className="flex flex-col p-6 sm:p-12 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex items-center gap-4">
            <motion.div
              layoutId={`avatar-${member.id}`}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm"
            >
              <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif">{member.name}</h2>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500">{member.role}</p>
            </div>
          </div>

          {isActive && (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-tighter text-stone-400">Now Playing</span>
                <span className="text-xs font-medium">{member.drinkLine.musicTitle}</span>
              </div>

              <div className="flex items-end gap-0.5 h-4 mb-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={isPlaying ? { height: [4, 16, 8, 12, 4] } : { height: 4 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5 + i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="w-0.5 bg-stone-400 rounded-full"
                  />
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

            </div>
          )}
        </div>

        {isActive ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex flex-col"
          >
            <AnimatePresence mode="wait">
              {!selectedMenu ? (
                <motion.div
                  key="menu-list"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="max-w-xl mb-12">
                    <h3 className="text-4xl sm:text-6xl font-serif mb-4 leading-tight">
                      {member.drinkLine.title}
                    </h3>
                    <p className="text-stone-500 italic mb-4">{member.drinkLine.subtitle}</p>
                    <p className="text-sm text-stone-600 leading-relaxed max-w-md">
                      {member.description}
                    </p>
                  </div>

                  <div className="space-y-8 pr-2">
                    {/* Main Menu Section */}
                    <div className="mb-12">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Main Menu</span>
                        <div className="h-[1px] flex-1 bg-stone-200" />
                      </div>
                      <motion.div
                        whileHover={{ x: 10 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMenu(member.drinkLine.mainMenu);
                        }}
                        className="group cursor-pointer border-b border-stone-200 pb-8"
                      >
                        <div className="flex justify-between items-end mb-4">
                          <h4 className="text-2xl sm:text-3xl font-serif group-hover:text-stone-600 transition-colors">
                            {member.drinkLine.mainMenu.title}
                          </h4>
                          <span className="text-[10px] font-mono text-stone-400 uppercase">Always Available</span>
                        </div>
                        <p className="text-sm text-stone-500 leading-relaxed max-w-lg italic">
                          {member.drinkLine.mainMenu.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                          Explore Classics <ChevronRight size={12} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Seasonal Menus Section */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Seasonal Collections</span>
                      <div className="h-[1px] flex-1 bg-stone-200" />
                    </div>

                    {sortedMenus.map((menu) => (
                      <motion.div
                        key={menu.id}
                        whileHover={{ x: 10 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMenu(menu);
                        }}
                        className="group cursor-pointer border-b border-stone-200 pb-8 last:border-0"
                      >
                        <div className="flex justify-between items-end mb-4">
                          <h4 className="text-2xl sm:text-3xl font-serif group-hover:text-stone-600 transition-colors">
                            {menu.title}
                          </h4>
                          <span className="text-[10px] font-mono text-stone-400">{menu.releaseDate}</span>
                        </div>
                        <p className="text-sm text-stone-500 leading-relaxed max-w-lg italic">
                          {menu.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                          Explore Menu <ChevronRight size={12} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="drink-list"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex-1 flex flex-col"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMenu(null);
                    }}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900 transition-colors mb-8"
                  >
                    <ChevronLeft size={16} /> Back to Menus
                  </button>

                  <div className="mb-12">
                    <h3 className="text-3xl sm:text-4xl font-serif mb-2">{selectedMenu.title}</h3>
                    <p className="text-sm text-stone-500 italic">{selectedMenu.description}</p>
                  </div>

                  <div className="pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {selectedMenu.drinks.map((drink) => (
                        <motion.div
                          key={drink.id}
                          whileHover={{ y: -5 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDrink(drink);
                          }}
                          className="glass p-4 rounded-2xl cursor-pointer group"
                        >
                          <div className="aspect-video rounded-xl overflow-hidden mb-4">
                            <img
                              src={drink.image}
                              alt={drink.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-serif text-lg">{drink.name}</h4>
                              <p className="text-xs text-stone-400">View Recipe</p>
                            </div>
                            <ChevronRight size={16} className="text-stone-300 group-hover:text-stone-900 transition-colors" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-stone-300"
            >
              {member.id === 'chenxi' ? <UserIcon size={48} /> : <Cat size={48} />}
            </motion.div>
            <p className="mt-8 vertical-text uppercase tracking-[0.5em] text-stone-400 text-xs font-bold">
              {member.name}
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedDrink && (
          <DrinkDetail drink={selectedDrink} onClose={() => setSelectedDrink(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default function App() {
  const [activeMemberId, setActiveMemberId] = useState<string>('chenxi');
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioReady, setAudioReady] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeMember = FAMILY_MEMBERS.find(m => m.id === activeMemberId);

  const tryPlayAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !activeMember) return;
    const src = activeMember.drinkLine.audioSrc;
    if (audio.src !== window.location.origin + src && audio.src !== src) {
      audio.src = src;
      audio.load();
    }
    if (isPlaying) {
      const p = audio.play();
      if (p) {
        p.then(() => setAudioReady(true)).catch(() => { });
      }
    }
  }, [activeMember, isPlaying]);

  useEffect(() => {
    const unlock = () => {
      setHasInteracted(true);
      tryPlayAudio();
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, [tryPlayAudio]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeMember) return;
    audio.src = activeMember.drinkLine.audioSrc;
    audio.load();
    if (audioReady && isPlaying) {
      audio.play().catch(() => { });
    }
  }, [activeMemberId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying && audioReady) {
      audio.play().catch(() => { });
    } else {
      audio.pause();
    }
  }, [isPlaying, audioReady]);

  if (!activeMember) return null;

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <audio ref={audioRef} loop />

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/chenxi-cats-drink-lab/logo.svg" alt="logo" className="h-7 sm:h-8" />
            <span className="hidden sm:inline font-serif text-xl tracking-tighter">Kiro, Canelé & Chenxi</span>
          </div>
          <div className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-stone-500">
            <button
              onClick={() => setActiveMemberId('chenxi')}
              className={`hover:text-stone-900 transition-colors ${activeMemberId === 'chenxi' ? 'text-stone-900' : ''}`}
            >
              Chenxi
            </button>
            <button
              onClick={() => setActiveMemberId('kiro')}
              className={`hover:text-stone-900 transition-colors ${activeMemberId === 'kiro' ? 'text-stone-900' : ''}`}
            >
              Kiro
            </button>
            <button
              onClick={() => setActiveMemberId('canele')}
              className={`hover:text-stone-900 transition-colors ${activeMemberId === 'canele' ? 'text-stone-900' : ''}`}
            >
              Canelé
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content — overflow-x-clip instead of overflow-hidden for Safari */}
      <main className="flex-1 flex flex-col sm:flex-row h-dvh pt-16" style={{ overflowX: 'clip' }}>
        {FAMILY_MEMBERS.map((member) => (
          <MemberSection
            key={member.id}
            member={member}
            isActive={activeMemberId === member.id}
            onClick={() => setActiveMemberId(member.id)}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </main>

      {!hasInteracted && (
        <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-stone-400 animate-bounce">
          <ChevronDown size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll or Tap to Explore</span>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}} />
    </div>
  );
}