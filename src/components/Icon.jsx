export const Icon = ({
  svg,
  size = '1em',
  color
}) => {
  const Svg = svg;
  return <Svg className="cc-icon" width={size} height={size} fill={color} aria-label={svg.render?.name}/>
};