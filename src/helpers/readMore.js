import { NavLink } from "react-router-dom";

export default function readMore(text, len) {
  len = len || 50;
  return text.slice(0, len) + " ... ";
}
