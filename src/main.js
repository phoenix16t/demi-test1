import HelloWorld from '@/components/HelloWorld';
 
export { HelloWorld };
 
function install(Vue) {
  Vue.component('HelloWorld', HelloWorld);
}

// Export the library as a plugin
// @vue/component
export default { install };