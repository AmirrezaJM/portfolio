aria-live: popup message like toast
aria-atomic: false read the newest message not all of them  / true read all of them 
aria-relevant: what changes is actually used 
aria-live: assetive stop all the actions and entire page goes blank and do the action and read it and it won't back until it finishes saying save data 
you actually you need to immidietly to notify user that there is some type of change 
aria-live: polite wait for whatever is being currently said to them by screen reader, it'll wait until there is good time for the actual update to go through

aria-label: input itself

aria-labelledby:input -> parent div



tabIndex -> positive should not never to be used 
tabIndex -> 0 means it can be tabable and they can reach it by tab key
tabIndex -> -1 can not be reached by tab key but can be used programmatically 
inert -> if true it will ignore the tab feature because it's not rendered (Drawer) 
minimum size for any interactive element is 24px x 24px and even recommended by going to 44px x 44px 

<!-- new CSS props -->
corner-shape: 
corner-top-right-shape:  


<!-- CSS pseudo-elements and classes -->
:focus
:focus-visible -> on buttons when click it does not appear
:focus-within -> container 