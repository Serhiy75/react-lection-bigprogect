import { PropTypes } from 'prop-types';

export const Header = ({ children }) => {
  return (
    <header className="pb-4">
      <h1>{children}</h1>
    </header>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
};
