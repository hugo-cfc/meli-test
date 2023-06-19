import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, ...rest }: InputProps) => {
  return (
    <div className="relative flex-1">
      <div
        className={`absolute top-[110%] max-w-[120px] rounded-lg px-3 py-2 text-center text-xs font-medium text-white shadow-sm transition-all ${
          error ? "visible animate-fadeImage bg-red-600" : "invisible"
        }`}
      >
        {error}
      </div>

      <div className="flex overflow-hidden rounded-sm rounded-r-none">
        <input style={{ flex: 1 }} {...rest} />
      </div>
    </div>
  );
};

export default Input;
