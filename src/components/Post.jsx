export default function Post({ key, img, title, category }) {
    return (
        <div className="post-area" id={key}>
            <div className="post-thumbnail">
                <img className="img-cover" src={img} />
            </div>
            <a href="#" className="btn-primary btn-post-thumbnail rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
            <p className="category-title">{category}</p>
            <h2>{title}Personal Care Brand Haeckels Pushes Their <span className="allura-regular">Sustainability Efforts</span> Forward</h2>
        </div>
    );
}