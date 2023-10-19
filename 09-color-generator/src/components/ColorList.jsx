import SingleColor from "./SingleColor";

import mystyles from './ColorList.module.css';
import { nanoid } from "nanoid";

const ColorList = (props) => {
    return (
        <section className={mystyles.colors}>
            {props.colors.map( (color, index) => {
                return (
                    <SingleColor color={color} index={index} key={nanoid()} />
                );
            })}
        </section>
    );
};

export default ColorList;