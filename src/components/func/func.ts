import { CounterState, taskPropet, tasksTyp } from "../../Interfaces/Interfaces"

export const imagePath: string[] = [
    'img/eg1.jpg',
    'img/eg2.jpg'
]
export const initialCounter: CounterState = {
    value: 0
}
export const initialTask: tasksTyp = {
    tasks: [
        {
            id: 0,
            title: "nene",
            description: "wuwuw",
            completed: false
        }
    ],
    nexId: 1
}
export const task: Omit<taskPropet, 'completed'> = {
    title: "",
    description: "",
}

