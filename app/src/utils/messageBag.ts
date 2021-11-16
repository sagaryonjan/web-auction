
export interface MessageBag {
  message: string;
  status: boolean;
}

export const defaultMessagBag: MessageBag = {
  message: '',
  status: false,
};

export const setSuccessMsg = (message: string): MessageBag => {
  return {
    status: true,
    message
  }
}