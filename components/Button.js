import Link from "next/link";

const Button = ({title, link}) => {
    return ( 
        <button className="px-4 btn-icon-secondary">
            <a href={link}>{title}</a>
        </button>
     );
}
 
export default Button;