import PrimaryColorPicker from '.'
import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Radio from '@material-ui/core/Radio'
import { createMount } from '@material-ui/core/test-utils'

configure({ adapter: new Adapter() })

describe('PrimaryColorPicker', () => {
  let mount

  beforeAll(() => {
    mount = createMount()
  })

  afterAll(() => {
    mount.cleanUp()
  })

  it('is truthy', () => {
    expect(PrimaryColorPicker).toBeTruthy()
  })

  it(`matches snapshot`, () => {
    const wrapper = mount(
      <PrimaryColorPicker onChange={(color) => console.log(color)} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`handles click`, () => {
    const cb = jest.fn()
    const wrapper = mount(
      <PrimaryColorPicker onChange={(color) => console.log(color)} />
    )
    const radio = wrapper.find(Radio).last()
    radio.simulate('click')
    expect(wrapper.find(Radio).last().props().checked).toBe(true)
    // console.log(radio.debug())
    // console.log(wrapper.find(Radio).last().debug())
    // wrapper.find('#deepPurple').at(1).simulate('change')
    // expect(cb).toHaveBeenCalled()
    // console.log(wrapper.find('#deepPurple').at(1).debug())
    // expect(wrapper.find('#deepPurple').at(1)).toHaveBeenCalled()
    // console.log(wrapper.find('#deepPurple').at(1).props().checked)
    // expect(wrapper.find('#deepPurple').at(1)).toHaveBeenCalled()
  })
})
