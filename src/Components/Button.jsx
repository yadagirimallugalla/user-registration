import PropTypes from "prop-types";
export default function Button({ label, type, color, handleBtnClick }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type={type}
      style={{ backgroundColor: color }}
      onClick={handleBtnClick}
    >
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  handleBtnClick: PropTypes.func,
};
