import { createFileRoute } from '@tanstack/react-router';
import PointValues from '../components/PointValues';
import Scoreboard from '../components/Scoreboard';

export const Route = createFileRoute('/score')({
  component: Score,
});

function Score() {
  return (
    <>
      <PointValues />
      <Scoreboard />
    </>
  );
}
