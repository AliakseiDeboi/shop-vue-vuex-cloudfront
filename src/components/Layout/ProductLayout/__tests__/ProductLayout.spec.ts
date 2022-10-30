import { shallowMount } from '@vue/test-utils';
import ProductLayout from '@/components/Layout/ProductLayout/ProductLayout.vue';

describe('HelloWorld.vue', () => {
	it('renders props.msg when passed', () => {
		const wrapper = shallowMount(ProductLayout);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
