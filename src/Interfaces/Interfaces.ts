import React from "react";

export interface taskPropet {
    title: string;
    description: string;
    completed: boolean;
}

export interface CounterState { value: number }
export interface taskProps {
    id: number;
    title: string;
    description: string;
    completed: boolean
}
export interface tasksTyp {
    tasks: taskProps[]
    nexId: number
}
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
    Slide: (op: "prev" | "next") => void;
    newTask: Omit<taskPropet, "completed">;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    RefreshPage: () => void;
}