import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
};


/*
const Greetings: React.FC<GreetingsProps> = ({name, mark = '!'}) => {
    //FC : children props 기본 탑재
    return <div> hello! {name} {mark}</div>
}
*/
function Greetings({name, mark, optional, onClick}: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>클릭</button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}
export default Greetings;