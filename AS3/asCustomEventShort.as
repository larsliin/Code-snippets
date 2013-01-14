// CHILD CLASS
PARENT_CLASS.dispatchEvent(new Event("CUSTOM_EVENT_TYPE"));

// PARENT CLASS
this.addEventListener("CUSTOM_EVENT_TYPE",callbackMethod);