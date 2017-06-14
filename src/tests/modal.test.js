import React from 'react'
import { mount } from 'enzyme'
import Modal from '../js/components/modal'


describe('Modal', () => {
  let props;
  let mountedModal;
  const modal = () => {
    !mountedModal ?
      mountedModal = mount(
        <Modal {...props} />
      ) : mountedModal
    
    return mountedModal
  }

  beforeEach(() => {
    props = {
      alertText: undefined,
      modal: undefined
    }
    mountedModal = undefined
  })
  
  it('it always renders a <div>', () => {
    const div = modal().find('div')
    expect(div.length).toBeGreaterThan(0)
  })

  describe('the rendered <div>', () => {
	  it('contains everything else that gets rendered', () => {
	    const divs = modal().find('div')
	    const wrappingDiv = divs.first()
	    expect(wrappingDiv.children()).toEqual(modal().children())
	  })

	  it('does receive 3 props', () => {
      const divs = modal().find('div')
	    const wrappingDiv = divs.first()
      expect(Object.keys(wrappingDiv.props()).length).toBe(3)
    })
  })

  it('always renders a <p>', () => {
    expect(modal().find('p').length).toBe(1)
  })

  it('always renders a <button>', () => {
    expect(modal().find('button').length).toBe(1)
  })

  describe('rendered <p>', () => {
    it('does receive one props', () => {
      const p = modal().find('p')
      expect(Object.keys(p.props()).length).toBe(1)
    })
  })  

 	describe('when `alertText` is undefined', () => {
    beforeEach(() => {
      props.alertText = jest.fn()
    })

    it('renders no text', () => {
      const p = modal().find('p')
      expect(p.props().alertText).not.toBeDefined()
    })

    it('shows no content', () => {
      const div = modal().find('div')
      expect(div.props().alertText).not.toBeDefined()
    })
  })

  describe('onclick event', () => {
    beforeEach(() => {
      props.modal = jest.fn()
    })

    it('is still undefined', () => {
      const div = modal().find('div')
      expect(div.props().modal).not.toBeDefined()
    })
  })

})