import {
  type AccessCertificateControllerAccessCertificatesData,
  type AccessCertificateControllerDeleteData,
  type AccessCertificateControllerFindOneData,
  type AccessCertificateControllerFindOneParsedData,
  type AccessCertificateControllerRegisterData,
  accessCertificateControllerAccessCertificates,
  accessCertificateControllerDelete,
  accessCertificateControllerFindOne,
  accessCertificateControllerFindOneParsed,
  accessCertificateControllerRegister,
} from './client'

export const accessCertificate = {
  getAll: (options: AccessCertificateControllerAccessCertificatesData['path']) =>
    accessCertificateControllerAccessCertificates({ path: options }),
  addCertificate: (rp: string, options: AccessCertificateControllerRegisterData['body']) =>
    accessCertificateControllerRegister({ path: { rp }, body: options }),
  getCertificateById: (options: AccessCertificateControllerFindOneData['path']) =>
    accessCertificateControllerFindOne({ path: options }),
  getCertificateByIdParsed: (options: AccessCertificateControllerFindOneParsedData['path']) =>
    accessCertificateControllerFindOneParsed({ path: options }),
  deleteCertificateByid: (options: AccessCertificateControllerDeleteData['path']) =>
    accessCertificateControllerDelete({ path: options }),
}
