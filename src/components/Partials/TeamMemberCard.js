
export default function TeamMemberCard({name, title, img, quote}) {
    return (
            <div className="team-card">
            <img src={img} alt=""/>
            <h1 className="name">{name}</h1>
            <h4 className="title">{title}</h4>
            <p className="quote">{quote}</p>
        </div>
    )
}
