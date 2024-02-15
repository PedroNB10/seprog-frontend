
export default function Footer() {

    return (

        <footer id="organizadores" className=" bg-blue-dark text-white">

            <div className="flex  items-center justify-center py-4 max-w-6xl  mx-auto gap-32">
                {/* div das imagens em cima da logo da byron */}
                <div className="flex flex-col items-center">
                    <img className="w-32" src="/img/unifei.png" alt="Logo da Byron" />
                    <img className="w-36  left-0" src="/img/imc.png" alt="Logo da Byron" />
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-24" src="/img/logo_seprog.png" alt="Logo da Byron" />
                    <img className="w-24" src="/img/TextLogoTitle.png" alt="Logo da Byron" />
                    <span className="text-sm">Todos os direitos reservados</span>
                </div>

                <div>
                    <h2 className="font-semibold text-xl ">Organizadores</h2>
                    <ul className="pt-3">
                        <li>byron.solutions</li>
                        <li>Black Bee Drones</li>
                        <li>Dev-U</li>
                        <li>Maratona de programação</li>
                    </ul>
                </div>



            </div>

            <div style={{ boxShadow: "0 -4px 8px rgba(0,0,0,0.10)" }} className=" flex items-center justify-center " >

                <a href="https://byronsolutions.com/" target="_blank">
                    <picture>
                        <img className="w-80" src="/img/devbsol.png" alt="Logo da Byron" />
                    </picture>
                </a>
            </div>




        </footer>

    )
}