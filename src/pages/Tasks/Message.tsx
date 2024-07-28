import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/context";

function Message() {
    const { handleChange, newTask, handleSubmit, RefreshPage } = useAuth()

    useEffect(() => { RefreshPage() }, [])
    return (
        <section className="h-screen text-slate-300 flex flex-col justify-center items-center">
            <div className=" p-2  text-xl flex flex-col justify-center items-center">
                <h1 className="my-3">Task</h1>
                <Link to={"/lists"}> Tasks List</Link>
            </div>
            <form
                onSubmit={handleSubmit}
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