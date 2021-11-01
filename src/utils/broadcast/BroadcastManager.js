let _broadcastManager;

/**
 * Get or create the unique broadcast manager.
 *
 * Usage example:
 * ```js
 * const channel = broadcastManager()?.getChannel('channel', true)
 * // emit a message
 * channel?.emit('message');
 * // subscribe
 * channel?.subscribe().onMessage(data => {
 *  console.log(data);
 * }
 * // close
 * channel?.close();
 * ```
 *
 * @return {undefined|BroadcastManager}
 */
export const broadcastManager = () => {
  if (!BroadcastChannel) {
    console.warn('BroadcastChannel API is not supported by your browser. If you use Safari, you need to explicitly activate the feature.');
    return;
  }

  if (!_broadcastManager) {
    _broadcastManager = new BroadcastManager()
  }
  return _broadcastManager;
}


/**
 * This is a cross-tab broadcast channel manager. It's an abstraction over the {@see BroadcastChannel} API.
 * <p>It ensures that we are not using the same channel name multiple times.
 * <p>It gives a nice way to emit and to subscribe to events.
 */
class BroadcastManager {
  /**
   * Channels
   *
   * @type {Map<string, Channel>}
   * @private
   */
  _channels = new Map();

  /**
   * Gets the channel identified by the given name. It has the ability to create the channel if the createIfAbsent
   * parameter is true.
   *
   * @param {string} name
   * @param {boolean} createIfAbsent
   * @return {Channel|undefined}
   */
  getChannel(name, createIfAbsent = false) {
    let channel = this._channels.get(name);
    if (!channel && createIfAbsent) {
      channel = new Channel(this, name);
      this._channels.set(name, channel);
    }
    return channel;
  }

  /**
   * Close the channel identified by the given name.
   *
   * @param {string} name
   */
  closeChannel(name) {
    this._channels.get(name)?.close();
  }

  /**
   * Close all channels.
   */
  clear() {
    this._channels.forEach(channel => {
      channel.close();
    });
    // this._channels.clear();
  }

  /**
   *
   * @param {Channel} channel
   * @private
   */
  _notifyChannelClosed(channel) {
    this._channels.delete(channel.name);
  }
}



/**
 * Channel
 */
class Channel {
  /**
   * @type {BroadcastManager}
   * @private
   */
  _manager;
  /**
   * @type {BroadcastChannel}
   * @private
   */
  _broadcastChannel;
  /**
   *
   * @type {Array<Subscription>}
   * @private
   */
  _subscribers = [];

  /**
   *
   * @param {BroadcastManager} manager
   * @param {string} name
   */
  constructor(manager, name) {
    this._manager = manager;
    this._broadcastChannel = new BroadcastChannel(name);

    this._broadcastChannel.onmessage = (ev => {
      this._subscribers.forEach(s => s._onMessageEvent(ev));
    });
    this._broadcastChannel.onmessageerror = (ev => {
      this._subscribers.forEach(s => s._onErrorEvent(ev));
    });
  }

  get name() {
    return this._broadcastChannel.name;
  }

  /**
   * Subscribes to event emitted on this channel
   *
   * @return {Subscription}
   */
  subscribe() {
    const subscriber = new Subscription();
    this._subscribers.push(subscriber);
    return subscriber;
  }

  /**
   * Unsubscribe the given subscriber.
   *
   * @param {Subscription} subscriber
   */
  unsubscribe(subscriber) {
    const index = this._subscribers.indexOf(subscriber);
    if (index > -1) {
      this._subscribers.splice(index, 1);
    }
  }

  /**
   * Emits a message along with the given data. All subscribers to this channel will receive the message.
   *
   * @param {any} data
   */
  emit(data) {
    this._broadcastChannel.postMessage(data);
  }

  /**
   * Closes this channel
   */
  close() {
    this._subscribers.splice(0, this._subscribers.length);
    this._broadcastChannel.close();
    this._manager._notifyChannelClosed(this);
  }
}



/**
 * Represent a subscription to a channel. Nothing happen until you specify the callbacks by using onMessage and onError
 * setters.
 */
class Subscription {
  /**
   * Function called when receiving a message
   *
   * @type {SubscriptionCallback}
   * @private
   */
  _onMessage;

  /**
   * Function called when receiving an error message
   *
   * @type {SubscriptionCallback}
   * @private
   */
  _onError;

  /**
   * Sets the callback to call when receiving a message
   *
   * @param {SubscriptionCallback} callback
   * @return {Subscription} this subscriber
   */
  onMessage(callback) {
    this._onMessage = callback;
    return this;
  }

  /**
   * Sets the callback to call when receiving an error message
   *
   * @param {SubscriptionCallback} callback
   * @return {Subscription} this subscriber
   */
  onError(callback) {
    this._onError = callback;
    return this;
  }

  /**
   * This method is called by the {@see Channel} when channel receives an event.
   *
   * @param {MessageEvent} event
   */
  _onMessageEvent(event) {
    this._onMessage?.(event.data, event);
  }

  /**
   * This method is called by the {@see Channel} when channel receives an error event.
   *
   * @param {MessageEvent} event
   */
  _onErrorEvent(event) {
    this._onError?.(event.data, event);
  }
}

/**
 * @callback SubscriptionCallback
 * @param {any} data -  the data that was emitted
 * @param {MessageEvent} event - The raw message event received from {@see BroadcastChannel}.
 */