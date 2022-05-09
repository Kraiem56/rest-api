import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Editer } from './redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Editusers = ({users}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [FullName, setFullName] = useState(users.FullName)
  const [Age, setAge] = useState(users.Age)
  const dispatch=useDispatch()
  const handelsubmit=(e)=>{
    e.preventDefault();
    const editone={
      FullName,Age,_id:users._id
    }
    dispatch(Editer(editone))
    closeModal()
    
  }
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
       <button onClick={openModal}>EDIT</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handelsubmit}>
          <section>
            <label>Fullname</label>
            <input type="text" value={FullName} onChange={(e)=>setFullName(e.target.value)} />
          </section>
          <section>
            <label>Age</label>
            <input type="Number" value={Age} onChange={(e)=>setAge(e.target.value)} />
          </section>
     
           <button type='submit' >Confirm</button>
          
        </form>
      </Modal>
    </div>
  )
}

export default Editusers