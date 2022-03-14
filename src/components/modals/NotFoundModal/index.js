import './not-found.css'
import {BsExclamationLg} from 'react-icons/bs'

export default function NotFoundModal(){
    return(
        <div className="modal-container">
            <div className="modal-content">
                <BsExclamationLg/>
                <span>Nenhum pokemon encontrado, verifique e pesquise novamente</span>
            </div>
        </div>
    )
}