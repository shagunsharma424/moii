import { useNavigate, useParams } from "react-router-dom"

export default function Header(props)
{
    const navigate=useNavigate()
    return(<>
        <div className="row p-0 justify-content-between pl-5 pr-5 headerMainDiv">
            <div className="col-1 m-0 p-0 d-flex">
                <i class={`fa fa-microphone iconsFonts ${props.changeColor}`} aria-hidden="true"></i>
            </div>
            <div className="col-8 m-0 p-0 d-flex justify-content-center align-items-center">
                <p className={` ${props.changeColor} logoName mb-0 w-100`} onClick={()=>{navigate("/")}}>DIY</p>
            </div>
            <div className="col-1 m-0 p-0">
                <i class={`fa fa-search pl-3 pr-3 iconsFonts  ${props.changeColor} `} aria-hidden="true"></i>
                <i class={`fa fa-briefcase pl-3 iconsFonts  ${props.changeColor} `} aria-hidden="true"></i>
            </div>
        </div>
    </>)
}