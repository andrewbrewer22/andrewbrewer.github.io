// import React from "react";
// import { RiCloseLine } from "react-icons/ri";
// import "../styles/modal.css";

// const ContactModal = ({ setContactIsOpen }) => {
//     return (
//         <>
//             <div className="darkBG" onClick={() => setContactIsOpen(false)} />
//             <div className="centered">
//                 <div className="modal">
//                     <div className="modalHeader">
//                         <h5 className="heading">Dialog</h5>
//                     </div>
//                     <button className="closeBtn" onClick={() => setContactIsOpen(false)}>
//                         <RiCloseLine style={{ marginBottom: "-3px" }} />
//                     </button>
//                     <div className="modalContent">
//                         Are you sure you want to delete the item?
//                     </div>
//                     <div className="modalActions">
//                         <div className="actionsContainer">
//                             <button className="deleteBtn" onClick={() => setContactIsOpen(false)}>
//                                 Delete
//                             </button>
//                             <button className="cancelBtn" onClick={() => setContactIsOpen(false)}>
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ContactModal;