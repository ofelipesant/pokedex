import './loading.css'

export default function Loading(){
    return(
        <div className='loading-container'>
                <img 
                className='loading-image' 
                src='../images/loading2.gif' 
                alt='loading'
                />
            <h3 className='loading-text'>CARREGANDO</h3>
        </div>
    )
}