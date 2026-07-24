interface StatCardProps {
  title: string;
  value: string;
  icon: string;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-yellow-400 transition">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-yellow-400">
            {value}
          </h2>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
}