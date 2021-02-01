
export default function ShareButton({icon, link}) {
    return (
        <button className="btn-yellow-small">
            <a href={link}><img src={icon} alt="Share On Facebook"/></a>
        </button>
    )
}
