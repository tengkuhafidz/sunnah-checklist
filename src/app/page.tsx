import Card from "./components/Card";

export default function Home() {
  return (
    <main className="p-4">
      <div>
        <h1 className="font-bold">Turn Sunnah Into Habits</h1>
      </div>
      <div className="py-4">
        <Card
          path={"/meal-time"}
          title="🍔 Meal Time"
          sunnahPoints={100}
          sessionCount={10}
          streakCount={3}
        />
      </div>
    </main>
  );
}
