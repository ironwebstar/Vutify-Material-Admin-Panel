const Menu = [
  { header: 'Menu' },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard'
  },
  {
    title: 'Doctors',
    group: 'widgets',
    component: 'component',
    icon: 'widgets',
    name: 'Doctors'
  },
  // {
  //   title: 'Forms',
  //   group: 'widgets',
  //   component: 'widgets',
  //   icon: 'widgets',
  //   items: [
  //     { name: 'form_basic', title: 'Form Basic', component: 'widgets/basic' },
  //     { name: 'form_selection-control', title: 'From Selection Controls', badge: 'new', component: 'components/selection-controls' },
  //     { name: 'chart', title: 'Chart', component: 'components/chart' },
  //     { name: 'list', title: 'List', component: 'components/widget-list' }
  //     // { name: 'post', title: 'Post', component: 'components/widget-post' },
  //   ]
  // }
  // { header: 'UI Elements' },
  // {
  //   title: 'General',
  //   group: 'components',
  //   component: 'components',
  //   icon: 'tune',
  //   items: [
  //     { name: 'alerts', title: 'Alerts', component: 'components/alerts' },
  //     { name: 'avatars', title: 'Avatars', component: 'components/avatars' },
  //     { name: 'badges', title: 'Badges', component: 'components/badges' },
  //     { name: 'buttons', title: 'Buttons', component: 'components/buttons' },
  //     { name: 'cards', title: 'Cards', component: 'components/cards' },
  //     { name: 'carousels', title: 'Carousels', component: 'components/carousels' },
  //     { name: 'chips', title: 'Chips', component: 'components/chips' },
  //     { name: 'dialogs', title: 'Dialogs', component: 'components/dialogs' },
  //     { name: 'icons', title: 'Icons', component: 'components/icons' },
  //     { name: 'tables', title: 'Data Tables', component: 'components/tables' },
  //     { name: 'parallax', title: 'Parallax  image', component: 'components/parallax' },
  //     { name: 'snackbar', title: 'Snackbar', component: 'components/snackbar' },
  //     { name: 'progress', title: 'Progress', component: 'components/progress' },
  //     { name: 'slider', title: 'Slider', component: 'components/sliders' },
  //     { name: 'tooltip', title: 'Tooltip', component: 'components/tooltips' },
  //     { name: 'pagination', title: 'Pagination', component: 'components/paginations' },
  //     { name: 'typography', title: 'Typography', component: 'components/typography' },
  //     { name: 'color', title: 'Color', component: 'components/color' }
  //   ]
  // },
  // {
  //   title: 'Pickers',
  //   group: 'pickers',
  //   component: 'picker',
  //   icon: 'filter_vintage',
  //   items: [
  //     { name: 'timepicker', title: 'Timepicker', component: 'pickers/timepicker' },
  //     { name: 'datepicker', title: 'Datepicker', component: 'pickers/datepicker' }
  //   ]
  // },
  // {
  //   title: 'Layout',
  //   group: 'layout',
  //   component: 'layout',
  //   icon: 'view_compact',
  //   items: [
  //     { name: 'bottom-sheets', title: 'Bottom panels', component: 'components/bottom-sheets' },
  //     { name: 'expansion-panels', title: 'Expansion panels', component: 'components/expansion-panels' },
  //     { name: 'footer', title: 'Footer', component: 'components/footer' },
  //     { name: 'lists', title: 'Lists', component: 'components/lists' },
  //     { name: 'jumbotrons', title: 'Jumbotrons', badge: 'new', component: 'components/jumbotrons' },
  //     { name: 'menus', title: 'Menus', component: 'components/menus' },
  //     // { name: 'navigation-drawers', title: 'Navigation drawers', component: 'components/navigation-drawers' },
  //     { name: 'tabs', title: 'Tabs', component: 'components/tabs' },
  //     { name: 'toolbar', title: 'Toolbars', component: 'components/toolbar' },
  //     { name: 'timeline', title: 'Timeline', component: 'components/timeline' }
  //   ]
  // },
  {
    title: 'Forms & Controls',
    group: 'forms',
    component: 'forms',
    icon: 'view_compact',
    items: [
      { name: 'Form/EventForm', title: 'Basic / Event Form', component: 'Form/EventForm' },
      { name: 'Form/PaymentForm', title: 'Basic / Payment Form', component: 'Form/PaymentForm' },
      { name: 'Form/ShipForm', title: 'Basic / Ship Form', component: 'Form/ShippingForm' },
      { name: 'Form/Checkbox', title: 'Selection Controls / Checkbox', component: 'Form/Checkbox' },
      { name: 'Form/RadioButtons', title: 'Selection Controls / RadioButtons', component: 'Form/RadioButtons' },
      { name: 'Form/Switches', title: 'Selection Controls / Switches', component: 'Form/Switches' },
      { name: 'Form/SingleSelection', title: 'Select / SingleSelection', component: 'Form/SingleSelection' },
      { name: 'Form/MultiSelection', title: 'Select / MultiSelection', component: 'Form/MultiSelection' },
      { name: 'TextFields', title: 'Text Fields', component: 'Form/TextFields' }
    ]
  },
  {
    title: 'Utils',
    group: 'utils',
    component: 'utils',
    icon: 'edit',
    items: [
      { name: 'Utils/PDFDownload', title: 'PDFDownload', component: 'Utils/PDFDownload' },
      { name: 'Widgets/Datatable', title: 'Datatable', component: 'Widgets/Datatable' }
    ]
  }
  // { divider: true },
  // { header: 'More' },
  // {
  //   title: 'Messages',
  //   group: 'extra',
  //   icon: 'message',
  //   name: 'inbox'
  // },
  // {
  //   title: 'Pages',
  //   group: 'extra',
  //   icon: 'list',
  //   items: [
  //     { name: 'Login', title: 'Login', component: 'Login' },
  //     { name: '404', title: '404', component: 'NotFound' },
  //     { name: '403', title: '403', component: 'AccessDenied' },
  //     { name: '500', title: '500', component: 'ServerError' }
  //   ]
  // }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
