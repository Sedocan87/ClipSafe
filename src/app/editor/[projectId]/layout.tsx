import React from 'react';

// Placeholders for the main editor components
const TopBar = () => <div className="h-14 bg-bg-secondary border-b border-border flex-shrink-0">Top Bar</div>;
const LeftPanel = () => <div className="w-72 bg-bg-secondary border-r border-border hidden lg:block">Left Panel</div>;
const Canvas = () => <div className="flex-1 bg-bg-primary">Canvas</div>;
const RightPanel = () => <div className="w-80 bg-bg-secondary border-l border-border hidden lg:block">Right Panel</div>;
const Timeline = () => <div className="h-[300px] bg-bg-secondary border-t border-border flex-shrink-0">Timeline</div>;

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-bg-primary text-text-primary">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <LeftPanel />
        <main className="flex-1 flex flex-col">
          <Canvas />
          {children}
        </main>
        <RightPanel />
      </div>
      <Timeline />
    </div>
  );
}
