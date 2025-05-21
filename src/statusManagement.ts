import { statusListControllerCrlFile, statusListControllerGetList } from './client'

export const statusManagement = {
  getStatusList: () => statusListControllerGetList(),
  getCrl: () => statusListControllerCrlFile(),
}
