export default function MostrarTexts(props) {
  return (
    <>
      {props.posts.map((post) => (
        <div
          className="Titol"
          key={post.id}
          onClick={() => props.clicat(post.text, post.id)}
        >
          <label>{post.titol}</label>
          {props.id === post.id ? (
            <div className={props.clase}>
              <p>{props.titol}</p>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
