"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PanelsLeftRight, X } from 'lucide-react';

// Mock components for layout structure
const TopBar = ({ toggleLeftPanel, toggleRightPanel }: { toggleLeftPanel: () => void; toggleRightPanel: () => void; }) => (
  <div className="h-14 bg-bg-secondary border-b border-border flex-shrink-0 flex items-center justify-between px-4">
    <div className='lg:hidden'>
      <button onClick={toggleLeftPanel} className="p-2 rounded-md hover:bg-bg-tertiary">
        <PanelsLeftRight className="w-5 h-5" />
      </button>
    </div>
    <div className="text-lg font-bold">ClipSafe Editor</div>
    <div className='lg:hidden'>
      <button onClick={toggleRightPanel} className="p-2 rounded-md hover:bg-bg-tertiary">
        <PanelsLeftRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const LeftPanel = ({ isOpen, togglePanel }: { isOpen: boolean; togglePanel: () => void; }) => (
  <aside className={`absolute lg:relative z-10 h-full bg-bg-secondary border-r border-border transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-72 lg:flex-shrink-0`}>
    <div className="p-4 w-72">
      <button onClick={togglePanel} className="absolute top-3 right-3 lg:hidden p-1 rounded-md hover:bg-bg-tertiary">
        <X className="w-5 h-5" />
      </button>
      Left Panel Content
    </div>
  </aside>
);

const RightPanel = ({ isOpen, togglePanel }: { isOpen: boolean; togglePanel: () => void; }) => (
  <aside className={`absolute lg:relative z-10 h-full right-0 bg-bg-secondary border-l border-border transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:w-80 lg:flex-shrink-0`}>
    <div className="p-4 w-80">
      <button onClick={togglePanel} className="absolute top-3 left-3 lg:hidden p-1 rounded-md hover:bg-bg-tertiary">
        <X className="w-5 h-5" />
      </button>
      Right Panel Content
    </div>
  </aside>
);

const Canvas = () => <div className="flex-1 bg-bg-primary p-4">Canvas</div>;
const Timeline = () => <div className="h-[300px] bg-bg-secondary border-t border-border flex-shrink-0 p-4">Timeline</div>;

export default function EditorLayout({ children }: { children: React.ReactNode; }) {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);
  const toggleRightPanel = () => setIsRightPanelOpen(!isRightPanelOpen);

  return (
    <div className="h-screen flex flex-col bg-bg-primary text-text-primary overflow-hidden">
      <TopBar toggleLeftPanel={toggleLeftPanel} toggleRightPanel={toggleRightPanel} />
      <div className="flex flex-1 relative overflow-hidden">
        {/* Mobile/Tablet Panels */}
        <LeftPanel isOpen={isLeftPanelOpen} togglePanel={toggleLeftPanel} />

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Canvas />
          {children}
        </main>

        <RightPanel isOpen={isRightPanelOpen} togglePanel={toggleRightPanel} />
      </div>
      <Timeline />
    </div>
  );
}