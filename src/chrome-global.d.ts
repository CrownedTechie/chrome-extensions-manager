/// <reference types="chrome"/>

declare global {
 interface Window {
  chrome: typeof chrome;
 }

 interface IUpdateQueryParams {
  key: string;
  value: string | null;
 }

 interface IToggleExtensionPayload {
  id: string;
  enable: boolean;
 }

 interface IToggleExtensionMessage {
  type: "toggleExtension";
  payload: IToggleExtensionPayload;
 }

 interface ISuccessProps {
  success?: boolean;
  error?: string;
 }

 interface ChromeExtensionInfo extends chrome.management.ExtensionInfo { }

}

export { };