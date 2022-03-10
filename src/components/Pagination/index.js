import './pagination.css'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export default function Pagination(props){
    const {page, totalPages, previousClick, nextClick} = props

    return(
        <div className="pagination">
            <div className='pages-content'>
                <button className='pag-prev arrows' onClick={previousClick}><FaArrowLeft size={20}/></button>
                <span className='pag-info'>{`${page} de ${totalPages}`}</span>
                <button className='pag-next arrows' onClick={nextClick}><FaArrowRight size={20}/></button>
            </div>
         </div>
    )
}