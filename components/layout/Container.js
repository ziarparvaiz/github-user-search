import classNames from "classnames";

function Container({ children, ...props }) {
  return (
    <div
      className={classNames(
        "container mx-auto px-[28px] lg:px-6 md:max-w-[1267px] max-w-[970px]",
        props.className
      )}
      id={props.id}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {};

export default Container;
