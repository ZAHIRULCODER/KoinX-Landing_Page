export default function SubHeading({ children, className }) {
  return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;
}
