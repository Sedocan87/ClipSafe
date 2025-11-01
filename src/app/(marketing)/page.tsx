import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome to ClipSafe',
};

const WelcomePage = () => {
  return (
    <div className="flex h-full w-full max-w-2xl grow flex-col items-center justify-center space-y-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <Logo className="h-16 w-16 text-accent-primary" />
        <p className="text-text-primary text-4xl font-black leading-tight tracking-[-0.033em]">
          Welcome to ClipSafe
        </p>
        <p className="text-text-secondary text-lg font-normal leading-normal">
          Your Privacy-First Video Editor.
        </p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-1 flex-col gap-3 rounded-lg border border-border bg-bg-tertiary p-4 text-center items-center">
            <span className="material-symbols-outlined text-text-secondary">verified_user</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold leading-tight text-text-primary">
                Client-Side Processing
              </h2>
              <p className="text-sm font-normal leading-normal text-text-secondary">
                Your Data Stays Yours.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-lg border border-border bg-bg-tertiary p-4 text-center items-center">
            <span className="material-symbols-outlined text-text-secondary">cloud_off</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold leading-tight text-text-primary">
                Professional Editing Tools
              </h2>
              <p className="text-sm font-normal leading-normal text-text-secondary">
                No Cloud Uploads.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-lg border border-border bg-bg-tertiary p-4 text-center items-center">
            <span className="material-symbols-outlined text-text-secondary">badge</span>
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
        <Link href="/editor/test-project">
          <Button>Start Editing</Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;