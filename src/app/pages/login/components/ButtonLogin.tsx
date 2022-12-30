interface IButtonLoginProps {  
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: string;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({
  type,
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
