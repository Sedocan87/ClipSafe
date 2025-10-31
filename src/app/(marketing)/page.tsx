import Logo from '@/components/ui/logo';
import {
  BadgeCheck,
  CloudOff,
  UserCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome to ClipSafe',
};

const WelcomePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
      <div className="flex h-full w-full max-w-2xl grow flex-col items-center justify-center space-y-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Logo className="h-16 w-16 text-accent-primary" />
          <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-primary">
            Welcome to ClipSafe
          </p>
          <p className="text-lg font-normal leading-normal text-text-secondary">
            Your Privacy-First Video Editor.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-1 flex-col items-center gap-3 rounded-lg border border-border bg-bg-tertiary p-4 text-center">
              <UserCheck className="text-text-secondary" />
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold leading-tight text-text-primary">
                  Client-Side Processing
                </h2>
                <p className="text-sm font-normal leading-normal text-text-secondary">
                  Your Data Stays Yours.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 rounded-lg border border-border bg-bg-tertiary p-4 text-center">
              <CloudOff className="text-text-secondary" />
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold leading-tight text-text-primary">
                  No Cloud Uploads
                </h2>
                <p className="text-sm font-normal leading-normal text-text-secondary">
                  For Maximum Privacy.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 rounded-lg border border-border bg-bg-tertiary p-4 text-center">
              <BadgeCheck className="text-text-secondary" />
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold leading-tight text-text-primary">
                  Own Your Content
                </h2>
                <p className="text-sm font-normal leading-normal text-text-secondary">
                  Always.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-sm flex-col items-stretch gap-3">
          <Link href="/editor/test-project" className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-accent-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-text-primary transition-opacity hover:opacity-90 active:opacity-80">
            <span className="truncate">Start Editing</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
