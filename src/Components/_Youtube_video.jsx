// _Youtube_video.js
import React from "react";
import PropTypes from "prop-types";

const _Youtube_video = ({ embedId, atribute }) => (
  <iframe
    className={`video-responsive my-2 ${atribute}`}
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    title="Embedded youtube"
    loading="lazy"
  />
);

_Youtube_video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default _Youtube_video;
