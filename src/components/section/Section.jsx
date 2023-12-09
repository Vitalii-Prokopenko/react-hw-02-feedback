import PropTypes from 'prop-types';
import css from '../section/section.module.css';

const Section = ({title, component}) => (
    <section className={css['section']}>
        <p className={css['title']}>{title}</p>
        {component}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
}

export default Section;
