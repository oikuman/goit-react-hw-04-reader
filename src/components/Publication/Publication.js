import React from "react";
import PropTypes from "prop-types";
import css from "./Publication.module.css";

const Publication = ({ article }) => {
    return (
        <article className={css.publication}>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
        </article>
    );
};

Publication.propTypes = {
    article: PropTypes.object.isRequired
};

export default Publication;
