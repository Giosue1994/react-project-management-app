import { forwardRef, useRef } from "react";

const Input = forwardRef(function Input({label, textarea, ...props}, ref) {

  return (
    <p className="flex flex-col">
      <label className="uppercase text-gray-600 font-bold">{label}</label>
      {textarea ? (
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={ref}
          {...props}
          cols="30"
        />
      ) : (
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={ref}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;