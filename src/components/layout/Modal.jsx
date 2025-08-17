const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black/50">
      {/* Modal container */}
      <div className="bg-white rounded-2xl shadow-xl max-w-[60%] w-full p-6 relative animate-fadeIn">
        {children}
      </div>
    </div>
  );
};

export default Modal;
