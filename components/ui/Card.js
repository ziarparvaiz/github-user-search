import classNames from "classnames";

function Card({ children, ...props }) {
  return (
    <div
      {...props}
      className={classNames(
        {
          "p-[20px] rounded-[9px] bg-black border-[1px] border-border": true,
        },
        props.className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
