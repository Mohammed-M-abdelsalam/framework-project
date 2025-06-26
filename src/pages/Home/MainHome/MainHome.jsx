import mainImg from '../../../assets/images/avataaars.svg'
import Star from '../../../components/Star/Star';
function MainHome() {
    return (
        <main className="container-style text-center min-h-screen relative bg-main text-white">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-60 mx-auto mb-5">
                    <img src={mainImg} alt="a picture of a person" />
                </div>
                <div>
                    <h1 className='text-5xl font-semibold'>start framework</h1>
                    <Star color='white' />
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </main>
    );
}

export default MainHome