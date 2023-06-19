import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonIcon?: ReactNode;
  error?: string;
}

const Input = ({ buttonIcon, error, ...rest }: InputProps) => {
  return (
    <div className="relative">
      <div
        className={`absolute top-[110%] max-w-[120px] rounded-lg px-3 py-2 text-center text-xs font-medium text-white shadow-sm transition-all ${
          error ? "visible animate-fadeImage bg-red-600" : "invisible"
        }`}
      >
        {error}
      </div>
      <div className="flex overflow-hidden rounded-sm">
        <input style={{ flex: 1 }} {...rest} />

        {buttonIcon && (
          <button
            type="submit"
            className="bg-grayML px-2 py-1 transition-all hover:bg-gray-100"
          >
            {buttonIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
