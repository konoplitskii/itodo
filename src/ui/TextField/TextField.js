import React, {memo} from 'react';
import './TextField.scss';
import ErrorIcon from "../Icons/ErrorIcon";

const TextField = ({type,name,info,onChangeCallBack,error,value}) => {
    return (
        <div className="TextFieldBox">
            <label className="TextFieldLabel" htmlFor={name}>{info}</label>
            {
                error && <div className="TextFieldError">
                            <ErrorIcon/>
                            <span>Field required</span>
                       </div>
            }
            {
                type === "multiline"
                    ? <textarea
                        onChange={(e)=> onChangeCallBack({[e.target.name]:e.target.value})}
                        name={name}
                        className={`TextFieldInput TextFieldInput--areaText ${error && 'error'}`}
                        rows={4}
                        defaultValue={value ? value : null}
                    />
                    : <input
                        onChange={(e)=> onChangeCallBack({[e.target.name]:e.target.value})}
                        name={name}
                        className={`TextFieldInput ${error && 'error'}`}
                        type="text"
                        defaultValue={value ? value : null}
                    />
            }
        </div>
    );
};

export default memo(TextField);