import './Spinner.css';

export const Spinner = ({
  trackColor = '#d8e1e8',
  color = '#26547c',
  size = 30,
  strokeSize= 3
}) => {
  const style = {
    width: size,
    height: size,
    borderColor: trackColor,
    borderTopColor: color,
    borderWidth: strokeSize
  };

  return <div className='cc-spinner' style={style}/>
}