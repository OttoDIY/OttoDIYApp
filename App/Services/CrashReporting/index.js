import Config from 'react-native-config'
import * as Sentry from '@sentry/react-native'

import { enrichProperties } from 'App/Services/Properties'

const isCrashReportingEnabled = () => {
  return !__DEV__
}

export const initCrashReporting = () => {
  if (isCrashReportingEnabled()) {
    Sentry.init({dsn: Config.SENTRY_DNS})
  }
}

export const captureUser = (user) => {
  if (!user) {
    return
  }
  if (isCrashReportingEnabled()) {
    Sentry.setUserContext({
      // email: user.email, // TODO Probably NOT a good idea to share the user's email with Sentry for security purposes
      userID: user.id,
      extra: enrichProperties()
    })
  }
}

export const resetUser = () => {
  if (isCrashReportingEnabled()) {
    Sentry.setUserContext({
      // email: null, // TODO See TODO in captureUser method
      userID: null,
      extra: {}
    })
  }
}

export const captureAPIError = (message, errorResponse) => {
  console.warn(message)
  console.warn(errorResponse)

  if (isCrashReportingEnabled()) {
    const extra = (errorResponse)
      ? { errorResponse }
      : {}
    Sentry.captureMessage(message, {
      level: Sentry.Severity.Error,
      extra: enrichProperties(extra)
    })
  }
}

export const captureException = (message, e) => {
  console.error(message)
  console.error(e)

  if (isCrashReportingEnabled()) {
    const extra = { message }
    Sentry.captureException(e, {
      extra: enrichProperties(extra)
    })
  }
}
