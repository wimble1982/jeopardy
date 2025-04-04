import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/score')({
  component: Score,
});

function Score() {
  return <div className="p-2">Hello from Score!</div>;
}
