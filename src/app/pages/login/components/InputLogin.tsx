import React from "react";

interface IInputLoginProps {
  label: string;
  type: string;
  onChange: (newvalue: string) => void;
  value: string;
  placeholder: string;
  onPressEnter?: () => void;
}
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>(
  (props, ref) => {
    return (
      <label htmlFor="">
        <span>{props.label}</span>
        <input
          ref={ref}
          type={props.type}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          placeholder={props.placeholder}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
        />
      </label>
    );
  }
);

