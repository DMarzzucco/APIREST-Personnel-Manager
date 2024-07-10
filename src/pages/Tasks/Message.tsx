import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../../features/tasks/tasksSlice";
import { RootState } from "../../app/store";

interface taskPropet {
    title: string;
    description: string;
    completed: boolean;
}
const task: Omit<taskPropet, 'completed'> = {
    title: "",
    description: "",
}
// imporrtar constante y interfaz
function Message() {
    const [newTask, setNewTask] = useState<Omit<taskPropet, 'completed'>>(task)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewTask(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.tasks);
    const nav = useNavigate();
    const params = useParams<{ id: string }>();

    const handlSubmit = (e: React.FormEvent) => {
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
            console.log(newTask)
            setNewTask(task)
        }
        nav('/lists')
    }
    useEffect(() => {
        if (params.id) {
            const task = selector.tasks.find(task => task.id === Number(params.id))
            if (task) {
                setNewTask({ title: task.title, description: task.description })
            }
        }
    }, [])
    return (
        <section className="h-screen text-slate-300 flex flex-col justify-center items-center">
            <div className=" p-2  text-xl flex flex-col justify-center items-center">
                <h1 className="my-3">Task</h1>
                <Link to={"/lists"}> Tasks List</Link>
            </div>
            <form
                onSubmit={handlSubmit}
                className="flex flex-col justify-center items-center">
                <input
                    name="title"
                    type="text"
                    placeholder="title"
                    value={newTask.title}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="description"
                    value={newTask.description}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" >Enviar</button>
            </form>
        </section>
    )
}

export default Message;