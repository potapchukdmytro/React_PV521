import "./AuthorBiography.css";

const AuthorBiography = ({name, image, biography}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img
                className="author-image"
                src={image}
                alt="Michael_Lewis_2009"
            />
            <div className="biography-text">
                {biography}
            </div>
        </div>
    );
};

export default AuthorBiography;
