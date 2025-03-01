import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

// Wrap each icon in a function to pass props
export function CodeIcon(props) {
  return <FaCode {...props} />;
}

export function DesignIcon(props) {
  return <FaPaintBrush {...props} />;
}

export function RocketIcon(props) {
  return <FaRocket {...props} />;
}
