import { useSelector } from "react-redux"

const HomePage = () => {

    const trainer = useSelector(reducer => reducer.trainer)

    console.log(trainer)

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Hi Trainer</h2>
            <p>to start whit the app, give me your trainer name 😃</p>
            <form>
                <input type="text" />
                <button>gotta catch'em all !!!</button>
            </form>
        </div>
    )
}

export default HomePage