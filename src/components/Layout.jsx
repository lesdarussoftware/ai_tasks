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
                        <li onClick={() => navigate('/ai-tasks/')} style={{
                            backgroundColor: pathname === '/ai-tasks/' ? '#6BD089' : ''
                        }}>
                            Inicio
                        </li>
                        <li onClick={() => navigate('/ai-tasks/traduccion')} style={{
                            backgroundColor: pathname === '/ai-tasks/traduccion' ? '#6BD089' : ''
                        }}>
                            Traducción
                        </li>
                        <li onClick={() => navigate('/ai-tasks/resumen')} style={{
                            backgroundColor: pathname === '/ai-tasks/resumen' ? '#6BD089' : ''
                        }}>
                            Resumen
                        </li>
                        <li onClick={() => navigate('/ai-tasks/texto-a-voz')} style={{
                            backgroundColor: pathname === '/ai-tasks/texto-a-voz' ? '#6BD089' : ''
                        }}>
                            Texto a voz
                        </li>
                        <li onClick={() => navigate('/ai-tasks/comunidad')} style={{
                            backgroundColor: pathname === '/ai-tasks/comunidad' ? '#6BD089' : ''
                        }}>
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