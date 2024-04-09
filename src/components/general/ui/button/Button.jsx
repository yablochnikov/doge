import PropTypes from 'prop-types';
import './style.scss';

export default function Button({ title, linkTo, routeTo, style }) {
  if (linkTo) {
    return (
      <a className='ui-btn cen' href={linkTo} style={style} target='_blank'>
        {title}
      </a>
    );
  }

  if (routeTo) {
    return { title };
  }

  return <></>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  routeTo: PropTypes.string,
  style: PropTypes.object,
};
