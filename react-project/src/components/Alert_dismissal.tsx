interface props {
  children: string;
  onClose: () => void;
}

function Alert_dismissal({ children, onClose }: props) {
  return (
    <div className="alert alert-warning alert-dismissible " role="alert">
      <p>{children}</p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert_dismissal;
