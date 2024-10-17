import {Link} from 'react-dom'

function Button({name, onClick}) {
  return (
    <div className="hover:text-dark-brown hover:duration-300 cursor-pointer font-bold font-serif" onClick={onClick}>
        <h1>{name}</h1>
    </div>
  );
}

export default Button;
