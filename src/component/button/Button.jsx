export const Button = ({
  children,
  className,
  onClick,
  type,
  id,
  disabled,
  style,
}) => {
  return (
    <button
      type={type || "button"}
      className={`btn ${className}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
