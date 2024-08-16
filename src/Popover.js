import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
  offset: [0, 8],
};

class Popover extends React.Component {
  render() {
    const arrowClasses = classNames('popover-arrow', this.props.arrowClassName);
    const popperClasses = classNames('popover', 'show', this.props.popperClassName);
    const classes = classNames('popover-inner', this.props.innerClassName);

    return (
      <TooltipPopoverWrapper
        {...this.props}
        arrowClassName={arrowClasses}
        popperClassName={popperClasses}
        innerClassName={classes}
      />
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
