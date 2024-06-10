export default function Post({ post }) {
    return (
        <div className="post-area">
            <div className="post-thumbnail">
                <img className="img-cover" src="{post.thumbnail}" />
            </div>
            <a href="#" className="btn-primary btn-post-thumbnail rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
            <p className="category-title">{post.category}</p>
            <h2>{post.title}Personal Care Brand Haeckels Pushes Their <span className="allura-regular">Sustainability Efforts</span> Forward</h2>
        </div>
    );
}