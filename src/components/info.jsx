import '/src/App.css';
export default function Info() {
    return (
        <>
        <img src="/images/Selfie.png" className="selfie"/>
        <h1 className="name">Cezar Breeman Trevino</h1>
        <h2 className="job">React Developer</h2>
        <div className="social-btns">
            <div className="email">
                <button className="email-btn">
                <img src="/assets/email-1572-svgrepo-com.svg" className="svg-info email-svg"/>
                    Email
                </button>
            </div>
            <div className="linkedin">
                <button className="linkedin-btn">
                    <img src="/assets/linkedin-svgrepo-com.svg" className="svg-info linkedin-svg"/>
                    Linkedin
                </button>
            </div>
        </div>
        
        
        </>
    )
}