import { useStoreTheme } from '@/app/zustand';
import './job.css';

const Job = ({ name, date, title, description, habilities, type, link }) => {

    const { theme } = useStoreTheme();

    return (
        <div className={`jobFather ${theme}`}>
            <div className='verticalLine'></div>
            <div className='verticalContex'>
                <time dateTime="">{date}</time>
                <h3>{title} - {name}</h3>
                <p>{description}</p>
            </div>

            <div className='divHabilities'>
                {habilities.map((hab, index) => (
                    <div className='divHabilitiess' key={index}>
                        <span className={`habSpan ${!index && "firstHab"}`}>{hab}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Job
