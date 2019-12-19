import { NativeModules } from "react-native";

const { SGSkygearReactNative } = NativeModules;

export function randomBytes(length: number): Promise<number[]> {
  return SGSkygearReactNative.randomBytes(length);
}

export function sha256String(input: string): Promise<number[]> {
  return SGSkygearReactNative.sha256String(input);
}