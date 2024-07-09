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

    const changeElementColor = (selector: string, color: string, singleElement: boolean = false): void => {
        if (singleElement) {
            const element: HTMLElement | null = document.querySelector(selector)
            if (element) {
                element.style.color = color
            }
        }
        const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.style.color = color
        })
    }

    const changeImage = (index: number): void => {
        setCurrentIndex(index)
        const containerElement: HTMLElement | null = document.querySelector('.container')
        if (containerElement) {
            // change background
            containerElement.style.backgroundImage = `url(${imagePath[index]})`;
            // change font-color
            const textColor: string = index === 1 ? 'black' : 'white';
            const linkColor: string = textColor;

            changeElementColor('.contHeader', textColor)
            changeElementColor('.header a', linkColor)
            changeElementColor('.logo', linkColor, true)
            changeElementColor('.slideButton', linkColor)
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