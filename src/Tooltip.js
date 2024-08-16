import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus',
};

class Tooltip extends React.Component {
  render() {
    const arrowClasses = classNames('tooltip-arrow', this.props.arrowClassName);
    const popperClasses = classNames('tooltip', 'show', this.props.popperClassName);
    const classes = classNames('tooltip-inner', this.props.innerClassName);

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

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
