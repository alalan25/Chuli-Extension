//alert('Cyber Bullying Detected')
chrome.runtime.onMessage.addListener(function (request,sender,Promise){
    const re = new RegExp('fomo', 'gi')
    const matches =  document.documentElement.innerHTML.match(re)
     Promise({count: matches.length})
    
})