

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CircleProps {
    icon: any; // TODO: Trocar por um ícone do fontawesome
    onClick?: () => void;
}

export default function Circle(props: CircleProps) {

    return (

        <>
            <div>
                <button onClick={props.onClick} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-4 border-yellow">
                    <FontAwesomeIcon className="text-yellow text-2xl" icon={props.icon} />
                </button>
            </div>
        </>

    )
}