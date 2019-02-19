import { ISettings } from '../types'
import { defaultSettings } from '../state/workspace/reducers'

export interface Colours {
  green: string
  darkBlue: string
  darkBlue50: string
  darkBlue60: string
  darkBlue80: string
  darkBlue30: string
  darkBlue20: string
  darkBlue10: string
  darkerBlue: string
  darkestBlue: string
  white80: string
  white70: string
  white60: string
  white30: string
  white20: string
  white10: string
  white: string
  black02: string
  black04: string
  black07: string
  black10: string
  black30: string
  black40: string
  black50: string
  paleText: string
  paleGrey: string
  red: string
  blue: string
  orange: string
  purple: string
  lightGrey: string
  lighterGrey: string
  // New dynamic styles
  text: string
  textInactive: string
}

export interface EditorColours {
  property: string
  comment: string
  punctuation: string
  keyword: string
  def: string
  qualifier: string
  attribute: string
  number: string
  string: string
  builtin: string
  string2: string
  variable: string
  meta: string
  atom: string
  ws: string
  selection: string
  cursorColor: string

  text: string
  textInactive: string
  background: string
  sidebarTop: string
  sidebar: string
  sidebarBottom: string
  sidebarItemActive: string
  sidebarItemSide: string
  sidebarItemSessions: string
  tab: string
  tabInactive: string
  tabText: string
  navigationBar: string
  navigationBarText: string
  editorBackground: string
  resultBackground: string
  leftDrawerBackground: string
  rightDrawerBackground: string
  drawerText: string
  drawerTextInactive: string
  executeButton: string
  executeButtonBorder: string
  executeButtonHover: string
  executeButtonSubscription: string
  executeButtonSubscriptionHover: string
  icon: string
  iconHover: string
  pollingIcon: string
  pollingIconShadow: string
  button: string
  buttonHover: string
  buttonText: string
  buttonWorkspace: string
  buttonWorkspaceHover: string
  buttonWorkspaceText: string
  circle: string
}

export const darkColours: Colours = {
  green: '#50fa7b',
  darkBlue: '#6272a4',
  darkBlue50: '#6272a450',
  darkBlue80: '#6272a480',
  darkBlue60: '#6272a460',
  darkBlue30: '#6272a430',
  darkBlue20: '#6272a420',
  darkBlue10: '#6272a410',
  darkerBlue: '#343746',
  darkestBlue: '#282a36',
  white10: 'rgba(255, 255, 255, 0.1)',
  white20: 'rgba(255, 255, 255, 0.2)',
  white30: 'rgba(255, 255, 255, 0.3)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white70: 'rgba(255, 255, 255, 0.7)',
  white80: 'rgba(255, 255, 255, 0.8)',
  white: 'rgba(255, 255, 255, 1)',
  black02: 'rgba(0, 0, 0, 0.02)',
  black07: 'rgba(0, 0, 0, 0.07)',
  black04: 'rgba(0, 0, 0, 0.04)',
  black10: 'rgba(0, 0, 0, 0.1)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black40: 'rgba(0, 0, 0, 0.4)',
  black50: 'rgba(0, 0, 0, 0.5)',
  red: '#ff5555',
  orange: '#ffb86c',
  blue: 'rgb(51,147,220)',
  purple: '#bd93f9',

  paleText: 'rgba(0, 0, 0, 0.5)',
  paleGrey: '#f3f4f4', // use for bgs, borders, etc
  lightGrey: '#eeeff0',
  lighterGrey: '#f6f7f7',
  // New colors
  text: '#f8f8f2',
  textInactive: '#6272a4',
}

export const lightColours: Colours = {
  green: '#50fa7b',
  darkBlue: '#6272a4',
  darkBlue50: '#6272a450',
  darkBlue80: '#6272a480',
  darkBlue60: '#6272a460',
  darkBlue30: '#6272a430',
  darkBlue20: '#6272a420',
  darkBlue10: '#6272a410',
  darkerBlue: '#343746',
  darkestBlue: '#282a36',
  white10: 'rgba(255, 255, 255, 0.1)',
  white20: 'rgba(255, 255, 255, 0.2)',
  white30: 'rgba(255, 255, 255, 0.3)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white70: 'rgba(255, 255, 255, 0.7)',
  white80: 'rgba(255, 255, 255, 0.8)',
  white: 'rgba(255, 255, 255, 1)',
  black02: 'rgba(0, 0, 0, 0.02)',
  black04: 'rgba(0, 0, 0, 0.04)',
  black10: 'rgba(0, 0, 0, 0.1)',
  black07: 'rgba(0, 0, 0, 0.07)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black40: 'rgba(0, 0, 0, 0.4)',
  black50: 'rgba(0, 0, 0, 0.5)',
  red: '#ff5555',
  orange: '',
  blue: 'rgba(42, 126, 210, 1)',
  purple: 'rgb(164, 3, 111)',
  paleText: 'rgba(0, 0, 0, 0.5)',
  paleGrey: '#f3f4f4', // use for bgs, borders, etc
  lightGrey: '#eeeff0',
  lighterGrey: '#f6f7f7',
  // New colors
  text: 'rgba(0,0,0,.7)',
  textInactive: 'rgba(0,0,0,.3)',
}

