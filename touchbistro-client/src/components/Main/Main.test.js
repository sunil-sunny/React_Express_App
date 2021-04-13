import Main from './Main';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("Main Component Testing", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main />);
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('render a button', () => {

        expect(wrapper.find('#submit-btn').text()).toBe('Submit');

    });


    it('initial input value to be empty', () => {
        expect(wrapper.find('#user-input').prop('value')).toEqual('');
    });

    it('input value changed in state onChange', () => {

        const eventObj = { target: { value: 2 } };
        wrapper.find('#user-input').simulate('change', eventObj);
        wrapper.update();
        expect(wrapper.find('#user-input').prop('value')).toEqual(2);

    });

    it('submit alerts user when no input is enetered', () => {

        window.alert = jest.fn();
        const eventObj = { target: { value: '' } };
        wrapper.find('#user-input').simulate('change', eventObj);
        wrapper.find('#submit-btn').simulate('click');
        expect(window.alert).toHaveBeenCalledWith('Enter the Value');
    })

    it('submit button shows the div with all the median number', () => {

        const eventObj = { target: { value: 59 } };
        wrapper.find('#user-input').simulate('change', eventObj);
        expect(wrapper.find('#output-values').html())
            .toContain('median-values');

    })

})

