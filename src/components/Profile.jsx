import '../style/Profile.css'

export const Profile = ({ fname, sname, it, like, tel, age, email, profilePicture}) => (
    <div className="all">
        <div className="gradient">
            <div className="card">
                <img src={profilePicture}/>
                <h2>{fname} {sname}</h2>
                <p>{it}</p>
                <p>{like}</p>
                <p>Age : {age}</p>
                <span className="left bottom">Tel : {tel}</span>
                <span className="right bottom">{email}</span>
            </div>
        </div>
    </div>
)