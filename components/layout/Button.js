import Link from "next/link";

function Button(props){
return <Link href={props.link}>{props.children}</Link>
}


export default Button;