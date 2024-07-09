import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { decrement, increment, reset } from "../features/counter/counterSlice";

function Message() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <section className="h-screen text-white flex flex-col justify-center items-center">
                <div className=" border border-slate-300 p-2 rounded-full text-xl flex flex-row justify-center items-center">
                    <button onClick={() => dispatch(increment())}>+</button>
                    <span className="mx-2">{count}</span>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
                <div>
                    <button onClick={() => dispatch(reset())}>Reset</button>
                </div>
            </section>
        </>
    )
}

export default Message;