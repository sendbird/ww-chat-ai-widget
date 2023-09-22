import ChatAiWidget from './components/ChatAiWidget'; //import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import { Constant } from './const';

const USER_ID = 'user_a';
const USER_NICKNAME = 'User';

interface Props extends Partial<Constant> {
  applicationId?: string;
  botId?: string;
  hashedKey?: string;
}

const App = (props: Props) => {
  return (
    <ChatAiWidget
      applicationId={props.applicationId}
      botId={props.botId}
      botNickName={props.botNickName}
      userId={USER_ID}
      userNickName={USER_NICKNAME}
      betaMark={props.betaMark}
      customBetaMarkText={props.customBetaMarkText}
      suggestedMessageContent={props.suggestedMessageContent}
      firstMessageData={props.firstMessageData}
      createGroupChannelParams={props.createGroupChannelParams}
      startingPageContent={props.startingPageContent}
      chatBottomContent={props.chatBottomContent}
      messageBottomContent={props.messageBottomContent}
      replacementTextList={props.replacementTextList}
      hashedKey={props.hashedKey}
      instantConnect={props.instantConnect}
      customRefreshComponent={props.customRefreshComponent}
      configureSession={props.configureSession}
      enableSourceMessage={props.enableSourceMessage}
      enableEmojiFeedback={props.enableEmojiFeedback}
    />
  );
};

export default App;
