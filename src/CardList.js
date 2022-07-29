import Card from "./Card"

const CardList = (props) => {
    const filtRobots = props.dataSource;
    return (
        <div>
            {
                filtRobots.map((robot) => {
                    return(
                        <Card id={robot.id} name={robot.name} email={robot.email} key={robot.id} />
                    )
                })
            }
        </div>
    )
}

export default CardList;