import '../style/Novelview.css'

export const Novelview = ({ novelName, episode, status, review, picture, tag, original }) => (
<div className="container">
    <div className="card">
        <div className="face face1">
            <div className="content">
                <img src={picture} />
                <h3>{tag}</h3>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h4>{novelName}<p style={{fontSize: 10, color: 'crimson'}}>{original}</p></h4>
                <p className="text">{review}</p>
                <p className="text">Episode : {episode}</p>
                <p className="text">Status : {status}</p>
            </div>
        </div>
    </div>
</div>    
)

