import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
