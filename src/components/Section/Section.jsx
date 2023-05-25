import propTypes from 'prop-types';

const Section = ({ title, childen }) => (
  <section>
    <h4> {title}</h4>
    {childen}
  </section>
);

export default Section;

Section.propTypes = {
  title: propTypes.string,
  childen: propTypes.element,
};
