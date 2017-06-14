import React from 'react'
import { mount } from 'enzyme'
import Infos from '../js/components/infos'

describe('Infos', () => {
  let props;
  let mountedInfos;
  const infos = () => {
    !mountedInfos ?
      mountedInfos = mount(
        <Infos {...props} />
      ) : mountedInfos
    
    return mountedInfos
  }

  beforeEach(() => {
    props = {
      domain: undefined,
      user: undefined
    }
    mountedInfos = undefined
  })
  
  it('it always renders a <aside>', () => {
    const aside = infos().find('aside')
    expect(aside.length).toBeGreaterThan(0)
  })

  describe('the rendered <aside>', () => {
	  it('contains everything else that gets rendered', () => {
	    const aside = infos().find('aside')
	    const wrappingDiv = aside.first()
	    expect(wrappingDiv.children()).toEqual(infos().children())
	  })

	  it('does receive 2 props', () => {
      const aside = infos().find('aside')
	    const wrappingDiv = aside.first()
      expect(Object.keys(wrappingDiv.props()).length).toBe(2)
    })
  })

  it('always renders two <ul>', () => {
    expect(infos().find('ul').length).toBe(2)
  })

  describe('the first <ul>', () => {
  	it('has a class named "domain"', () => {
    	const ulDomain = infos().find('.domain')
      expect(ulDomain.length).toBe(1)
 	 	})
  })

  describe('the second <ul>', () => {
  	it('has a class named "user"', () => {
    	const ulUser = infos().find('.domain + .user')
      expect(ulUser.length).toBe(1)
 	 	})
  })

  describe('domain props', () => {
    beforeEach(() => {
      props.domain = jest.fn()
    })

    it('is still undefined', () => {
      const ulDomain = infos().find('.domain')
      expect(ulDomain.props().domain).not.toBeDefined()
    })
  })

  describe('user props', () => {
    beforeEach(() => {
      props.user = jest.fn()
    })

    it('is still undefined', () => {
      const ulUser = infos().find('.user')
      expect(ulUser.props().user).not.toBeDefined()
    })
  })

})