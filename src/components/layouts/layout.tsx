import type { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from 'src/lib/utils';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const LayoutRoot: FC<LayoutProps> = ({ children, className = '' }) => {
  return <div className={cn('flex-col height-h-screen', className)}>{children}</div>;
};

const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className="flex height-4rem items-center py-0 px-4 sticky top-0 z-10">{children}</header>
);

const Body: FC<PropsWithChildren> = ({ children }) => <div className="flex-1">{children}</div>;

const Sidebar: FC<PropsWithChildren> = ({ children }) => (
  <aside className="w-4rem overflow-y-auto p-2 border-r-2 max-md:hidden">{children}</aside>
);

const Main: FC<PropsWithChildren> = ({ children }) => <main className="flex-1 p-4 overflow-y-auto">{children}</main>;

export const Layout = Object.assign(LayoutRoot, {
  Header,
  Body,
  Sidebar,
  Main
});
