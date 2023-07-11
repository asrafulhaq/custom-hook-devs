import useToggle from "../../hook/useToggle";
import Modal from "../Modal/Modal";

const Home = () => {
  const { isOpen, handleToggle, toggleRef } = useToggle();
  const { isOpen: isModal, handleToggle: hanldeModal } = useToggle();
  return (
    <>
      <div className="menu" ref={toggleRef}>
        <button onClick={handleToggle}>Menu</button>
        {isOpen && (
          <div className="menu-list">
            <ul>
              <li>Alo</li>
              <li>Potol</li>
              <li>lao</li>
              <li>Kumra</li>
            </ul>
          </div>
        )}
      </div>

      <div className="modal-f">
        <button onClick={hanldeModal}>Open</button>
        {isModal && <Modal handleToggle={hanldeModal} />}
      </div>
    </>
  );
};

export default Home;
