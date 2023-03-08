import Tab from "../Tab/Tab";
import "./TabBar.css";

export default function TabBar() {
  return (
    <ul className="tab-bar">
      <Tab text="All Entries" number={3} />
      <Tab text="Favourites" number={1} />
    </ul>
  );
}
