function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transitionduration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile Pic"
    />
  );
}

export default Avatar;
