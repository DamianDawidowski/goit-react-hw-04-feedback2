import propTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h4> {title}</h4>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: propTypes.string,
  childen: propTypes.element,
};
