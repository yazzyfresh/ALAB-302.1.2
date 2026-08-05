function Article({ date, title, image }) {
  return (
    <article>
      <p className="date">{date}</p>

      <h2>{title}</h2>

      <img src={image} alt={title} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
        ligula porta felis euismod semper. Curabitur blandit tempus porttitor.
      </p>

      <a href="#" className="continue">
        Continues...
      </a>
    </article>
  );
}

export default Article;
