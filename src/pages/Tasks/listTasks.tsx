import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { deleteTask } from "../../features/tasks/tasksSlice";

function listTasks() {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    console.log(tasks)

    const dispatch = useDispatch()

    const handleDelete = (id: number) => {
        // console.log(id)
        dispatch(deleteTask({ id }))
    }
    return (
        <section className="text-slate-300 h-screen w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1>List Tasks {tasks.length}</h1>
                <Link to={"/messages"}>Add Tasks</Link>
            </div >
            {tasks.map(task => (
                <div key={task.id} className="border border-teal-400 flex flex-col justify-center items-center p-3" >
                    <h1>{task.title}</h1>
                    <h2>{task.description}</h2>
                    <button onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>
                    <Link to={`/messages/${task.id}`}>Update</Link>
                </div>
            ))}

        </section>
    )
}
export default listTasks;