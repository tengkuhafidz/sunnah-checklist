import Link from "next/link";

interface Props {
  path: string;
  title: string;
  sunnahPoints: number;
  sessionCount: number;
  streakCount: number;
}

export default function Card({
  path,
  title,
  sunnahPoints,
  sessionCount,
  streakCount,
}: Props) {
  return (
    <Link href={path}>
      <div className="bg-gray-200 border  rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-gray-300">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="bg-gray-800 text-gray-200 text-sm py-1 px-2 font-semibold rounded-lg">
          🌟 {sunnahPoints} Sunnah Points
        </span>
        <div className="mt-4 text-gray-600 text-sm">
          <p>✅ {sessionCount} Sessions Tracked</p>
          <p>🔥 {streakCount} Days Streak</p>
        </div>
      </div>
    </Link>
  );
}