export const darkEditorColours: EditorColours = {
  property: '#66d9ef',
  comment: '#6272a4',
  punctuation: '#FF79C6',
  keyword: '#ff79c6',
  def: '#50fa7b',
  qualifier: '#50fa7b',
  attribute: '#50fa7b',
  number: '#bd93f9',
  string: '#f1fa8c',
  builtin: '#50fa7b',
  string2: '#f1fa8c',
  variable: '#50fa7b',
  meta: '#f8f8f2',
  atom: '#bd93f9',
  ws: '#f8f8f2',
  selection: 'rgba(255, 255, 255, 0.10)',
  cursorColor: '#f8f8f0',
  text: '#f8f8f2',
  textInactive: 'rgba(255, 255, 255, 0.6)',
  background: '#282a36',
  sidebarTop: '#0f202d',
  sidebar: '#191a21',
  sidebarBottom: '#191a21',
  sidebarItemActive: 'rgb(23, 42, 58)',
  sidebarItemSide: '#27ae60',
  sidebarItemSessions: 'rgba(255, 255, 255, 0.05)',
  tab: '#191a21',
  tabInactive: '#21222c',
  tabText: '#f8f8f2',
  navigationBar: '#191a21',
  navigationBarText: '#f8f8f2',
  editorBackground: '#282a36',
  resultBackground: '#191a21',
  leftDrawerBackground: '#191a21',
  rightDrawerBackground: '#191a21',
  drawerText: 'rgba(255,255,255,0.6)',
  drawerTextInactive: '#6272a4',
  executeButton: '#6272a4',
  executeButtonBorder: 'transparent',
  executeButtonHover: '#bd93f9',
  executeButtonSubscription: '#ff5555',
  executeButtonSubscriptionHover: '#ff555550',
  icon: '#fff',
  iconHover: 'rgba(255, 255, 255, 0.6)',
  pollingIcon: '#6272a4',
  pollingIconShadow: 'rgba(139, 149, 156, 0.4)',
  button: '#44475a',
  buttonHover: '#191a21',
  buttonText: '#f8f8f2',
  buttonWorkspace: '#bd93f9',
  buttonWorkspaceHover: '#6272a4',
  buttonWorkspaceText: '#f8f8f2',
  circle: 'rgba(255, 255, 255, 0.4)',
}

export const lightEditorColours: EditorColours = {
  property: '#328c8c', //
  comment: 'rgba(0, 0, 0, 0.3)', //
  punctuation: 'rgba(23,42,58,.8)', //
  keyword: '#366b6b', //
  def: 'rgb(56, 189, 193)', //
  qualifier: '#1c92a9', //
  attribute: '#b56531', //
  number: '#1f6ed6;', //
  string: '#d64292', //
  builtin: '#d47509', //
  string2: '#0b7fc7', //
  variable: 'rgb(236, 95, 103)', //
  meta: '#b33086', //
  atom: 'rgb(245, 160, 0)', //
  ws: 'rgba(23, 42, 58, 0.8)', //
  selection: '#d1e9fd',
  cursorColor: 'rgba(0, 0, 0, 0.4)',
  text: 'rgba(0, 0, 0, 0.7)',
  textInactive: 'rgba(0, 0, 0, 0.3)',
  background: '#dbdee0',
  sidebarTop: '#eeeff0',
  sidebar: '#eeeff0',
  sidebarBottom: '#f6f7f7',
  sidebarItemActive: '#f6f7f7',
  sidebarItemSide: '#27ae60',
  sidebarItemSessions: '#dbdee0',
  tab: '#eeeff0',
  tabInactive: '#e7eaec',
  tabText: '#fff',
  navigationBar: '#eeeff0',
  navigationBarText: '#f8f8f2',
  editorBackground: '#f6f7f7',
  resultBackground: '#eeeff0',
  leftDrawerBackground: '#e9eaea',
  rightDrawerBackground: '#e5e7e7',
  drawerText: 'rgba(0, 0, 0, 0.7)',
  drawerTextInactive: 'rgba(0, 0, 0, 0.3)',
  executeButton: 'rgb(115, 127, 136)',
  executeButtonBorder: '#eeeff0',
  executeButtonHover: '',
  executeButtonSubscription: '#f25c54',
  executeButtonSubscriptionHover: '#f36c65',
  icon: 'rgb(194, 200, 203)',
  iconHover: 'rgba(23, 42, 58, 0.6)',
  pollingIcon: 'rgba(139, 149, 156, 1)',
  pollingIconShadow: 'rgba(139, 149, 156, 0.4)',
  button: '#d8dbde',
  buttonHover: 'rgba(20, 37, 51, 0.2)',
  buttonText: 'rgba(23, 42, 58, 0.8)',
  buttonWorkspace: 'rgb(185, 191, 196)',
  buttonWorkspaceHover: 'rgb(157, 166, 173)',
  buttonWorkspaceText: 'rgb(238, 239, 240)',
  circle: 'rgba(23,42,58,.4)',
}

export interface Sizes {
  small6: string
  small10: string
  small12: string
  small16: string
  medium25: string
  smallRadius: string
  fontLight: string
  fontSemiBold: string
  fontTiny: string
  fontSmall: string
  fontMedium: string
}

export const sizes: Sizes = {
  small6: '6px',
  small10: '10px',
  small12: '12px',
  small16: '16px',
  medium25: '25px',

  // font weights
  fontLight: '300',
  fontSemiBold: '600',

  // font sizes
  fontTiny: '12px',
  fontSmall: '14px',
  fontMedium: '20px',

  // others
  smallRadius: '2px',
}

export interface Shorthands {
  [x: string]: any
}

export const shorthands: Shorthands = {}

export interface ThemeInterface {
  mode: 'light' | 'dark'
  colours: Colours
  sizes: Sizes
  shorthands: Shorthands
  editorColours: EditorColours
  settings: ISettings
}

export const theme: any = {
  mode: 'dark',
  colours: darkColours,
  sizes,
  shorthands,
  editorColours: darkEditorColours,
  settings: defaultSettings,
}
