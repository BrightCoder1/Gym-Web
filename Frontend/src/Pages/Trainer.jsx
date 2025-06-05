import TrainerInfo from "../Components/TrainerInfo"

const Trainer = () => {
    return (
        <>
            <div className="trainerPos">
                <a className='addTrainer' href="/add/trainer">Add Trainer</a>
                <TrainerInfo />
            </div>
        </>
    )
}

export default Trainer
