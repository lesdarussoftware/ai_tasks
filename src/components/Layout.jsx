import { useLocation, useNavigate } from "react-router-dom"

export function Layout({ children }) {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <>
            <header>
                <h1>
                    AI Tasks
                </h1>
                <nav>
                    <ul>
                        <li onClick={() => navigate('/')} style={{
                            backgroundColor: pathname === '/' ? '#6BD089' : ''
                        }}>
                            Inicio
                        </li>
                        <li onClick={() => navigate('/traduccion')} style={{
                            backgroundColor: pathname === '/traduccion' ? '#6BD089' : ''
                        }}>
                            Traducción
                        </li>
                        <li onClick={() => navigate('/resumen')} style={{
                            backgroundColor: pathname === '/resumen' ? '#6BD089' : ''
                        }}>
                            Resumen
                        </li>
                        {/* <li onClick={() => navigate('/texto-a-voz')} style={{
                            backgroundColor: pathname === '/texto-a-voz' ? '#6BD089' : ''
                        }}>
                            Texto a voz
                        </li> */}
                        <li>
                            Comunidad
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                AI Tasks by Lesdarus Software &copy; | {new Date().getFullYear()}
            </footer>
        </>
    )
}