//com.spec.js
import { mount } from '@vue/test-utils'
import Component from '../../src/pages/ComponentTest.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
		const wrapper = mount(Component, {
			props: {
				name: 'myName',
			},
		});
		// expect(wrapper.classes()).toContain('bar')
		expect(wrapper.vm.count).toBe(0);
		const button = wrapper.find('button');
		button.trigger('click');
		expect(wrapper.vm.count).toBe(1);

		expect(wrapper.find('.msg').text()).toBe('hello');

		expect(wrapper.find('.name').text()).toBe('myName');
		wrapper.unmount();
	});
});

