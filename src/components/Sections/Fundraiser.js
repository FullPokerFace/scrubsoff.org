import Bar from '../../assets/vector/fundraiser-bar.svg'

export default function Fundraiser() {
    return (
        <>
            <h1>We’ve organized fundraiser to mainain project & spread the word on social media.</h1>
            <div className="fundraiser">
                <span>$0 pledged</span>
                <img src={Bar}alt=""/>
            </div>
            <button className="btn-yellow">Join the Fundraiser</button>
        </>
    )
}
