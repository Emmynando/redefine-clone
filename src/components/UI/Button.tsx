interface ButtonProps {
  id: string;
  text: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass: string;
}

export default function Button({
  id,
  text,
  leftIcon,
  rightIcon,
  containerClass,
}: ButtonProps) {
  return (
    <main>
      <button
        id={id}
        className={`flex items-center gap-2 relative w-fit rounded-full px-7 py-3 text-black  ${containerClass}`}>
        {leftIcon && <span>{leftIcon}</span>}
        <p className="font-general text-xs uppercase">{text}</p>
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    </main>
  );
}
