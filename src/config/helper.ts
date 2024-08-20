import secret from './secret'

export const logInfo = (msg: any, ...optionalParams: any[]) => {
  if (secret.APP_MODE === 'development') {
    // eslint-disable-next-line no-console
    console.log(msg, optionalParams)
  }
}
