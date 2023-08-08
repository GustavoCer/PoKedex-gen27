import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG} from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Hi Trainer</h2>
            <p>to start whit the app, give me your trainer name 😃</p>
            <form onSubmit={handleSubmit}>
                <input id='inputTrainer' ref={inputTrainer} type="text" />
                <button>gotta catch'em all !!!</button>
            </form>
        </div>
    )
}

export default HomePage