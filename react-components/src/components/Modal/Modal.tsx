import './Modal.scss';

const Modal = (props: {
  active: boolean;
  setActive: (arg0: boolean) => void;
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}) => {
  return (
    <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="card-img modal-img" src={props.image} alt="image" />
        <span className="modal-cross" onClick={() => props.setActive(false)}>
          X
        </span>
        <h3 className="card-title modal-title">{props.title}</h3>
        <div className="card-description">
          <p className="modal-desc">{props.content}</p>
          <div className="card-footer">
            <span>{props.date}</span>
            <span className="card-footer-price">{props.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
