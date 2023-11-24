import PropTypes from 'prop-types';

const SectionTitle = (props) => {
  const { heading, subHeading } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-colorOne font-bold font-cinzel uppercase py-4">
        {heading}
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-cinzel font-semibold text-colorFour tracking-widest capitalize py-4 border-b-2 border-colorFive">
        {subHeading}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
