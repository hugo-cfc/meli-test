import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonIcon?: ReactNode;
  error?: string;
}

const Input = ({ buttonIcon, error, ...rest }: InputProps) => {
  return (
    <div className="relative">
      <div
        className={`max-w-[120px] text-center absolute top-[110%] px-3 py-2 text-xs font-medium text-white transition-all bg-red-600 rounded-lg shadow-sm ${
          error ? "animate-fadeImage visible" : "invisible"
        }`}
      >
        {error}
      </div>
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
    </div>
  );
};

export default Input;
