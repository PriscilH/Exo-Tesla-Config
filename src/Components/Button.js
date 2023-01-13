const Button = (props) => {
  const { func, style, text, price } = props;

  return (
    <button onClick={func} className={style}>
      <span>{text}</span>
      <span>{price}</span>
    </button>
  );
};

export default Button;