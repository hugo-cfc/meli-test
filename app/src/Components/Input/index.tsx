import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonIcon?: ReactNode;
}

const Input = ({ buttonIcon, ...rest }: InputProps) => {
  return (
    <div className="flex rounded-sm overflow-hidden">
      <input style={{ flex: 1 }} {...rest} />

      {buttonIcon && (
        <button
          type="submit"
          className="py-1 px-2 bg-grayML transition-all hover:bg-gray-100"
        >
          {buttonIcon}
        </button>
      )}
    </div>
  );
};

export default Input;
