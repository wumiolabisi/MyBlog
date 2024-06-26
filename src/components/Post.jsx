export default function Post({ img, title, category }) {
    return (
        <div className="post-area">
            <div className="post-thumbnail">
                <img className="img-cover" src={img} />
            </div>
            <a href="#" className="btn-primary btn-post-thumbnail rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
            <p className="category-title">{category}</p>
            <h2>{title}</h2>
        </div>
    );
}