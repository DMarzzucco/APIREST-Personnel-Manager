export interface NewMessage { text: string; }
export interface MessageRespones {
    id: number;
    text: string;
}
export interface AuthProvProps { children: JSX.Element }
export interface ContextProp {
    user?: string
}