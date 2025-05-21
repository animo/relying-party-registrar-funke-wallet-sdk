import {
  type RelyingPartyControllerFindAllData,
  type RelyingPartyControllerRegisterData,
  type RelyingPartyControllerRemoveData,
  relyingPartyControllerFindAll,
  relyingPartyControllerRegister,
  relyingPartyControllerRemove,
} from './client'

export const relyingParties = {
  getAll: (options: RelyingPartyControllerFindAllData['query']) => relyingPartyControllerFindAll({ query: options }),
  register: (options: RelyingPartyControllerRegisterData['body']) => relyingPartyControllerRegister({ body: options }),
  remove: (options: RelyingPartyControllerRemoveData['path']) => relyingPartyControllerRemove({ path: options }),
}
