import "../sidebar.scss";
const ToggleButton = ({ setOpen }) => {
  return (
    <div>
      <button className="button" onClick={() => setOpen((prev) => !prev)}>
        <svg
          fill="#000000"
          viewBox="-8 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>menu</title>{" "}
            <path d="M15.4 12.6h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84 0.040 0.44-0.36 0.84-0.8 0.84zM15.4 16.84h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.8 0.84zM15.4 21.080h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.8 0.84z"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ToggleButton;
