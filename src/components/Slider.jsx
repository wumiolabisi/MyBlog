export default function Slider({ img }) {
    return (
        <div className="slider-item">
            <img src={img.filename} />
            <div className="slider-content">
                <h2 className="color-white">Use your purchasing
                    <span className="allura-regular">power</span>
                    for
                    <span className="allura-regular">positive</span>
                    change</h2>
                <a href="#" className="btn-primary rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
            </div>
        </div>
    );
}