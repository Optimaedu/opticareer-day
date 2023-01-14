import WithIconBase, { IconProps } from "./WitIconBase";

const AddIcon = ({ 
  ...rest
}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
  );
}

export default WithIconBase(AddIcon);
