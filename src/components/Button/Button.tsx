// import css from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className={css.buttonContainer}>
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
