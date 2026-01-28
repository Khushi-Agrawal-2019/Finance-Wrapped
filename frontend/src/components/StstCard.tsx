type StatCardProps = {
    title: string;
    value: string;
    subtitle?: string;
  };
  
  export default function StatCard({ title, value, subtitle }: StatCardProps) {
    return (
      <div className="rounded-xl bg-gray-900 p-6 shadow-sm">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="mt-2 text-3xl font-semibold">{value}</p>
        {subtitle && (
          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
    );
  }
  