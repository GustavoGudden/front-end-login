import { Btn } from "./style";

type BananaProps = {
  text: string;
  color: string;
  event?: () => void;
};

const Button = (Props: BananaProps) => {
  return (
    <Btn onClick={Props.event} color={Props.color}>
      {Props.text}
    </Btn>
  );
};

export default Button;
