import styled from 'styled-components'

export default function ProgressBar(props){
    const {key, statName, stat} = props

    const num = stat + "%"

    return(
            <ProgressBarStyled>
                    <div className={`${key} progress`}>
                        <p className='stat-name'>{statName}: {stat}</p>
                        <div className='progress-bar'>
                            <span style={{width: num}} className='status-bar'></span>
                        </div>
                    </div>

            </ProgressBarStyled>
       
    )
}

const ProgressBarStyled = styled.div`
.progress{
    padding: 6px;
}

.stat-name{
    height: 30px;
}

.progress-bar{
    position: relative;
    width: 95%;
    animation: slideX 1.1s;
}

span{
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 100%;
    height: 0.6rem;
    background-color: var(--status-bar);
    border-radius: 0 20px 20px 0;
}

@keyframes slideX{
 from{
    width: 0;
    
 }

 to{
    width: 95%;
 }
}
`
