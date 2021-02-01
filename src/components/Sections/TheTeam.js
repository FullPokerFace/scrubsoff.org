import arkadiy from '../../assets/arkadiy_s.jpg'
import vardan from '../../assets/vardan_m.jpg'
import TeamMemberCard from '../Partials/TeamMemberCard'

export default function TheTeam() {
    return (
        <>
            <h1>The ScrubsOff Team</h1>
            <div className="mobile-flex-direction-switch">
                <TeamMemberCard name='Arkadiy Safarov' title='project manager' img={arkadiy}  quote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"/>
                <TeamMemberCard name='Vardan Melkumyan' title='technical manager' img={vardan}  quote = "The Idea of ScrubsOff is simple yet very important. It’s about how we can avoid spreading viruses by taking very effective and feasible steps. Something so easy to achieve can make a huge impact on a whole healthcare system."/>
            </div>
        </>
    )
}
