type HeroStat = {
  value: string;
  label: string;
};

type HeroStatsProps = {
  stats: readonly HeroStat[];
};

export function HeroStats({ stats }: HeroStatsProps) {
  if (stats.length === 0) return null;

  return (
    <dl className="flex max-w-sm flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-0.5">
          <dt className="text-sm text-white/60">{stat.label}</dt>
          <dd className="text-2xl font-bold tracking-tight text-white">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
