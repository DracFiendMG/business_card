import profileImage from '../assets/ProfilePicture.jpg'

export default function Info() {
    return (
        <div className="info">
            <img className="profile" src={profileImage} alt="Sreeram's profile" />
            <h1>Sreeram Reddy Velagala</h1>
            <p className="role">Full Stack Developer</p>
            <a className="portfolio-link" href="#">sreeramreddy.website</a>
            <div className="buttons">
                <a className="button email" href="mailto:sreeramrdy@gmail.com"><i class="fa-solid fa-envelope"></i>Email</a>
                <a className="button linkedin" href="https://www.linkedin.com/in/sreeram-17ba861a4/" target="blank"><i class="fa-brands fa-square-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}
