import { broadcastManager } from './BroadcastManager';

const postMessageMock = jest.fn();
const closeMock = jest.fn();

class BroadcastChannelMock {
  _name;
  onmessage;
  onmessageerror;

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  close() {
    closeMock();
  }

  postMessage(message) {
    postMessageMock(message);
    if (this.onmessage) {
      this.onmessage({ data: message });
    }
  }
}

window.BroadcastChannel = BroadcastChannelMock;


it('should post message when emitting', () => {
  broadcastManager().getChannel('channel', true).emit('message');
  expect(postMessageMock).toHaveBeenNthCalledWith(1, 'message');
  broadcastManager().getChannel('channel').close();
});

it('should close when closing channel', () => {
  broadcastManager().getChannel('channel', true).close();
  expect(closeMock).toBeCalledTimes(1);
  expect(broadcastManager().getChannel('channel')).toBeUndefined();
});

it('should close when closing channel by name', () => {
  broadcastManager().getChannel('channel', true);
  broadcastManager().closeChannel('channel');
  expect(closeMock).toBeCalledTimes(1);
  expect(broadcastManager().getChannel('channel')).toBeUndefined();
});

it('should close all when clearing', () => {
  broadcastManager().getChannel('channel1', true);
  broadcastManager().getChannel('channel2', true);
  broadcastManager().clear();
  expect(closeMock).toBeCalledTimes(2);
  expect(broadcastManager().getChannel('channel1')).toBeUndefined();
  expect(broadcastManager().getChannel('channel2')).toBeUndefined();
});

it('should receive event when subscribed', () => {
  const callback = jest.fn();

  let channel = broadcastManager().getChannel('channel1', true);
  channel.subscribe().onMessage(callback);
  channel.emit('message');

  expect(callback).toHaveBeenNthCalledWith(1, 'message', { data: 'message' });
});

it('should not receive event when unsubscribed', () => {
  const callback = jest.fn();

  let channel = broadcastManager().getChannel('channel1', true);
  let subscription = channel.subscribe().onMessage(callback);
  channel.unsubscribe(subscription);
  channel.emit('message');

  expect(callback).not.toHaveBeenCalled();
});
