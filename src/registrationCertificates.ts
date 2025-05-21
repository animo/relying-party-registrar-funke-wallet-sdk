import {
  type RegistrationCertificateControllerAllData,
  type RegistrationCertificateControllerDeleteData,
  type RegistrationCertificateControllerFindOneData,
  type RegistrationCertificateControllerFindOneDecodedData,
  type RegistrationCertificateControllerRegisterData,
  registrationCertificateControllerAll,
  registrationCertificateControllerDelete,
  registrationCertificateControllerFindOne,
  registrationCertificateControllerFindOneDecoded,
  registrationCertificateControllerRegister,
} from './client'

export const registrationCertificates = {
  getAll: (options: RegistrationCertificateControllerAllData['path']) =>
    registrationCertificateControllerAll({ path: options }),
  addCertificate: (rp: string, options: RegistrationCertificateControllerRegisterData['body']) =>
    registrationCertificateControllerRegister({ path: { rp }, body: options }),
  getById: (options: RegistrationCertificateControllerFindOneData['path']) =>
    registrationCertificateControllerFindOne({ path: options }),
  deleteCertificateById: (options: RegistrationCertificateControllerDeleteData['path']) =>
    registrationCertificateControllerDelete({ path: options }),
  getJwsDecodedById: (options: RegistrationCertificateControllerFindOneDecodedData['path']) =>
    registrationCertificateControllerFindOneDecoded({ path: options }),
}
