// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';

const TIME_SPAN = 3 * 60 * 1000;
/**
 * Function to group messages based on their creation time
 *
 * @param {EveryMessage[]} messages - Array of messages to group
 * @returns {EveryMessage[]} - Array of messages grouped by creation time
 */
export function groupMessagesByShortSpanTime(
  messages: EveryMessage[]
): EveryMessage[] {
  // Create an object to group messages based on their creation time
  const groupedMessagesByCreatedAt = messages.reduce((groups, message, idx) => {
    const { createdAt, sender, messageType } = message;
    // Get the key of the previous group
    const prevKey = Object.keys(groups)[Object.keys(groups).length - 1];

    // Check if the time difference between the current message and the previous one is within 3 minutes
    if (
      prevKey &&
      createdAt - Number(prevKey) <= TIME_SPAN &&
      messageType !== 'admin' &&
      sender?.userId === messages[idx - 1]?.sender.userId
    ) {
      // Add the message to the existing group
      return {
        ...groups,
        [prevKey]: [...(groups[prevKey] ?? []), message],
      };
    } else {
      // Create a new group for the current message
      return {
        ...groups,
        [createdAt]: [message],
      };
    }
  }, {});

  // Flatten the grouped messages and add chain indicators
  return Object.values(groupedMessagesByCreatedAt).flatMap(
    (messages: EveryMessage[]) => {
      if (messages.length > 1) {
        // Add chain indicators to the first and last messages in the group
        return messages.map((message, index) => ({
          ...message,
          chaintop: index === 0,
          chainBottom: index === messages.length - 1,
        }));
      }
      return messages;
    }
  );
}

export function getBotWelcomeMessages(
  messages: EveryMessage[],
  botUserId: string
) {
  // if the list is empty or the first message is not from bot,
  // we just assume there's no welcome messages
  if (messages.length === 0 || messages[0]?.sender.userId !== botUserId) {
    return [];
  }

  // if the list has only bot messages, then just return the whole list
  if (messages.every((message) => message?.sender.userId === botUserId)) {
    return messages;
  }

  const firstUserMesssage = messages.find(
    (message) => message?.sender.userId !== botUserId
  );
  return messages.slice(0, messages.indexOf(firstUserMesssage));
}
