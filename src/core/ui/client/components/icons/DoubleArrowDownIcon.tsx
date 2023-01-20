import WithIconBase, { IconProps } from "./WitIconBase";

const DoubleArrowDownIcon = ({ 
  ...rest
}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}><path d="m12 20.2-6.8-6.825 2.2-2.2 4.6 4.6 4.6-4.6 2.2 2.2Zm0-6.775-6.8-6.8L7.4 4.4 12 9l4.6-4.6 2.2 2.225Z"/></svg>
  );
}

export default WithIconBase(DoubleArrowDownIcon);
