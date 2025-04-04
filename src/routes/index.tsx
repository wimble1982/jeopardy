import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="font-impact mb-8 text-6xl">Jeopardy Scorer</h1>
      <Link to="/join" className="btn-pill">
        Join as Buzzer
      </Link>
      <Link to="/score" className="btn-pill">
        Start a New Game
      </Link>
    </div>
  );
}
