import { forwardRef, useRef } from "react";

const Input = forwardRef(function Input({label, textarea, ...props}, ref) {

  return (
    <p className="flex flex-col">
      <label className="uppercase text-gray-600 font-bold">{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} cols="30" />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;