import Star from "../../../components/Star/Star"

function MainAbout(){
    return(
        <main className="container-style text-center min-h-screen relative text-white">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-semibold">About</h1>
                <Star color='white' />
                <div className="text-lg flex flex-wrap">
                    <p className="lg:w-1/2 p-3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className="lg:w-1/2 p-3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </main>
    )
}

export default MainAbout