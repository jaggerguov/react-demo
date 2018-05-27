
export const AllCONTENT = "AllCONTENT"
export const INPUTCONTENT= "INPUTCONTENT"
export const INITINPUT= "INITINPUT"


export const getAllContent = (allContent) => ({ type: AllCONTENT, allContent })
export const getInputContent = (inputContent) => ({ type: INPUTCONTENT,inputContent })
export const getInputInit = (initValue) => ({ type: INITINPUT,initValue })