import { createContext, useContext, useState } from "react";
import { AuthProvProps, ContextProp } from "../Interfaces/Interfaces";
import { imagePath } from "../components/func/func";

export const AuthContext = createContext<ContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(' AuthProv must be used withi an AuthProv')
    }
    return context
}
const AuthProvider: React.FC<AuthProvProps> = ({ children }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const changeImage = (index: number): void => {
        setCurrentIndex(index);
        const containerElemen: HTMLElement | null = document.querySelector('.container');
        if (containerElemen) {
            // change background
            containerElemen.style.backgroundImage = `url(${imagePath[index]})`;
            // change font-color
            const contentMarkElement: NodeListOf<HTMLElement> = document.querySelectorAll('.contHeader');
            const textColor: string = index === 1 ? 'black' : 'white';
            contentMarkElement.forEach(Link => {
                Link.style.color = textColor;
            })
            // change path-color
            const MenuLink: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.header a');
            const linkColor: string = index === 1 ? 'black' : 'white';
            MenuLink.forEach(link => {
                link.style.color = linkColor;
            })
            // change logo color
            const logoLink: HTMLElement | null = document.querySelector('.logo');
            if (logoLink) {
                logoLink.style.color = linkColor;
            }
            // change button color
            const slideButton: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.slideButton');
            slideButton.forEach(button => {
                button.style.color = linkColor;
            })
        }
    }
    const slide = (op: "prev" | "next") => {
        setCurrentIndex(prev => {
            const index = op === "prev" ?
                (prev - 1 + imagePath.length) % imagePath.length :
                (prev + 1) % imagePath.length;
            changeImage(index)
            return index;
        })
    }
    return (
        <AuthContext.Provider value={{ Slide: slide, currentIndex }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;