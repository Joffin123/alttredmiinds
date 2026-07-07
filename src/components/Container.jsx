export default function Container({ children, className = '' }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[96px]">
      <div className={className}>{children}</div>
    </div>
  );
}
