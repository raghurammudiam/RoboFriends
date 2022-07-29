import 'tachyons';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;