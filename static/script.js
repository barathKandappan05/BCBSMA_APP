function loadiFrame(url) {
    let x = document.createElement("IFRAME");
    x.setAttribute("src", url);
    x.setAttribute("style", "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:99;");
    document.body.appendChild(x);
}

function sendMessage() {
    /**
     * Use data object and postMessage to URL provided (postMessage to child frame)
     * @param {Object} data - data to be sent to url provided of child frame
     * @returns - no return
     */

    var receiverElem = document.getElementById('receiver').contentWindow;
    receiverElem.postMessage({actionType: 'ameliaConversationAttributes', actionData: {test: 'testing some stuff'}}, "https://bcbsma.demo.amelia.com/Amelia/ui/BSBSMA/chat");
}

function grabData() {
    let ameliaUrl = "https://bcbsma.demo.amelia.com/Amelia/ui/bcbsma/?domainCode=bcbsma&loggedin=no"
    let clientUrl = "https://www.bluecrossma.org/myblue"
    let link = document.getElementById('receiver')
    link.src = ameliaUrl
    let clientLink = document.getElementById('originalFrame')
    clientLink.src = clientUrl
}