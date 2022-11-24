const contactList = document.querySelector("#contact-list");
const chatList = document.querySelector("#chat-list");

if (chatData)
  chatData.forEach((c) => {
    // create elements
    let chatItem = document.createElement("div");
    let chatItemImg = document.createElement("img");
    let chatItemName = document.createElement("p");
    let chatItemMessage = document.createElement("p");

    // populate data
    chatItemImg.src = c.profileUrl;
    chatItemImg.alt = c.name;
    chatItemName.appendChild(document.createTextNode(c.name));
    chatItemMessage.appendChild(
      document.createTextNode(c.chatData.length > 0 ? c.chatData[0].text : "")
    );

    // add classes
    chatItem.className = "chat-item";
    chatItemImg.className = "chat-item-img";
    chatItemName.className = "chat-item-name text-nowrap-overflow";
    chatItemMessage.className = "chat-item-message text-nowrap-overflow";

    // create relationship
    chatItem.appendChild(chatItemImg);
    chatItem.appendChild(chatItemName);
    chatItem.appendChild(chatItemMessage);
    chatItem.onclick = () => setChatData(c.userId);

    // append to root node
    console.log("chatItem", chatItem);
    contactList.appendChild(chatItem);
  });

const setChatData = (id) => {
  // <div id="left"><span class="chat">This message is received from friend</span><span class="timestamp">10.58pm</span</div>
  // <div id="right"><span class="chat">Hello!</span><span class="timestamp">10.58pm</span></div>
};
