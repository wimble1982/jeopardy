export default function PointValues() {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-4xl font-extrabold">Point values goes here</h2>
      <ul className="list-disc pl-6">
        <li>
          buttons for common Jeopardy point values (e.g., $200, $400, $600, $800, $1000 for the first round, and their
          doubles for Double Jeopardy). This allows for single-click score adjustments.
        </li>
        <li>
          Increment/Decrement Buttons: For more precise adjustments or Daily Doubles, include increment and decrement
          buttons next to each player's score.
        </li>
        <li>As a fallback, allow manual score entry.</li>
      </ul>
    </section>
  );
}
