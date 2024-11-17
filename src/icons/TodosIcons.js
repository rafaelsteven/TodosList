import {ReactComponent as CheckIcon} from './sgv/check.svg';
import {ReactComponent as CruzIcon} from './sgv/cruz.svg';

function TodosIcons(props)
{

    const todosIconsArray = 
    {
        'check': <CheckIcon className="style-icons" fill={props.color}/>,
        'delete':<CruzIcon  className="style-icons" fill={props.color}/>,
    };
    return(
        <span 
        className={`span_accion icon-${props.type}`}

        onClick={props.onClick}
        >
            {todosIconsArray[props.type]}
        </span>
    );

}

export {TodosIcons};