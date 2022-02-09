import classes from './Card.module.css';

const Card = (props) => {
  const customStyle = `${classes['card']} ${props.class}`;

  return <div className={customStyle}>{props.children}</div>;
};

export default Card;
