export default function HeadingText({ children, className }) {
  return (
    <h2 className={`text-xl xl:text-2xl font-bold ${className}`}>{children}</h2>
  );
}
