import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Circle() {

    return (

        <>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-4 border-yellow">
                <FontAwesomeIcon className="text-yellow text-2xl" icon={faArrowDown} />
            </div>
        </>

    )
}