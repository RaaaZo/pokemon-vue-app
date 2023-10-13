export const replaceDynamicParamFromUrlWithReadableValue = (
  url: string,
  dynamicParam: string,
  readableValue: string
): string => {
  return url.replace(`:${dynamicParam}`, readableValue)
}
