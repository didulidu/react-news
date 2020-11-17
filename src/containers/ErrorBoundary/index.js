import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

export class ErrorBoundry extends Component {
  state = {
    eventId: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  showReportDialog = () => {
    Sentry.showReportDialog({ eventId: this.state.eventId });
  };

  render() {
    if (this.state.hasError) {
      // render fallback UI
      console.log('Erorcina', this.showReportDialog);
      if (this.props.fallbackUI) {
        return this.props.fallbackUI(this.showReportDialog);
      }

      return (
        <div>
          {/* <button onClick={this.showReportDialog}>
            {formatMessage(messages.reportFeedbackButton)}
          </button> */}
          {/* <a href="/">{formatMessage(messages.backLink)}</a> */}
        </div>
      );
    }

    // when there's not an error, render children untouched
    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  fallbackUI: PropTypes.func,
};

export default ErrorBoundry;
