import facebookIcon from "../../assets/icons/facebook-icon.svg"
import instaIcon from "../../assets/icons/instagram-icon.svg"
import twitterIcon from "../../assets/icons/twitter-icon.svg"
import youtubeIcon from "../../assets/icons/youtube-icon.svg"
import ShareButton from "./ShareButton"

export default function ShareBlock({title}) {
    return (
        <div className="share-block">
            <h1>{title}</h1>
            <div className="share-buttons" >

                <ShareButton icon={facebookIcon} link="https://www.facebook.com/arkadiysafarov"/>
                <ShareButton icon={youtubeIcon} link="https://www.youtube.com/c/arkadiysafarov"/>
                <ShareButton icon={instaIcon} link="https://www.instagram.com/cdcgov/"/>
                <ShareButton icon={twitterIcon} link="https://twitter.com/cdcgov"/>

            </div>
        </div>
    )
}
