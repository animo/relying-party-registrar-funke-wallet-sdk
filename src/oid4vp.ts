import {
  type Oid4VpControllerGetValidPidData,
  type Oid4VpControllerGetValidRequestData,
  oid4VpControllerGetValidPid,
  oid4VpControllerGetValidRequest,
  oid4VpControllerResponse,
  oid4VpControllerSuccess,
} from './client'

export const oid4vp = {
  getValidPid: (options: Oid4VpControllerGetValidPidData['query']) => oid4VpControllerGetValidPid({ query: options }),
  getValidRequest: (options: Oid4VpControllerGetValidRequestData['path']) =>
    oid4VpControllerGetValidRequest({ path: options }),
  response: () => oid4VpControllerResponse(),
  success: () => oid4VpControllerSuccess(),
}
