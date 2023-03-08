export default function Tab({ text, number }) {
  return (
    <li className="tab-container">
      <p>{text}</p>
      <span>{number}</span>
    </li>
  );
}
