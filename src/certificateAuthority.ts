import { cryptoControllerOwnCert, cryptoControllerOwnCertParsed } from './client'

export const certificateAuthority = {
  getCertificate: () => cryptoControllerOwnCert(),
  getFormattedCertificate: () => cryptoControllerOwnCertParsed(),
}
