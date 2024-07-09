export interface NewMessage { text: string; }
export interface MessageRespones {
    id: number;
    text: string;
}
export interface buttonImageProps {
    children: JSX.Element;
    click: () => void;
    className: string;
}
export interface AuthProvProps { children: JSX.Element }
export interface ContextProp {
    currentIndex: number;
    Slide: (op: "prev" | "next") => void
}