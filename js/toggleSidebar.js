import { getElement } from './utils.js';

// selecting html elements
const toggleSidebar = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeSidebar = getElement('.sidebar-close');

toggleSidebar.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeSidebar.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});