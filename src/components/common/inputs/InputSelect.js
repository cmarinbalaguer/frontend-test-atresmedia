import PropTypes from 'prop-types';

export const InputSelect = (
  {
    list,
    handleBreed,
    label
  }) => {
  return (
    <select
      onChange={(e) => handleBreed(e.currentTarget.value)}
    >
      <option value="">{label}</option>
      {list.map((li, i) => (
        <option key={i} value={li}>
          {li}
        </option>
      ))}
    </select>
  )
}

InputSelect.propTypes = {
  list: PropTypes.array.isRequired,
  handleBreed: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
