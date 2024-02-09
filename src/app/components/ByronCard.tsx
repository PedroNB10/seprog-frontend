import Circle from "./Circle"

export default function ByronCard() {

    return (

        <>

            <div className="bg-blue-light p-2 rounded-lg">
                <div className="bg-white flex items-center gap-10 p-2 rounded-xl justify-center text-black pr-8">
                    <img className="w-20 border-4 border-blue-dark rounded-2xl" src="/img/logo-byron-quadrado.jpg" alt="" />
                    <div>
                        <h3 className="font-bold">byron.solutions</h3>
                        <p>Conteúdo de CSS HTML e JS.</p>
                    </div>
                    <Circle />
                </div>

            </div>
        </>

    )
}