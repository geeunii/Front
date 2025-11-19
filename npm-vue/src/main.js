import { createApp, h } from 'vue';
import App from './App.vue';

createApp({
  data() {
    return { message: 'Hello Vue 3!' };
  },
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('');
    },
  },
  render() {
    return h('div', [
      h('p', this.message),
      h(
        'button',
        {
          onClick: this.reverse,
        },
        'Reverse'
      ),
    ]);
  },
}).mount('#app');

// If you prefer mounting the App component from App.vue, comment out the
// createApp(...) above and use the line below instead:
// createApp(App).mount('#app')
