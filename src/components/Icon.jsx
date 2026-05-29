export default function Icon({ name, className = "" }) {
  return <span className={`material-icons ${className}`.trim()}>{name}</span>;
}
