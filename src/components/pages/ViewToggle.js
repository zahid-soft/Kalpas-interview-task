import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import '../style/ViewToggle.css'

const ViewToggle = () => {
    return (
        <div className="viewToggle">
        <h2>View Toggle</h2>
        <div className="button">
        <span ><MdIcons.MdOutlineArticle size="2.5em" color='rgb(156,156,156)'/></span>
        <span><AiIcons.AiOutlineUnorderedList size="2.5em" color='rgb(156,156,156)'/> </span>
        </div>
        
        
        {/* <AiOutlineUnorderedList /> */}
       
            
        </div>
    )
}

export default ViewToggle
