import { Component } from 'react';
import { broadcastManager } from './BroadcastManager';

/**
 * React HOC that connects the given component to a {@see BroadcastChannel} using a {@see BroadcastManager}.
 * The component receives a new 'channel' prop. This prop is an instance of {@see Channel}.
 *
 * @param WrappedComponent
 * @param {string} channelName
 */
export const withBroadcastChannel = (WrappedComponent, channelName) => {
  const channel = broadcastManager()?.getChannel(channelName, true);

  return class extends Component {
    componentWillUnmount() {
      broadcastManager()?.closeChannel(channelName);
    }

    render() {
      return <WrappedComponent channel={channel} {...this.props} />;
    }
  };
};