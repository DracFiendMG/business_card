import profileImage from '../assets/ProfilePicture.jpg'

export default function Header() {
    return (
        <header>
            <img className="profile" src={profileImage} alt="Sreeram's profile" />
        </header>
    )
}