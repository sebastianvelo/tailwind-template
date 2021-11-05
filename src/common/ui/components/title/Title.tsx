import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import SizeProps from "common/ui/common/props/SizeProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import { textColorStyle, textSizeStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getClassName = (props: TitleProps) =>
  TailwindStyle.builder()
    .add(`font-bold`)
    .add(textSizeStyle(props))
    .add(textColorStyle(props))
    .get();

export interface TitleProps extends TextContentProps, ColorProps, SizeProps {}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => (
  <h1 className={getClassName(props)}>{props.content}</h1>
);

export default Title;