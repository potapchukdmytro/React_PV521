import "./AuthorBiography.css";

const AuthorBiography = ({author}) => {
    return (
        <div>
            <h1>{author.name}</h1>
            <img
                className="author-image"
                src={author.image}
                alt="Michael_Lewis_2009"
            />
            <div className="biography-text">
                {author.biography}
            </div>
        </div>
    );
};

export default AuthorBiography;
