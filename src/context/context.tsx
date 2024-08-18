import { createContext, useContext, useState } from "react";
import { imagePath, task } from "../components/func/func";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { addTask, editTask } from "../app/feature/tasks/task.Slice";
import { AuthProvProps, ContextProp, taskPropet } from "../Interfaces";

export const AuthContext = createContext<ContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(' AuthProv must be used withi an AuthProv')
    }
    return context
}
const AuthProvider: React.FC<AuthProvProps> = ({ children }) => {
    const [newTask, setNewTask] = useState<Omit<taskPropet, 'completed'>>(task)
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.tasks);
    const nav = useNavigate();
    const params = useParams<{ id: string }>();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewTask(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (params.id) {
            const update = {
                ...newTask,
                id: Number(params.id),
                completed: false
            }
            dispatch(editTask(update))
        } else {
            dispatch(addTask({
                ...newTask,
                completed: false
            }))
            setNewTask(task)
        }
        nav("/lists")
    }
    const RefreshPage = () => {
        if (params.id) {
            const task = selector.tasks.find(task => task.id === Number(params.id))
            if (task) {
                setNewTask({ title: task.title, description: task.description })
            }
        }
    }

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
        <AuthContext.Provider value={{ Slide: slide, currentIndex, newTask, handleChange, handleSubmit, RefreshPage }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;