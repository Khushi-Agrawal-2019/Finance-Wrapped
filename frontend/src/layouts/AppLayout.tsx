type AppLayoutProps = {
    children: React.ReactNode;
  };
  
  export default function AppLayout({ children }: AppLayoutProps) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        {/* Page container */}
        <div className="mx-auto max-w-7xl px-6 py-6">
          {children}
        </div>
      </div>
    );
  }
  