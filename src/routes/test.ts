import axios from 'axios';
//
const router = {
  /**
  * 
  * @param
  *
  * @return
  */
  sendPost: async function(req: any, res :any): any
  {
    const retObj = {ret: false, message:"", data:{} };
    try {
console.log(req.body)
      const url = import.meta.env.VITE_API_URL; 
      const path = req.body.api_url;	
console.log("path=", url + path);
      const response = await axios.post(url + path, req.body, {
        headers: { 'Content-Type': 'application/json'}
      });
      const data = response.data;
    //console.log(data);
      return retObj.data = data;
    } catch (error) {
      retObj.message = "";
      console.error(error);
      return retObj;
    }
 }, 

  /**
  * 
  * @param
  *
  * @return
  */
  test1: async function(req: any, res :any): any
  {
    const retObj = {ret: false, message:""};
    const url = import.meta.env.VITE_API_URL; 
console.log("url=", url);
    try {
//    console.log(req.body);
      return retObj;
    } catch (error) {
      retObj.message = "";
      console.error(error);
      return retObj;
    }
 }, 
}
export default router;
