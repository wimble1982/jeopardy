import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/join')({
  component: Join,
});

function Join() {
  return (
    <div className="p-2">
      This is a work in progress. The intent of this app is to act as a buzzer that can be used from a mobile device,
      similar to joining a Jackbox game.
    </div>
  );
}
