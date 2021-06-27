import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import {shallow} from 'enzyme'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;
beforeEach(()=>{
    
    wrapped = shallow(<App/>)
})
it('shows a comment box',()=>{
    // const div = document.createElement('div')

    // ReactDOM.render(<App/>,div);

    // // console.log(div.innerHTML)
    // expect(div).toContain('Comment Box ')
    // ReactDOM.unmountComponentAtNode(div);
    // No longer using like above
    expect(wrapped.find(CommentBox).length).toEqual(1);

})

it('shows a comment List',()=>{
    expect(wrapped.find(CommentList).length).toEqual(1);

})