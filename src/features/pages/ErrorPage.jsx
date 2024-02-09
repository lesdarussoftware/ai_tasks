import Emoji from "react-emoji-render";

export function ErrorPage() {
    return (
        <p className="notFoundText">
            <Emoji text="404 - Página no encontrada :disappointed_face:" />
        </p>
    )
}