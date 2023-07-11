const Modal = ({ handleToggle }) => {
  return (
    <div className="modal-area toggle-close">
      <div className="modal">
        <div className="modal-body">
          <button onClick={handleToggle}>x</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            vero nisi, minus pariatur voluptatibus perferendis dignissimos
            suscipit consequuntur cumque officiis quod ipsam eum alias aliquam
            eveniet inventore asperiores ullam totam laborum ratione
            necessitatibus delectus ut sint sed. Magnam eos voluptate ratione.
            Voluptas exercitationem a tempore rem illum nam, cupiditate odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
